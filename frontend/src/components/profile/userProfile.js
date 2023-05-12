import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/profile.css";
import loginimg from "../../Assets/images/photo1.jpeg";
import swal from "sweetalert";
import Select from 'react-select';
import { GoogleLogout, useGoogleLogout } from "react-google-login";
import { ageValidation, client_id, validMobile } from "../../constants";

const options = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' }
];

export default function Profile() {

  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData") ? JSON.parse(localStorage.getItem("loginData")) : null
  );
  const [profileName, setProfilename] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    await axios.get(`/social-media-domain/users/${loginData.userId}`)
      .then((result) => {
        setProfilename(result.data.profileName)
        setAge(result.data.age)
        setMobile(result.data.mobileNumber)
        if (result.data.gender.length > 0) {
          setGender({ value: result.data.gender, label: result.data.gender })

        }
        else {
          setGender("")
        }
      }).catch((err) => {
        console.log("🚀 ~ file: userProfile.js:19 ~ .then ~ err:", err)

      })
  }

  function addLeadingZero(str) {
    if (str.charAt(0) !== '0') {
      str = '0' + str;
    }
    return str;
  }

  const profileUpdate = async (e) => {
    e.preventDefault();
    const formattedPhoneNumber = mobile.replace(/^(?:\+94 ?|0)/, '').replace(/\s/g, '');
    const validNumber = mobile.length === 0 || validMobile.test(addLeadingZero(formattedPhoneNumber)) ? true : false 
    if(!validNumber){
      swal("Incorrect Mobile Number Format");
      return
    }
    const validAge = age.length === 0 || Number(age) === 0 || ageValidation.test(age) ? true : false
    if(!validAge){
      swal("Incorrect Age");
      return
    }
    const updateUser = {
      "profileName": profileName,
      "age": age,
      "gender": gender.value,
      "mobileNumber": addLeadingZero(formattedPhoneNumber)
    }

    axios.put(`/social-media-domain/users/${loginData.profileId}`, updateUser)
      .then((res) => {
        swal({
          title: "Success!",
          text: "Successfully updated the profile",
          icon: "success",
          button: "Ok",
        });
        getUser()
      }).catch(err => {
        console.log(err)
      })
  }

  const handleLogoutSuccess = async (item) => {
    localStorage.removeItem('loginData');
    window.location.replace('/')
    axios.delete(`/social-media-domain/users/${loginData.profileId}`)
      .then((res) => {

      }).catch(err => {
        console.log(err)
      })
  }


  return (
    <>
      <div className="container profile-cont">
        <h1>User Profile Management</h1>
        <form onSubmit={profileUpdate}>
          <div className="avatar">
            <img src={loginData.ImageUrl} alt="" />
          </div>
          <input type="text" name="profilename" placeholder="Profile Name" value={profileName} onChange={(e) => setProfilename(e.target.value)} required />
          <input type="text" name="mobile" placeholder="Mobile Number " value={mobile} onChange={(e) => setMobile(e.target.value)} />
          <input type="text" name="age" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />

          <Select
            className="select-gender"
            placeholder={"select Gender"}
            value={gender}
            onChange={(options) => setGender(options)}
            options={options}
          />
          <div className="buttons">
            <button type="submit" class="btn btn-success">
              Save changes
            </button>&nbsp;&nbsp;&nbsp;&nbsp;
            <GoogleLogout
              clientId={client_id}
              buttonText="Delete User"
              onLogoutSuccess={handleLogoutSuccess}
              render={({ onClick }) => (
                <button type="button" onClick={onClick} class="btn btn-danger">
                  Delete Account
                </button>
              )}
            />

          </div>
        </form>
      </div>
    </>
  );
}
