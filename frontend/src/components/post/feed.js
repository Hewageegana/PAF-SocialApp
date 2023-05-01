import React, { useState, useEffect, Button, Link } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/feed.css';
import feedImg from '../../Assets/images/loginIMG.png'
import 'material-icons/iconfont/material-icons.css';
import CommentIcon from '@mui/icons-material/Comment';
import { base_URL } from "../../constants";



export default function PostWall() {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [commentCount, setCommentCount] = useState(0);

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


    function handleLike() {
        if (isLiked) {
            setLikeCount(likeCount - 1);
        } else {
            setLikeCount(likeCount + 1);
        }
        setIsLiked(!isLiked);
    }

    function handleComment() {
        setCommentCount(commentCount + 1);
    }

    return (
        <>
            {postList?.map((item) => {

                return (
                <div className="feed">
                    <div className="post-container">
                        <div className="auth-cap">
                            <div className="feed-header">
                                <br />
                                <h5>{item.postedBy}</h5>
                            </div>
                            <div className="caption">
                                <p>{item.postDescription}</p>
                            </div>
                        </div>
                        <div className="feed-img">
                            <img src={item.imageData} className="feed-image" alt=""></img>
                        </div>
                        <div className="like-comment">
                            <div className="LikeButtonContainer">
                                <div className="LikeButton">
                                    <button className={isLiked ? 'Liked' : 'NotLiked'} onClick={handleLike}>
                                        {isLiked ? 'Liked' : 'Like'}
                                    </button>
                                    <span className="LikeCount">{likeCount} likes</span>
                                    &nbsp;&nbsp;&nbsp;
                                </div>
                            </div>
                            <div className="btn-comment">
                                <button className="btnComment">
                                <a href="comment">   <span className="CommentCount"><CommentIcon></CommentIcon> {commentCount} comments</span></a>
                                </button>
                          
                            </div>
                        </div>
                    </div>
                </div>)

            })}
        </>
    );
}