import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import swal from "sweetalert";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css';
import '../css/post.css';
import '../css/comment.css';
import loginimg from '../../Assets/images/photo1.jpeg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SendIcon from '@mui/icons-material/Send';
import { useParams } from "react-router-dom";
import { Audio, Circles } from "react-loader-spinner";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineTwoToneIcon from "@mui/icons-material/ModeEditOutlineTwoTone";
import CloseIcon from "@mui/icons-material/Close";


export default function AddComment() {

    const { id } = useParams();
    const [postList, setPostList] = useState(null);
    const [loginData, setLoginData] = useState(
        localStorage.getItem("loginData") ? JSON.parse(localStorage.getItem("loginData")) : null
    );
    const [comment, setComment] = useState("");
    const [commentId, setCommentId] = useState("");
    const [isUpdate, setIsUpdate] = useState(false);

    const scrollRef = useRef(null);

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

    const addComment = async (e) => {
        e.preventDefault();
        if(!comment){
          swal("Empty Comment, Please Type Comment Before Send");
          return
        }
        const newComment = {
            "commentText": comment
        }
        if(isUpdate){
            axios.put(`/social-media-domain/users/${loginData.profileId}/posts/${id}/comments/${commentId}`, newComment)
            .then((res) => {
                swal({
                    title: "Success!",
                    text: "Successfully updated the comment",
                    icon: "success",
                    button: "Ok",
                  });
                getPosts()
                setComment("")
                setCommentId("")
                isUpdate(false)
            }).catch(err => {
                console.log(err)
            })
        }
        else{
            axios.post(`/social-media-domain/users/${loginData.profileId}/posts/${id}/comments`, newComment)
            .then((res) => {
                swal({
                    title: "Success!",
                    text: "Successfully added the comment",
                    icon: "success",
                    button: "Ok",
                  });
                getPosts()
                setComment("")
            }).catch(err => {
                console.log(err)
            })
        }

    }

    const onUpdatePost = (item) => {
        window.location = `/update-post/${item.id}`
    }

    const deletePost = async (item) => {
        axios.delete(`/social-media-domain/users/${loginData.profileId}/posts/${item.id}`)
            .then((res) => {
                swal({
                    title: "Success!",
                    text: "Successfully deleted the post",
                    icon: "success",
                    button: "Ok",
                });
                window.location.replace('/')
            }).catch(err => {
                console.log(err)
            })
    }

    const handleDelete = (comment) => {
        axios
        .delete(`/social-media-domain/users/${loginData.profileId}/posts/${id}/comments/${comment.commentId}`)
        .then((res) => {
          swal({
            title: "Success!",
            text: "Successfully Deleted Comment",
            icon: "success",
            button: "Ok",
          });
          getPosts()
        })
        .catch((e) => {
          swal("Please fill Form correctly" + e);
        });
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
        return (
            <>
                <div className="comment-container" ref={scrollRef}>
                    <div className="auth-cap" style={{ width: '100%', flexDirection: 'row', display: 'flex' }}>
                        <div style={{ width: '80%', flexGrow: '1' }}>
                            <div className="feed-header">
                                <br />
                                <h5>{postList.userName}</h5>
                            </div>
                            <div className="caption">
                                <p>{postList.postDescription}</p>
                            </div>
                        </div>
                        {postList.postedBy === loginData.profileId &&<div style={{ width: '20%', alignItems: 'center', justifyContent: 'space-evenly', display: 'flex' }}>
                            <button onClick={() => deletePost(postList)} style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(236, 239, 241)' }}>
                                <DeleteIcon sx={{ color: "#B71C1C" }} />
                            </button>
                            <button onClick={() => onUpdatePost(postList)} style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(236, 239, 241)' }}>
                                <ModeEditOutlineTwoToneIcon />
                            </button>
                        </div>}

                    </div>
                    <div style={{ display: 'flex', width: '100%', height: '400px', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={`data:image/png;base64,${postList.imageData}`} className="comment-image" style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%' }} alt="Image"></img>
                    </div>
                    <div className="comment-list-container" style={{ marginTop: 10 }}>
                        <h2>Comments</h2>
                        <div className="comment-list">
                            {postList.commentsList?.map((comment, index) => (
                                <div key={index} className="comment-container2">
                                    <div className="comment-header">
                                        {/* <img src={comment.avatarUrl} alt={comment.commentedName} /> */}
                                        <p>{comment.commentedName}</p>
                                    </div>
                                    <div className="comment-body">
                                        <p>{comment.commentText}</p>
                                    </div>
                                    {comment.commentedBy === loginData.profileId &&<div className="comment-actions">
                                        <button onClick={() => handleDelete(comment)}>Delete</button>
                                        <span>·</span>
                                        <button onClick={() => {
                                            setComment(comment.commentText)
                                            setCommentId(comment.commentId)

                                            scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
                                            setIsUpdate(true)
                                        }}>Edit</button>
                                        <span>·</span>
                                        <span>{'lll'}</span>
                                    </div>}
                                </div>
                            ))}
                        </div>
                        <form onSubmit={addComment} className="comment-input-container">
                            <input
                                type="text"
                                placeholder="Write a comment..."
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                            <div>
                                <button type="submit" className="comment-input-container-submit" style={{ marginTop: 15, marginInlineEnd: 20 }}>{isUpdate ? "Update" : "Post"}</button>
                                {isUpdate && (
                                    <button
                                        type="submit"
                                        className="comment-input-container-close"
                                        onClick={() => {
                                            setIsUpdate(false);
                                            setComment("");
                                            setCommentId("");
                                        }}
                                    >
                                        <CloseIcon />
                                    </button>
                                )}
                            </div>

                        </form>
                    </div>
                    <span className="op">faadddddddddddddddddv</span>
                </div>
            </>
        );
    }

}