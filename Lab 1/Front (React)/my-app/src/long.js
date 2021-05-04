import React, {useState, useEffect}  from 'react';
import postMessage from './helpers/fetch'

const LongPolling = () => {
    const [message, setMessage] = useState('');
    const [notifications, setNotifications] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("test1");
        await postMessage('http://localhost:7000/messages/long', { message })
        setMessage('');  
    };

    const getNotifications = async () =>{
        const id = Math.ceil(Math.random()*1000);
        const res = await postMessage('http://localhost:7000/messages/subscribe',{id})
        setNotifications(notifications.concat(res))
    }

    useEffect(()=>{
        getNotifications();
    },[notifications]);
    return(
        <div>
            <div >
                <form id="form" className="validate" onSubmit={handleSubmit}>
                    <div >
                        <label>Message</label>
                        <input value={message} type="text"  placeholder="Type a message" 
                            required onChange={(e)=> setMessage(e.target.value) }>
                        </input>
                    </div>        
                </form>
            </div>
                <div>
                    <h2>Messages</h2>
                    <ul>
                        {notifications.map((n)=> <li> {n.message} </li>)}
                    </ul>
                </div>
        </div>
    );

};

export default LongPolling;

