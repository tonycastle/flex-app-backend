const express = require('express')
const app = express()
const port = 3012
var cors = require('cors');  //add cors so we can connect to app from gui on different port

//use cors before we start routing
app.use(cors());
//create mock responses to test the gui - we can plug this in to storage later
//get a profile
app.get('/profile/:id',(req,res)=>res.json({
  firstName : 'Tony',
  lastName : 'Castle',
  email : 'castleantony6@gmail.com',
  password : 'pass',
  address1 : '1 street',
  address2 : 'sometown',
  country : 'acountry',
  profileId : '1'
}))  
//update a  profile
app.post('/profile/update/:id',(req,res)=>res.json(req))
//create a profile
app.post('/profile',(req,res)=>res.json(req))
//add 404 page
app.use(function (req, res, next) {
    res.status(404).send("You can't handle that Jelly!!!!")
  })

app.listen(port, ()=>console.log(`app listening on port ${port}`))