import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css';
import '../css/post.css';
import loginimg from '../../Assets/images/photo1.jpeg'
import '../css/status.css'


export default function CreateStatus() {
    const [post, setPost] = useState([]);
    const [statustList, setStatusList] = useState([]);


    useEffect(() => {
        const getStatus = async () => {
            const res = await axios
                .get("/social-media-domain/users/304cccfe-a431-4330-810c-2fd288346dab/status")
                .then((res) => {
                    setStatusList(res.data);
                    res.data.map(item => {
                        console.log(item);
                    })

                })
                .catch(() => { });
        };
        getStatus();
    }, []);

    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <button type="button" class="btn btn-danger">DELETE</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}