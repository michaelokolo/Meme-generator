import goldStar from './images/gold-star-icon.png'
import emptyStar from './images/star-empty-icon.png'

function Star(props){
    return(
        <img src={props.isFilled ? goldStar : emptyStar} className='card-favorite' onClick={props.handleClick}/>
    )
}

export default Star

