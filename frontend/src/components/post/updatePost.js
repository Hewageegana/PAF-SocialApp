import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css';
import '../css/post.css';
import loginimg from '../../Assets/images/photo1.jpeg'


export default function UpdatePost() {
    const [post, setPost] = useState([]);
    const [image, setImage] = useState(null);
    const [description, setDesc] = useState("");


    const AddPost = (event) => {
        event.preventDefault();
        const user = JSON.parse(localStorage.getItem('loginData'))

        const postDTO = {
            "postDescription": description
        }

        const newPost = createPost(user.profileId, postDTO, image)
        // const config = {
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        // };
        // const data = new FormData();

        // data.append('image', image);
        // data.append('postDTOString', {
        //     "postDescription": description
        // });
        // axios.post('/social-media-domain/users/304cccfe-a431-4330-810c-2fd288346dab/posts', data, config)
        //     .then(response => console.log(response.data))
        //     .catch(error => console.error(error));
        // console.log("post addfhfhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
    };

    const createPost = async (profileId, postDTO, newImage) => {
        const formData = new FormData();
        formData.append('postDTOString', JSON.stringify(postDTO));
        formData.append('image', newImage);

        fetch('/social-media-domain/users/' + profileId + '/posts', {
            method: 'POST',
            body: formData
        }).then(response => {
            console.log(response);
            window.location = "/"
        }).catch(error => {
            console.error(error);
        });
    }

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
                            <form className="publishPost" onSubmit={AddPost} >
                                <div className="col-lg-7 ">
                                    <div class="input-group">
                                        <input type="file" class="form-control" id="inputGroupFile04" onChange={(e) => {
                                            const files = e.target.files
                                            setImage(files[0])
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
                                    <button type="submit" id="btn-publish" class="btn btn-outline-primary">Publish</button>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}