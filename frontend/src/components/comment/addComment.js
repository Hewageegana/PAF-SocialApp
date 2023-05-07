import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css';
import '../css/post.css';
import '../css/comment.css';
import loginimg from '../../Assets/images/photo1.jpeg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SendIcon from '@mui/icons-material/Send';
import { useParams } from "react-router-dom";
import { Audio, Circles } from "react-loader-spinner";


export default function AddComment() {

    const { id } = useParams();
    const [postList, setPostList] = useState(null);
    const [loginData, setLoginData] = useState(
        localStorage.getItem("loginData") ? JSON.parse(localStorage.getItem("loginData")) : null
    );  
    const [comment, setComment] = useState("");
    const [commentId, setCommentId] = useState("");

    useEffect(() => {

        getPosts();
    }, []);
    const getPosts = async () => {
        const res = await axios
            .get("/social-media-domain/posts/" + id)
            .then((res) => {
                setPostList(res.data);
            })
            .catch(() => { });
    };

    const addComment = async() => {
        const newComment = {
            "commentText": comment
        }
        axios.post(`/social-media-domain/users/${loginData.profileId}/posts/${id}/comments`, newComment)
        .then((res) =>{
            getPosts()
            setComment("")
        }).catch(err => {
            console.log(err)
        })
    }


    if (postList === null) {
        return (
            <div style={{ display: 'flex', backgroundColor: 'rgba(33, 33, 33, 0.5)', width: '100%', height: '100vh', flex: 1, alignItems: "center", justifyContent: 'center' }}>
                <Circles
                    height="180"
                    width="180"
                    color="#4fa94d"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        )
    }
    else {
        console.log(postList)
        return (
            <>
                <div className="comment-container">
                    <div className="user-detail">
                        <div className="user-name">
                            <h5><AccountCircleIcon /> &nbsp;{postList.userName}</h5>
                        </div>
                        <div className="usr-caption">
                            <p>{postList.postDescription}</p>
                        </div>
                    </div>

                    <div className="comment-image-div">
                        <img className="comment-image" src={`data:image/png;base64,${postList.imageData}`}></img>
                    </div>
                    {postList.commentsList?.map((item, index) => {
                        return (
                            <div className="comment-section">
                                <div className="user-name">
                                    <h7><AccountCircleIcon /> {item.commentedName}</h7>
                                </div>
                                <div className="comment-view">
                                    <p>{item.commentText}</p>
                                </div>
                            </div>
                        )
                    })}

                    <div className="comment-field">
                        <div className="">
                            <input type="text" value={comment} class="comment-input" id="exampleFormControlInput1" placeholder="type ur comment here....." onChange={(e) => {
                                setComment(e.target.value)
                            }} />
                        </div>
                        <div>
                            &nbsp;&nbsp;&nbsp;&nbsp; <button onClick={addComment}><SendIcon color="primary"/></button>
                        </div>
                    </div>

                    <span className="op">faadddddddddddddddddv</span>
                </div>
            </>
        );
    }

}