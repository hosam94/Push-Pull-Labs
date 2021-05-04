import './App.css';
import React, { useState, useEffect } from 'react';
import postMessage from './helpers/fetch'

const ShortPolling = () => {
  const [myValue, setMyValue] = useState('');
  const [myMessagesList, setMyMessagesList] = useState([]);
  const handleSend = async(e) => {
    e.preventDefault()
    console.log(myValue)
    await postMessage('http://localhost:7000/messages',{myValue,time: Date.now()});
    setMyValue('');

  };


  useEffect(() => {
    setTimeout(async ()=>{
      const response =await fetch(`http://localhost:7000/messages?last=${myMessagesList.length > 0 ? myMessagesList[myMessagesList.length - 1].time : 0}`).then((res)=>res.json());
      setMyMessagesList(myMessagesList.concat(response))
    },5000)
  },[myMessagesList]);
  

  return (
    <div className="short">
      <form onSubmit={handleSend}>
        <p>Enter your message</p>
        <input
          value={myValue}
          onChange={
            (e) => {
              setMyValue(e.target.value)
            }
          }
          id="message"
        />
        <button>
          Click me
      </button>
      </form>
      <ul>
        {myMessagesList.map((n)=> <li> {n.myValue} </li>)}
      </ul>    
    </div>
  );
}

export default ShortPolling;
