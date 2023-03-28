function Meme(){
    return(
        <div className="meme">
            <form>
                <div className="text-box">
                    <input type="text" className="box" placeholder="Top text"/>
                    <input type="text" className="box" placeholder="Bottom text"/>
                </div>
                <button>Get a new meme image  🖼</button>
            </form>
        </div>
    )
}

export default Meme