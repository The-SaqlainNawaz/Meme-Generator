import React from "react";
import "./style.css";
import MemeImage from "./Meme-image";

let img_url;
export default function Form() {
    /**
        * Challenge: 
        * As soon as the Meme component loads the first time,
        * make an API call to "https://api.imgflip.com/get_memes".
        * 
        * When the data comes in, save just the memes array part
        * of that data to the `allMemes` state
        * 
        * Think about if there are any dependencies that, if they
        * changed, you'd want to cause to re-run this function.
        * 
        * Hint: for now, don't try to use an async/await function.
        * Instead, use `.then()` blocks to resolve the promises
        * from using `fetch`. We'll learn why after this challenge.
     */

    const [allMemeImages, setAllMemeImages] = React.useState("");

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data))
    }, [])
    console.log(JSON.stringify(allMemeImages))

    console.log(allMemeImages.data.memes[1].url)

    const [memeText, setMemeText] = React.useState({
        topText: "",
        bottomText: ""
    })

    function onHandler(event) {
        const { name, value } = event.target
        setMemeText(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    //   meme state
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });

    //   all memes state

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        img_url = memesArray[randomNumber].url
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
                        name="topText"
                        value={memeText.topText}
                        onChange={onHandler}
                    ></input>
                    <input
                        type="text"
                        placeholder="bottom Text"
                        className="form--input"
                        name="bottomText"
                        value={memeText.bottomText}
                        onChange={onHandler}
                    ></input>
                    <button className="form--button" onClick={getMemeImage}>
                        Generator New Meme Image
                    </button>
                </div>
            </div>
            <MemeImage img={meme.randomImage} imgText={memeText} />
        </>
    );
}
