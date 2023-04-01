import data from './memesData'
import React from 'react'

function Meme(){

    const [memeImage, setMemeImage] = React.useState('')
    
    function getMemeImage(){
        const newData = data
        const randomNum = Math.floor(Math.random() * newData.data.memes.length)
        setMemeImage(newData.data.memes[randomNum]["url"])
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
            <img src={memeImage} className="meme--image"/>
        </div>
    )
}

export default Meme