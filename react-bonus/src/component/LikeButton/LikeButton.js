import React, { useState } from 'react';
import { ThumbUpAlt } from '@material-ui/icons';
import {  } from "./LikeButton.css";

const LikeButton = () => {

    const [like, setLike] = useState("");
    // const handleColor = () =>{
    //    const color = like ? "" : "secondary";
    //     setLike(color);
    // } //this is one ways to do this
    // const handleColor = () => {
    //     setLike(like ? "" : "secondary")
    // }//shorter ways
    return (
        <div className='App'>
            <h2>This is LikeButton component</h2>
            <ThumbUpAlt className='like-button' color={like} onClick={() => setLike(like ? "" : "secondary")}></ThumbUpAlt>
        </div>
    );
};

export default LikeButton;