import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css';
import '../css/post.css';
import '../css/comment.css';
import loginimg from '../../Assets/images/photo1.jpeg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SendIcon from '@mui/icons-material/Send';


export default function AddComment() {
    return (
        <>
            <div className="comment-container">
                <div className="user-detail">
                    <div className="user-name">
                        <h5><AccountCircleIcon /> &nbsp;Rusiru Hewageegana</h5>
                    </div>
                    <div className="usr-caption">
                        <p>amazing dinner with foodies</p>
                    </div>
                </div>

                <div className="comment-image-div">
                    <img className="comment-image" src={loginimg}></img>
                </div>
                <div className="comment-section">
                    <div className="user-name">
                        <h7><AccountCircleIcon /> Rusiru Hewageegana</h7>
                    </div>
                    <div className="comment-view">
                        <p>Amazing food, be happy and safe foodie</p>
                    </div>
                </div>
                <div className="comment-field">
                    <div className="">
                        <input type="text" class="comment-input" id="exampleFormControlInput1" placeholder="type ur comment here....." />
                    </div>
                    <div>
                        &nbsp;&nbsp;&nbsp;&nbsp; <button><SendIcon /></button>
                    </div>
                </div>

                <span className="op">faadddddddddddddddddv</span>
            </div>
        </>
    );
}