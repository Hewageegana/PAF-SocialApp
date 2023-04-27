import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css';

export default function Register() {
    return (
        <>
            <div
                class="container col-lg-8 position-absolute top-50 start-50 translate-middle bg-white shadow-sm rounded-4"
            >
                <div class="row justify-content-center align-items-center text-center">
                    <div class="col-lg-8 p-4 w-50">

                        <h2 class="my-3 text-center">Register Here</h2>

                        <form>

                            <div class="mb-3">
                                <input
                                    type="email"
                                    name=""
                                    class="form-control p-3 shadow-none rounded-pill"
                                    id=""
                                    placeholder="Email"
                                />
                            </div>
                            <div class="mb-3">
                                <input
                                    type="text"
                                    name=""
                                    class="form-control p-3 shadow-none rounded-pill"
                                    id=""
                                    placeholder="User Name"
                                />
                            </div>

                            <div class="mb-3">
                                <input
                                    type="password"
                                    name=""
                                    class="form-control p-3 shadow-none rounded-pill"
                                    id=""
                                    placeholder="Password"
                                />
                            </div>

                            <div class="mb-3">
                                <input
                                    type="text"
                                    name=""
                                    class="form-control p-3 shadow-none rounded-pill"
                                    id=""
                                    placeholder="Age"
                                />
                            </div>
                            <div class="input-group mb-3">
                               
                                <select class="form-control p-3 shadow-none rounded-pill" id="inputGroupSelect03" aria-label="Example select with button addon">
                                    <option selected>Choose...</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                  
                                </select>
                            </div>
                            <div class="mb-3">
                                <button
                                    class="btn btn-primary p-3 btn-custom shadow-none rounded-pill w-100"
                                >
                                    Sign Up
                                </button>

                            </div>
                        </form>
                        <div class="mb-3">

                        </div>
                        <div class="my-3">
                            <p>Already registered? Login <a href="/">here</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}