import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css';
import '../css/post.css';
import '../css/header.css';
import { GoogleLogout } from "react-google-login";
import { client_id } from "../../constants";



export default function header() {

    const onLogout = () => {
        localStorage.removeItem('loginData');
        window.location = "/"
    }

    return (
        <>
            <div>
            
                    <nav class="navbar navbar-expand-lg navbar-light bg-success">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">Foodies</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/post">Create Post</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/status" tabindex="-1" >Status</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/create-status" tabindex="-1" >Create Status</a>
                                    </li>
                                </ul>
                                <form class="d-flex">
                                <GoogleLogout
                                            clientId={client_id}
                                            buttonText="Logout"
                                            onLogoutSuccess={onLogout}
                                        />
                                </form>
                            </div>
                        </div>
                    </nav>
              
            </div>
        </>
    );
}