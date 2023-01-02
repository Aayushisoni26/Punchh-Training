import React from 'react'
import "./App.css"
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from './actions'
const App = () => {
  const myState = useSelector((state) => state.changethenumber ) 
  const dispatch = useDispatch();
  return (
    <>

    <div class = "container">
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>

      <div class ="quantity">
        <a class = "quantity__minus" title = "Decrement" onClick={() => dispatch(decNumber(5))}><span> - </span></a>
        <input name="quantity" type="text" class = "quantity__input" value={myState}/>
        <a class = "quantity__plus" title = "Increment" onClick = { ()=> dispatch(incNumber()) }><span> + </span></a>
      </div>
    </div>
    </>
  )
}

export default App