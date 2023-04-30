import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css';
import '../css/post.css';
import '../css/comment.css';
import loginimg from '../../Assets/images/photo1.jpeg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function AddComment() {
    return (
        <>
            <div className="Form my-4 mx-2">
                <div className="container">
                    <div className="row g-0" id="row" >
                        <div className="col-lg-4">
                            <img src={loginimg} className="img-fluid" alt=""></img>
                        </div>

                        <div className="col-lg-5" >
                            <div className="scroll-view">
                                <div style={{ height: 'auto', overflow: 'scroll' }}>
                                    <ul>
                                        <li>
                                            <div className="propic-name">
                                                <AccountCircleIcon /> <p>Rusiru Hewageegana</p>
                                            </div>
                                        </li>

                                    </ul>


                                </div>
                            </div>
                            <div className="com" id="type-comment">
                                <form class="row g-3">

                                    <div class="col-auto">

                                        <input type="text" class="form-control" id="inputPassword2" placeholder="Comment here ...." />
                                    </div>
                                    <div class="col-auto">
                                        <button type="submit" class="btn btn-primary mb-3">Comment</button>
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}