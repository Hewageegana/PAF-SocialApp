import React, { useState, useEffect, Button } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/feed.css';
import feedImg from '../../Assets/images/loginIMG.png'
import 'material-icons/iconfont/material-icons.css';
import CommentIcon from '@mui/icons-material/Comment';



export default function PostWall() {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [commentCount, setCommentCount] = useState(0);

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
            <div className="feed">
                <div className="post-container">
                    <div className="auth-cap">
                        <div className="feed-header">
                            <br />
                            <h5>Rusiru Hewageegana</h5>
                        </div>
                        <div className="caption">
                            <p>Dinner outing with friends #hashtag# #foodlover#❤🍕</p>
                        </div>
                    </div>
                    <div className="feed-img">
                        <img src={feedImg} className="feed-image" alt=""></img>
                    </div>
                    <div className="like-comment">
                        <div className="LikeButtonContainer">
                            <div className="LikeButton">
                                <button className={isLiked ? 'Liked' : 'NotLiked'} onClick={handleLike}>
                                    {isLiked ? 'Liked' : 'Like'}
                                </button>
                                <span className="LikeCount">{likeCount} likes</span>
                            </div>
                        </div>
                        <div className="btn-comment">
                            <button className="" onClick={handleComment}>

                            </button>
                            <span className="CommentCount"><CommentIcon></CommentIcon> {commentCount} comments</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}