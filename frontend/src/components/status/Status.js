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
                            <img src={food} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"><AccountCircleIcon/>foodie app</h5>
                                <p className="card-text">Indulging in a delicious feast with great company.taste like a heaven recomended for foodies</p>
                                <button type="button" class="btn btn-danger">DELETE</button>
                            </div>
                        </div>
                    </div>
                   

                </div>
            </div>
        </>
    );
}