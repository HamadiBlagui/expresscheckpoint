//require dependencies
const express = require ('express')

const app=express()

app.use(
    (workingTime = (req, res,next)=>{ 
const days = new Date().getDay();
const hours=new Date().getHours();

if (((days == 0 ) || (days==6)) || ((hours <= 8)  || (hours>=17)))
    
    {
        res.sendFile(__dirname+ "/views/closed.html");
    }
    else {
        next();
    }


})
 
);
app.use(express.static('views'))
//app.use('*/contacts',express.static('views/contacts.html'))
//app.use('*/services',express.static('views/services.html'))



//server on listen (server is working):
app.listen(5000, (err)=>{
if (err){
    console.log('server is not working now try again later')
}

console.log('server is running welcome')
}) 



