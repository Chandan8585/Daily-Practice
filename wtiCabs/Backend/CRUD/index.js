const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./db.js');
const user = require('./model/user.model.js');

const PORT = 8080;
app.use(express.json());
app.use(bodyParser.json());
app.get("/", (req,res)=> {
    res.send("THis page is just waiting for you");
})

app.post('/user', async (req, res)=>{
 try {
    const userDetail = req.body;
    const newUser = new user(userDetail);
   const response =await newUser.save();
      res.send(response);
 } catch (error) {
    console.log(error);
 }
})

app.get('/user', async(req,res)=> {
  try {
    const userData = await user.find();
      res.send(userData);
  } catch (error) {
    res.send(error);
  }  
})

app.put('/user/:id', async(req, res)=> {
    try {
        const userId = req.params.id;
        const updatedUserData = req.body;
        const response = await user.findByIdAndUpdate(userId,updatedUserData , {
            new: true,
            runValidators: true
        });
        res.send(response);
    } catch (error) {
        res.send(error);
    }
})

app.delete('/user/:id', async(req, res)=> {
    try {
        const userId = req.params.id;
        const response = await user.findByIdAndDelete(userId); // Corrected method for deletion
        if (!response) {
            return res.status(404).send('User not found');
        }
        res.send("User deleted successfully");
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

app.listen(PORT, ()=> {
    console.log(`listening at Port ${PORT}`);
});

