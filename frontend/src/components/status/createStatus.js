import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css';
import '../css/post.css';
import loginimg from '../../Assets/images/photo1.jpeg'
import swal from "sweetalert";


export default function CreateStatus() {
    const [post, setPost] = useState([]);
    const [image, setImage] = useState(null);
    const [description, setDesc] = useState("");


    const AddStatus = (event) => {
        event.preventDefault();
        const user = JSON.parse(localStorage.getItem('loginData'))

        const statusDTO = {
            "statusContent": description
        }

        const newStatus = createStatus(user.profileId, statusDTO, image)
    };

    const createStatus = async (profileId, statusDTO, newImage) => {
        const formData = new FormData();
        formData.append('stringStatusDTO', JSON.stringify(statusDTO));
        formData.append('image', newImage);

        fetch('/social-media-domain/users/' + profileId + '/status', {
            method: 'POST',
            body: formData
        }).then(response => {
            window.location.replace("/status")
        }).catch(error => {
            console.error(error);
        });
    }

    return (
        <>
            <div className="Form my-4 mx-2">
                <div className="container">
                    <div className="row g-0" id="row" style={{ minHeight: '500px'}}>
                        <div className="col-lg-4">
                            <img id="image-preview" src={loginimg} style={{objectFit: 'cover', objectPosition: 'center', objectFit:'cover', width: '100%', height: '100%'}} className="img-fluid g-0" alt=""></img>
                        </div>
                        <div className="col-lg-6">
                            <h1>Create your Status here</h1>
                            <form className="publishPost" onSubmit={AddStatus} >
                                <div className="col-lg-7 ">
                                    <div class="input-group">
                                        <input type="file" class="form-control" id="inputGroupFile04" onChange={(e) => {
                                            const file = e.target.files[0];

                                            const reader = new FileReader();

                                            const fileSize = file.size; // in bytes
                                            const maxSize = 1024 * 1024; // 1 MB

                                            if (fileSize > maxSize) {
                                                swal("Image size is too big!");
                                                e.target.value = null; // reset the file input
                                                return;
                                            }

                                            reader.onload = function (e) {
                                                const imagePreview = document.getElementById("image-preview");
                                                imagePreview.src = e.target.result;
                                                imagePreview.style.display = "block";
                                            };

                                            reader.readAsDataURL(file);
                                            setImage(file)
                                        }} aria-describedby="inputGroupFileAddon04" aria-label="Upload" />

                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div class="form-floating">
                                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 150 + 'px' }}
                                            onChange={(e) => {
                                                setDesc(e.target.value);
                                            }}
                                        />
                                        <label for="floatingTextarea2">What's on your mind?</label>
                                    </div>
                                    <button type="submit" id="btn-publish" class="btn btn-outline-primary">Create Story</button>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}