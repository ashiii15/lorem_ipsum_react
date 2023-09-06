import React, { useState } from 'react';
import data from './data';
function App() {
const [count,setCount] = useState(0) 
const [text,setText] = useState([])
const submitHandler = (e)=>{
  e.preventDefault()
  let amount = parseInt(count)
  if(count <= 0){
    amount = 1
  }
  if(count > 8){
    amount = 8
  }
  setText(data.slice(0,amount))

  // if(count)
  // console.log(count);
  
}
  
  return (
  <section className='section-center'>
    <h2>tired of boring lorem ipsum ?</h2>
    <form >
      <label htmlFor='amount'>paragraphs:</label>
      <input type='number' value={count} name='amount' id='amount' onChange={(e)=>setCount(e.target.value)}></input>
      <button type='submit' className='btn' onClick={submitHandler}>generate</button>
    </form>
    <article className='lorem-text'>
      {
        text.map((item,itemIndex)=>{
          return <p key={itemIndex}>{item}</p>

        })
      }
    </article>
  </section>
    )
}

export default App;
