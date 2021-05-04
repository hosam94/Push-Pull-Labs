const express = require("express");
const core = require('cors');
const app = express();
const PORT = process.env.PORT || 7000;
app.use(express.json());
app.use(core());




// const Message = [];

// app.post("/messages", (req, res) => {
//     Message.push(req.body);
//     console.log(req.body);
//     res.status(204).end();
// });

// // app.get("/messages", (req, res) => {
// //         return res.json(Message);
// // });

// app.get("/messages",(req,res,next)=>{
//     const last = req.query.last
//     console.log("test2",Message)
//     console.log("last",last)
//     if (last === 0 || last === undefined) 
//     {
//         console.log(Message)
//         res.json(Message);
//     }
//     else 
//     {
//         console.log("hi")
//         const filteredMessage = Message.filter((message)=>{
//             if (message.time > last) {
//                 return message
//             }
//         })
//         res.json(filteredMessage)
//         console.log(filteredMessage)
//     }
// })


/////////////////////////////////


const subscribers = {};

app.post("messages/subscribe", (req,res)=>{
    console.log("sub",req.body)
    const { id } = req.body;
    subscribers[id] = res;
    // console.log(subscribers)
    req.on('close', ()=>{
        delete subscribers[id];
    })
})

app.post("messages/long",async (req,res)=>{
   
        console.log("1",req.body)
        Object.entries(subscribers).forEach(([id, responce])=>
        {
            
            delete subscribers[id];
            responce.json(req.body)
        });
        console.log("3")
        res.json({status: "Ok"});   
   

})

app.listen(PORT, (err) => {
    if (err) console.error("hhhhhhhhhhhhhhhh", err);
    console.log(`App server is running and listening on port ${PORT}`);

});

// app.use((req, res, next) => {
//     console.log(new Date(), req.url, req.method)
//     next()

//   });
//   app.use((req, res) => {
//     res.status(404).send("Sorry can't find that!");
//   });
//   app.use((req, res, next) => {
//     console.error(err.stack);
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//     res.status(500).send("Something broke!");
//   });



//   const subscribers={};
//   app.post('/messages/subscribe',(req,res)=>{
//       const{id}=req.body;
//       console.log(id);
//       subscribers[id]=res;
//   });
//   app.post('/messages',(req,res)=>{
//       console.log(req.body);
//       Object.values(subscribers).forEach((response)=>response.json(req.body));
//       res.status(204).end();
//   });


