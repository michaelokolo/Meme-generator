import React from 'react';
function Joke(props){

    const [isShown, setIsShwown] = React.useState(false)
    
    
    return(
        <div>
            <h3>{props.setup}</h3>
            <p>{props.punchline}</p>
            <button>toggle</button>
            <hr/>
        </div>
    )
}

export default Joke