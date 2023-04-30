import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/feed.css';




export default function PostWall() {
    return (
        <>

            <div className="post-container">
                <div className="auth-cap">
                    <div className="feed-header">
                        <h5>Rusiru Hewageegana</h5>
                    </div>
                    <div className="caption">
                        <p>dinner outing with friends</p>
                    </div>
                </div>
                <div className="feed-img">

                </div>
            </div>

        </>
    );
}