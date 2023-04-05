import data from './memesData'
import React from 'react'

function Meme(){

    const [meme, setMeme] = React.useState(
        {topText: "",
        bottomText: "",
        randomImage: 'https://i.imgflip.com/30b1gx.jpg'
        })

    const [allMemeImages, setAllMemeImages] = React.useState(data)
    
    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNum = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNum].url
        setMeme(preMeme => ({
            ...preMeme,
            randomImage:url
        }))
    }


    return(
        <div className="meme">
            <div className= "form">
                <div className="text-box">
                    <input type="text" className="box" placeholder="Top text"/>
                    <input type="text" className="box" placeholder="Bottom text"/>
                </div>
                <button onClick={getMemeImage}>Get a new meme image  🖼</button>
            </div>
            <img src={meme.randomImage} className="meme--image"/>
        </div>
    )
}

export default Meme