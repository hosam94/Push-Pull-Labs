import './App.css';
import React, { useState, useEffect } from 'react';



let lastId = 0
let currentID = 0

// const postMessage=async(url='',data)=>{
//   try{
//   const response=await fetch(url,{
//     method:'POST',
//     headers:{
//       'Content-Type':'application/json'
//     },
//     body:JSON.stringify({message:data,id:Math.random()*1000}),
//   });
//   console.log("nnn",response)
//   if(response.status===204) return response;
// }
//   catch(e){}
// };

// function App() {
//   const [myValue, setMyValue] = useState('');
//   const [myMessagesList, setMyMessagesList] = useState([]);
//   const handleSend = async(e) => {
//     e.preventDefault()
//     console.log(myValue)
//     await postMessage('http://localhost:7000/messages',myValue);
//     setMyValue('');

//   };


//   useEffect(() => {
//     setInterval(async ()=>{
//       const response =await fetch(`http://localhost:7000/messages/${lastId}`).then((res)=>res.json());
//       setMyMessagesList(response);
//     },5000)
//   },[]);
  

//   return (
//     <div className="App">
//       <form onSubmit={handleSend}>
//         <p>Enter your message</p>
//         <input
//           value={myValue}
//           onChange={
//             (e) => {
//               setMyValue(e.target.value)
//             }
//           }
//           id="message"
//         />
//         <button>
//           Click me
//       </button>
//       </form>
//       <ul>
//         {myMessagesList.map((n)=> {currentID=n.id;console.log(lastId); return <li> {n.message} </li>})}
//         {lastId=currentID}
//       </ul>    
//     </div>
//   );
// }

// export default App;
