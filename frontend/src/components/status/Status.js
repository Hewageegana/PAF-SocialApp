import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css';
import '../css/post.css';
import food from '../../Assets/images/food.jpg'
import food1 from '../../Assets/images/food1.jpg'
import food2 from '../../Assets/images/food2.jpg'
import '../css/status.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import swal from "sweetalert";


export default function Status() {
    const [post, setPost] = useState([]);
    const [statustList, setStatusList] = useState([]);
    const [loginData, setLoginData] = useState(
        localStorage.getItem("loginData") ? JSON.parse(localStorage.getItem("loginData")) : null
    );


    useEffect(() => {
        getStatus();
    }, []);

    const deleteStatus = async(item) => {
        axios.delete(`/social-media-domain/users/${loginData.profileId}/status/${item.id}`)
        .then((res) => {
            swal({
                title: "Success!",
                text: "Successfully deleted the Status",
                icon: "success",
                button: "Ok",
              });
              getStatus()
        }).catch(err => {
            console.log(err)
        })
    }

    const getStatus = async () => {
        const res = await axios
            .get(`/social-media-domain/users/${loginData.profileId}/status`)
            .then((res) => {
                setStatusList(res.data);
            })
            .catch(() => { });
    };

    const onUpdateStatus = (item) => {
        window.location = `/update-status/${item.id}`
    }

    return (
        <>
            <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">

                {
                    statustList.map((status, index) => {
                        return (
                                <div className="col">
                                    <div className="card">
                                        <img src={`data:image/png;base64,${status.imageData}`} style={{ height: 300, objectFit:'cover'}} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title"><AccountCircleIcon />{status.userName}</h5>
                                            <p className="card-text">{status.statusContent}</p>
                                            {status.postedBy === loginData.profileId && <div><button type="button" class="btn btn-danger" style={{ marginInlineEnd: 20}} onClick={() => deleteStatus(status)}>DELETE</button>
                                            <button type="button" class="btn btn-primary" onClick={() => onUpdateStatus(status)}>EDIT</button></div>}
                                        </div>
                                    </div>
                                </div>
                            
                        )
                    })
                }
                </div>
            </div>
        </>
    );
}