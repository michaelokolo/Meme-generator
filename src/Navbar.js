import picture from './images/troll-face.png'

function Navbar(){
    return(
        <nav className="navbar">
            <div className='nav-logo'>
                <img src={picture} alt="troll-face"/>
                <h3 className="nav-text">Meme Generator</h3>
            </div>

            <h4 className='project-text'>React Course - Project 3</h4>
        </nav>
    )
}

export default Navbar