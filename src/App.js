import React from 'react';
import './App.css';
//import Navbar from './Navbar'
//import Meme from './Meme'


function App() {
  // const thingsArray = ['Thing 1', 'Thing 2']
  // const allThings = thingsArray.map((thing)=>{
  //   return(
  //     <p>{thing}</p>
  //   )
  // })

  // function pushNewElement(){
  //   thingsArray.push(`Thing ${thingsArray.length + 1}`);
  //   console.log(thingsArray);
  // }
  // let timeOfDay

  // function greeting(name){
  //   const date = new Date()
  //   const hours = date.getHours()
  //   if (hours >= 4 && hours < 12){
  //     timeOfDay = "morning"
  //   }else if (hours >= 12 && hours < 17){
  //     timeOfDay = "afternoon"
  //   }else if (hours >= 17 && hours < 20){
  //     timeOfDay = "evening"
  //   }else if(hours >= 20 && hours < 4){
  //     timeOfDay = "night"
  //   }
  //   console.log(`Good ${timeOfDay}, ${name}!`)
  // }

  // greeting("Michael")

  const [value, setIsvalue] = React.useState(0)

  function countMinus(){
    setIsvalue(value - 1)
  }

  function countPlus(){
    setIsvalue(value + 1)
  }


  return (
    <div className='counter'>{/* remember to delete classname when done*/}
      {/*<Navbar />
      <Meme />*/}
      {/* <button className='btn' onClick={pushNewElement}>Add Item</button>
      {allThings} */}
      <button className='counter--minus' onClick={countMinus}>-</button>
      <div className="counter--count">
          <h1>{value}</h1>
      </div>
      <button className='counter--plus' onClick={countPlus}>+</button>
    </div>
  );
}

export default App;
