import React, { useState, useEffect, Button, Link } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/feed.css';
import feedImg from '../../Assets/images/loginIMG.png'
import 'material-icons/iconfont/material-icons.css';
import CommentIcon from '@mui/icons-material/Comment';
import { base_URL } from "../../constants";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineTwoToneIcon from "@mui/icons-material/ModeEditOutlineTwoTone";
import swal from "sweetalert";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';




export default function PostWall() {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [commentCount, setCommentCount] = useState(0);

    const [post, setPost] = useState([]);
    const [postList, setPostList] = useState([]);
    const [loginData, setLoginData] = useState(
        localStorage.getItem("loginData") ? JSON.parse(localStorage.getItem("loginData")) : null
    );


    useEffect(() => {

        getPosts();
    }, []);
    const getPosts = async () => {
        const res = await axios
            .get("/social-media-domain/users/304cccfe-a431-4330-810c-2fd288346dab/posts")
            .then((res) => {
                setPostList(res.data);
            })
            .catch(() => { });
    };


    function handleLike(item) {
        if (item.likedUserProfilesMap.hasOwnProperty(loginData.profileId)) {
            axios.get(`/social-media-domain/users/${loginData.profileId}/posts/${item.id}/unlike`)
                .then((res) => {
                    getPosts()
                })
                .catch(() => { });
        } else {
            axios.get(`/social-media-domain/users/${loginData.profileId}/posts/${item.id}/like`)
                .then((res) => {
                    getPosts()
                })
                .catch(() => { });
        }

        // if (isLiked) {
        //     setLikeCount(likeCount - 1);
        // } else {
        //     setLikeCount(likeCount + 1);
        // }
        // setIsLiked(!isLiked);
    }

    function handleComment() {
        setCommentCount(commentCount + 1);
    }


    const onUpdatePost = (item) => {
        window.location = `/update-post/${item.id}`
    }
    
    const deletePost = async(item) => {
        axios.delete(`/social-media-domain/users/${loginData.profileId}/posts/${item.id}`)
        .then((res) => {
            swal({
                title: "Success!",
                text: "Successfully deleted the post",
                icon: "success",
                button: "Ok",
              });
            getPosts()
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            {postList?.map((item, index) => {
                // console.log(item.likedUserProfilesMap.hasOwnProperty(item.id))
                return (
                    <div className="feed" key={index}>
                        <div className="post-container">
                            <div className="auth-cap" style={{ width: '100%', flexDirection: 'row', display: 'flex' }}>
                                <div style={{ width: '80%', flexGrow: '1' }}>
                                    <div className="feed-header">
                                        <br />
                                        <h5><AccountCircleIcon/>{item.userName}</h5>
                                    </div>
                                    <div className="caption">
                                        <p>{item.postDescription}</p>
                                    </div>
                                </div>
                               {item.postedBy === loginData.profileId && <div style={{ width: '20%', alignItems: 'center', justifyContent: 'space-evenly', display: 'flex' }}>
                                    <button onClick={() => deletePost(item)} style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(236, 239, 241)' }}>
                                        <DeleteIcon sx={{ color: "#B71C1C" }} />
                                    </button>
                                    <button onClick={() => onUpdatePost(item)} style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(236, 239, 241)' }}>
                                        <ModeEditOutlineTwoToneIcon />
                                    </button>
                                </div>}

                            </div>
                            <div style={{ display:'flex', width: '100%', height: '400px', alignItems: 'center', justifyContent: 'center'}}>
                                <img src={`data:image/png;base64,${item.imageData}`} className="feed-image" style={{ objectFit: 'cover', objectPosition: 'center',  width: '100%', height: '100%'}} alt="Image"></img>

                            </div>
                            {/* <div className="feed-img">
                                <img src={`data:image/png;base64,${item.imageData}`} className="feed-image" alt="Image"></img>
                            </div> */}
                            <div className="like-comment" style={{ padding: '20px'}}>
                                <div className="LikeButtonContainer">
                                    <div className="LikeButton">
                                        <button className={item.likedUserProfilesMap.hasOwnProperty(loginData.profileId) ? 'Liked' : 'NotLiked'} onClick={() => handleLike(item)}>
                                            {item.likedUserProfilesMap.hasOwnProperty(loginData.profileId) ? 'Liked' : 'Like'}
                                        </button>
                                        <span className="LikeCount">{Object.keys(item.likedUserProfilesMap).length} likes</span>
                                        &nbsp;&nbsp;&nbsp;
                                    </div>
                                </div>
                                <div className="btn-comment">
                                    <button className="btnComment">
                                        <a href={`/comment/${item.id}`}>   <span className="CommentCount"><CommentIcon></CommentIcon> {item.commentsList.length} comments</span></a>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>)

            })}
        </>
    );
}