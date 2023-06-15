// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const multer = require('multer');
// const cors = require('cors');
// const User = require("./model");
// const path =require('path')

// const port =3001;

// mongoose.connect('mongodb://127.0.0.1:27017/world', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => {
//   console.log('Connected to MongoDB');
// })
// .catch((error) => {
//   console.error('Error connecting to MongoDB:', error);
// });
// app.use(express.urlencoded({ extended: true }));
// // Enable CORS for all routes
// app.use(cors());

// // file get
// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/addproduct.html");
// });


// // post method
// app.post('/add', (req, res) => {
// //   const { name, phoneno } = req.body;
//   const newUser = new User({
//     name:req.body.name,
//     phoneno:req.body.phoneno,
//     img: req.body.img,

//   });


  
// // save method
//   newUser.save()
//     .then(() => {
//       res.redirect('/');
//     })
//     .catch((error) => {
//       console.error('Error user:', error);
//       res.status(500).send('Internal Server Error');
//     });
// });

// // Get method
// app.get("/get",(req,res)=>{

//     User.find((err,getdata)=>{
//         if(err){
//             console.log(err)
//         }else{
//             res.json(getdata)
//         }

//     })
// });



// // GET route for retrieving image data
// app.get('/get', async (req, res) => {
//   try {
//     const images = await User.find({}, 'img');
//     res.json(images);
//   } catch (error) {
//     console.error('Error retrieving image data:', error);
//     res.status(500).send('Error retrieving image data');
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
