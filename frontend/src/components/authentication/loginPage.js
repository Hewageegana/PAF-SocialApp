import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css';
import loginimg from '../../Assets/images/photo1.jpeg'


export default function Authentication() {
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
                                <div className="form-row">
                                    <div className="col-lg-7">
                                        <input type="email" className="form-control my-3 p-2" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-lg-7">
                                        <input type="password" className="form-control my-3 p-2" placeholder="Password" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-lg-7">
                                        <button type="button" className="btnLogin mt-3 mb-5">Login</button>
                                        <button type="button" className="btnLogin mt-3 mb-5" id="btn-auth">Login with google</button>
                                    </div>
                                    
                                </div>
                                
                                <a href="#" className="ss1">Forget Password?</a>
                                <p>Don't have an acount?<a href="/register" className="ss1"> Register here</a></p>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}