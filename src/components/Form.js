import React from "react";
import "./style.css";
import MemeImage from "./Meme-image";
import memedata from "../memedata";

let img_url;
export default function Form() {
    /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     *
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     *
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     *
     * Lastly, update the `getMemeImage` function and the markup
     * to reflect our newly reformed state object and array in the
     * correct way.
     */

    //   meme state
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });

    //   all memes state
    const [allMemeImages, setAllMemeImages] = React.useState(memedata);

    function getMemeImage() {

        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        console.log(randomNumber)
        img_url = memesArray[randomNumber].url
        console.log(img_url)
        setMeme((prev) => ({
            ...prev,
            randomImage: img_url
        }))
    }

    return (
        <>
            <div className="form--main">
                <div className="form">
                    <input
                        type="text"
                        placeholder="Top Text"
                        className="form--input"
                    ></input>
                    <input
                        type="text"
                        placeholder="bottom Text"
                        className="form--input"
                    ></input>
                    <button className="form--button" onClick={getMemeImage}>
                        Generator New Meme Image
                    </button>
                </div>
            </div>
            <MemeImage img={meme.randomImage} />
        </>
    );
}
