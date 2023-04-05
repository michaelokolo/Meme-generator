import React from 'react';
import './App.css';
import Navbar from './Navbar'
import Meme from './Meme'
// import userpix from './images/user.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar} from '@fortawesome/fontawesome-free-solid';

function App() {
  
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
  
  const [contact, setContact] = React.useState({
        firstName: 'john',
        lastName: "Doe",
        phone: '+1 (719) 555-1212',
        email: 'itsmyrealname@example.com',
        isFavorite: true
  })
  
 let starIcon =  contact.isFavorite ? 'gold' : 'black'
  function toggleFavorite(){
    setContact(preState =>
      ({...preState, isFavorite: !preState.isFavorite})
      )}

  return (
    <div>
      <Navbar />
      <Meme />
      {/* <h1 className="state--title">Do I feel like going out tonight?</h1>
      <diV className="state--value" onClick={handleFlip}>
          <h1>{answer}</h1>
      </diV>
      <button onClick={addItem}>Add Item</button>
      {allThingsArray} */}

    </div>


    // <main>
    //   <article className='card'>
    //     <img src={userpix} className='card--image'/>
    //     <div className='card--info'>
    //         <FontAwesomeIcon onClick={toggleFavorite} icon={faStar} style={{color:starIcon}} className='card-favorite'/>
    //         <h2 className='card--name'>
    //           {contact.firstName} {contact.lastName}
    //         </h2>
    //         <p className='card--contact'>{contact.phone}</p>
    //         <p className='card--contact'>{contact.email}</p>

    //     </div>

    //   </article>
    // </main>
  );
}

export default App;
