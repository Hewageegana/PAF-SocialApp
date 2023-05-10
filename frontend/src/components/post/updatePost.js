import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css';
import '../css/post.css';
import loginimg from '../../Assets/images/photo1.jpeg'
import { useParams } from "react-router-dom";
import swal from "sweetalert";


export default function UpdatePost() {
    const [post, setPost] = useState([]);
    const [image, setImage] = useState(null);
    const [description, setDesc] = useState("");

    const { id } = useParams();
    const [loginData, setLoginData] = useState(
        localStorage.getItem("loginData") ? JSON.parse(localStorage.getItem("loginData")) : null
    );  

    useEffect(() => {

        getPosts();
    }, []);
    const getPosts = async () => {
        const res = await axios
            .get("/social-media-domain/posts/" + id)
            .then((res) => {
                setPost(res.data);
                console.log(res.data)
                setDesc(res.data.postDescription)
            })
            .catch(() => { });
    };

    const AddPost = (event) => {
        event.preventDefault();
        const user = JSON.parse(localStorage.getItem('loginData'))

        const postDTO = {
            "postDescription": description.length === 0 ? post.postDescription : description
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
        formData.append('image',  newImage);

        fetch( `/social-media-domain/users/${profileId}/posts/${id}`, {
            method: 'PUT',
            body: formData
        }).then(response => {
            console.log(response, "12321-3192-3123123120-312301-2");
            window.location = "/"
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
                            <img id="image-preview" src={`data:image/png;base64,${post.imageData}`} className="img-fluid g-0"  style={{objectFit: 'cover', objectPosition: 'center', objectFit:'cover', width: '100%', height: '100%'}} alt=""></img>
                        </div>
                        <div className="col-lg-6">
                            <h1>Update your Post here</h1>
                            <form className="publishPost" onSubmit={AddPost} >
                                <div className="col-lg-7 ">
                                    <div class="input-group">
                                        <input type="file" class="form-control" id="inputGroupFile04" onChange={(e) => {
                                            const file = e.target.files[0];

                                            const reader = new FileReader();

                                            const fileSize = file.size; // in bytes
                                            const maxSize = 1024 * 1024; // 1 MB
                                          
                                            if (fileSize > maxSize) {
                                              swal("File size is too big!");
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
                                        }} aria-describedby="inputGroupFileAddon04" aria-label="Upload" accept="image/*"/>

                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div class="form-floating">
                                        <textarea class="form-control" value={description} placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 150 + 'px' }}
                                            onChange={(e) => {
                                                setDesc(e.target.value);
                                            }}
                                        />
                                        <label for="floatingTextarea2">What's on your mind?</label>
                                    </div>
                                    <button type="submit" id="btn-publish" class="btn btn-outline-primary">Update</button>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}