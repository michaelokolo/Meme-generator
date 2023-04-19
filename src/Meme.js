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

    function handleChange(event){
        console.log(meme)
        const {value, name} = event.target
        setMeme(preMeme => ({
            ...preMeme,
            [name]:value
        }))

    }

    return(
        <div className="meme">
            <div className= "form">
                <div className="text-box">
                    <input 
                        type="text" 
                        className="box" 
                        placeholder="Top text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        className="box" 
                        placeholder="Bottom text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={getMemeImage}>Get a new meme image  🖼</button>
            </div>
            <div className='meme-text-img'>
                <img src={meme.randomImage} className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className='meme--text bottom'>{meme.bottomText}</h2>
            </div>
        </div>
    )
}

export default Meme