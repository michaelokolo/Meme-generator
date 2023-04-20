import React from 'react'

function Meme(){

    const [meme, setMeme] = React.useState(
        {topText: "",
        bottomText: "",
        randomImage: 'https://i.imgflip.com/1bij.jpg'
        })

    const [allMemes, setAllMemes] = React.useState([])
    
    function getMemeImage(){
        const randomNum = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNum].url
        setMeme(preMeme => ({
            ...preMeme,
            randomImage:url
        }))
    }

    function handleChange(event){
        const {value, name} = event.target
        setMeme(preMeme => ({
            ...preMeme,
            [name]:value
        }))

    }
    console.log(allMemes)

    React.useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    },[])

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