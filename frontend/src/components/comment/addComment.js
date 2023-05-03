import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css';
import '../css/post.css';
import '../css/comment.css';
import loginimg from '../../Assets/images/photo1.jpeg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SendIcon from '@mui/icons-material/Send';


export default function AddComment() {

    const [commentText, setCommentText] = useState("");

    function sendData(e) {
        const newComment = {
            commentText
        };
        axios
            .post("social-media-domain/users/304cccfe-a431-4330-810c-2fd288346dab/posts/b1f84bf0-5227-4d6d-b2bc-8c75debbc871/comments", newComment)
            .then(() => {
                swal({
                    title: "Success!",
                    text: "Successfully added the room",
                    icon: "success",
                    button: "Ok",
                });

            })
            .catch((e) => {
                swal("Please fill Form correctly" + e);
            });
    }

    const [post, setPost] = useState([]);
    const [postList, setPostList] = useState([]);


    useEffect(() => {
        const getPosts = async () => {
            const res = await axios
                .get("/social-media-domain/users/304cccfe-a431-4330-810c-2fd288346dab/posts")
                .then((res) => {
                    setPostList(res.data);
                    res.data.map(item => {
                        console.log(item);
                    })

                })
                .catch(() => { });
        };
        getPosts();
    }, []);
    
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
                        <input type="text" class="comment-input" id="exampleFormControlInput1" placeholder="type ur comment here....." onChange={(e) => {
                            setCommentText(e.target.value);
                        }} />
                    </div>
                    <div>
                        &nbsp;&nbsp;&nbsp;&nbsp; <button type="submit" onClick={sendData()}><SendIcon /></button>
                    </div>
                </div>

                <span className="op">hidden text</span>
            </div>
        </>
    );
}