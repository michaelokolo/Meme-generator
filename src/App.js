import React from 'react';
import './App.css';
// import Navbar from './Navbar'
// import Meme from './Meme'
import userpix from './images/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/fontawesome-free-solid';
import Count from './Count'
import Star from './Star'
import Header from './Header'
import Body from './Body'
import boxes from './boxes';
import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import Box from './Box'
import jokes from './jokesData'
import Joke from "./Joke"

function App(props) {
  
//  const [isGoingOut, setIsGoingOut] = React.useState(true);

//  function handleFlip(){
//   setIsGoingOut(preState => !preState)
//  }
//  let answer = isGoingOut ? "Yes" : "No"

  // const [thingsArray, setThingsArray] = React.useState(['Thing 1', 'Thing 2'])

  // function addItem(){
  //   setThingsArray(preState => [...preState, `Thing ${preState.length + 1}`])
  // }
  // const allThingsArray = thingsArray.map((things) => <p>{things}</p>)
  
  // const [contact, setContact] = React.useState({
  //       firstName: 'john',
  //       lastName: "Doe",
  //       phone: '+1 (719) 555-1212',
  //       email: 'itsmyrealname@example.com',
  //       isFavorite: true
  // })
  

  // function toggleFavorite(){
  //   setContact(preState =>
  //     ({...preState, isFavorite: !preState.isFavorite})
  //     )}


      // const [count, setCount] = React.useState(0)

      // function add (){
      //   setCount((preState) => preState + 1)
      // }

      // function substract (){
      //   setCount((preState) => preState - 1)
      // }

      const [user, setUser] = React.useState('Joe')

      const [box, setBox] = React.useState(boxes)

      const styles = {
        backgroundColor : props.darkMode ? '#222222' : '#cccccc'
      }

      const allboxes = box.map((boxx) => 
            <Box on={boxx.on} 
                 key={boxx.id} 
                 id ={boxx.id}
                 handleClicks={toggle}
            />
            )

     function toggle (id){
      setBox((preState) =>
      preState.map(square => 
        square.id === id ? {...square, on : !square.on}: square))
     }

     const jokeElement = jokes.map(joke =>
              <Joke 
              setup = {joke.setup}
              punchline = {joke.punchline}        
              />
      )

      const [messages, setMessages] = React.useState(['a','b'])

  return (
    // <div className='counter'>
      // {/* <Navbar />
      // <Meme /> */}
      // {/* <h1 className="state--title">Do I feel like going out tonight?</h1>
      // <diV className="state--value" onClick={handleFlip}>
      //     <h1>{answer}</h1>
      // </diV>
      // <button onClick={addItem}>Add Item</button> */}
      // {/* {allThingsArray}  */}
      // {/* <button className='counter--minus' onClick={substract}>-</button>
      // <Count
      //   number = {count}
      // />
      // <button className='counter--plus' onClick={add}>+</button> */}
    // </div>


    // <main>
    //   <article className='card'>
    //     <img src={userpix} className='card--image'/>
    //     <div className='card--info'>
    //       <Star isFilled = {contact.isFavorite} handleClick={toggleFavorite}/>
    //         <h2 className='card--name'>
    //           {contact.firstName} {contact.lastName}
    //         </h2>
    //         <p className='card--contact'>{contact.phone}</p>
    //         <p className='card--contact'>{contact.email}</p>

    //     </div>

    //   </article>
    // </main>
      <main>
        <div>
          {/* <Header userName = {user}/> 
          <Body userName = {user}/> */}
          {/* {allboxes} */}
          {jokeElement}
          {/* {messages.length !== 0 && <h1>You have {messages.length} unread messages!</h1>} */}
        </div>
      </main>
  );
}

export default App;
