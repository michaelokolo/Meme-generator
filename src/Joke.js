import React from 'react';
function Joke(props){

    const [isShown, setIsShwown] = React.useState(false)
    
    function toggle(){
        setIsShwown(preState => !preState)
    }
    
    return(
        <div>
            <h3>{props.setup}</h3>
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggle}>toggle</button>
            <hr/>
        </div>
    )
}

export default Joke