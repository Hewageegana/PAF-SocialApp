import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css';
import '../css/post.css';
import loginimg from '../../Assets/images/photo1.jpeg'


export default function createPost() {
    return (
        <>
            <div className="Form my-4 mx-2">
                <div className="container">
                    <div className="row g-0" id="row" >
                        <div className="col-lg-4">
                            <img src={loginimg} className="img-fluid" alt=""></img>
                        </div>
                        <div className="col-lg-6">
                            <h1>Publish your Post here</h1>
                            <form className="publishPost">
                                <div className="col-lg-7 ">
                                    <div class="input-group">
                                        <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                                        
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div class="form-floating">
                                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 150+'px'}}></textarea>
                                        <label for="floatingTextarea2">What's on your mind?</label>
                                    </div>
                                    <button type="button" id="btn-publish" class="btn btn-outline-primary">Primary</button>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}