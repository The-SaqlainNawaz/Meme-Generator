import React from "react";
import "./style.css";

export default function Meme_Image(props) {
    return (
        <div className="meme--image">
            <h2 className="meme--text top">{props.imgText.topText}</h2>
            <img src={props.img} alt="" className="img--meme"></img>
            <h2 className="meme--text bottom">{props.imgText.bottomText}</h2>
        </div>
    );
}
