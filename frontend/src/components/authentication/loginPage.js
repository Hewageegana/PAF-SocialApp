import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css';
import loginimg from '../../Assets/images/photo1.jpeg'
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { client_id } from "../../constants";
import swal from "sweetalert";


export default function Authentication() {


    const onSuccess = async (res) => {
        console.log("Login success: Current user: ", res.profileObj)
        // localStorage.setItem('loginData', JSON.stringify(res.profileObj));
        // window.location.reload()

        const user = res.profileObj

        await axios.get(`/social-media-domain/users/${user.googleId}`)
            .then((result) => {
                const UserData = {
                    "profileId": result.data.profileId,
                    "userId": result.data.userId,
                    "profileName": result.data.profileName,
                }
                localStorage.setItem('loginData', JSON.stringify(UserData));
                window.location.reload()

                // const arr = result.data?.filter(item => {
                //     return item.userId === user.googleId
                // })
                // if (arr.length === 0) {
                //     const newUser = {
                //         "userId": user.googleId,
                //         "profileName": user.name,
                //         "age": 0,
                //         "gender": ""

                //     };
                //     axios
                //         .post("/social-media-domain/users", newUser)
                //         .then(() => {
                //             localStorage.setItem('loginData', JSON.stringify(user));
                //             window.location.reload()
                //         })
                //         .catch((e) => {
                //             swal("Error while registering New user" + e);
                //         });
                // }
                // else {
                //     localStorage.setItem('loginData', JSON.stringify(user));
                //     window.location.reload()
                // }
            }).catch((err) => {
                const newUser = {
                    "userId": user.googleId,
                    "profileName": user.name,
                    "age": 0,
                    "gender": ""

                };
                axios
                    .post("/social-media-domain/users", newUser)
                    .then((response) => {
                        const newUserData = {
                            "profileId": response.data.profileId,
                            "userId": response.data.userId,
                            "profileName": response.data.profileName,
                        }
                        localStorage.setItem('loginData', JSON.stringify(newUserData));
                        window.location.reload()
                    })
                    .catch((e) => {
                        swal("Error while registering New user" + e);
                    });
            })
    }

    const onFailure = (res) => {
        console.log("Login Faild: res: ", res)
    }

    const onLogout = (res) => {
        console.log("Logout", res)
    }

    return (
        <>
            <div className="Form my-4 mx-2">
                <div className="container">
                    <div className="row g-0" id="row" >
                        <div className="col-lg-5">
                            <img src={loginimg} className="img-fluid" alt=""></img>
                        </div>
                        <div className="col-lg-7 px-5 pt-5">
                            <h1 className="font-weight-bold py-3">Hello, Foodie</h1>

                            <h4>Sign into your account</h4>
                            <form>
                                <div className="form-row" style={{}}>
                                    <GoogleLogin
                                        clientId={client_id}
                                        buttonText="Login with Google"
                                        onSuccess={onSuccess}
                                        onFailure={onFailure}
                                        cookiePolicy={'single_host_origin'}
                                        isSignedIn={true}
                                        style={{ alignItems: 'center'}}
                                        className="btnLogin mt-3 mb-3"
                                    />
                                </div>
                                {/* <div className="form-row">
                                    <div className="col-lg-7">
                                        <button type="button" className="btnLogin mt-3 mb-5">Login</button>
                                    
                                        <GoogleLogin
                                            clientId={client_id}
                                            buttonText="Login with Google"
                                            onSuccess={onSuccess}
                                            onFailure={onFailure}
                                            cookiePolicy={'single_host_origin'}
                                            isSignedIn={true}
                                        />
                                        <GoogleLogout
                                            clientId={client_id}
                                            buttonText="Logout"
                                            onLogoutSuccess={onLogout}
                                        />
                                    </div>

                                </div> */}
{/* 
                                <a href="#" className="ss1">Forget Password?</a>
                                <p>Don't have an acount?<a href="/register" className="ss1"> Register here</a></p> */}
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}