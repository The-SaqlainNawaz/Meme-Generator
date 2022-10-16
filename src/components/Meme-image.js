import React from "react";
import "./style.css";

export default function Meme_Image(props) {
    return (
        <div className="meme--image">
            {/* <p>{props.img}</p> */}
            <img src={props.img} alt="" className="img--meme"></img>
        </div>
    );
}
