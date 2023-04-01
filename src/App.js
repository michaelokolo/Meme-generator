import React from 'react';
import './App.css';
//import Navbar from './Navbar'
//import Meme from './Meme'

function App() {
  
//  const [isGoingOut, setIsGoingOut] = React.useState(true);

//  function handleFlip(){
//   setIsGoingOut(preState => !preState)
//  }
//  let answer = isGoingOut ? "Yes" : "No"

  const [thingsArray, setThingsArray] = React.useState(['Thing 1', 'Thing 2'])

  function addItem(){
    setThingsArray(preState => [...preState, `Thing ${preState.length + 1}`])
  }
  const allThingsArray = thingsArray.map((things) => <p>{things}</p>)
  
  
  return (
    <div className='practise'>{/*Remember to change class*/}
      {/*<Navbar />
      <Meme />*/}
      {/* <h1 className="state--title">Do I feel like going out tonight?</h1>
      <diV className="state--value" onClick={handleFlip}>
          <h1>{answer}</h1>
      </diV> */}
      <button onClick={addItem}>Add Item</button>
      {allThingsArray}

      
    </div>
  );
}

export default App;
