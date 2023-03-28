import data from './memesData'


function Meme(){
    function handleClick(){
        const newData = data
        const randomNum = Math.floor(Math.random() * newData.data.memes.length)
        console.log(newData.data.memes[randomNum]["url"])
    }

    return(
        <div className="meme">
            <div className= "form">
                <div className="text-box">
                    <input type="text" className="box" placeholder="Top text"/>
                    <input type="text" className="box" placeholder="Bottom text"/>
                </div>
                <button onClick={handleClick}>Get a new meme image  🖼</button>
            </div>
        </div>
    )
}

export default Meme