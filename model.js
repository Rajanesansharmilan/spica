const mongoose =require('mongoose')
const userSchema = new mongoose.Schema({
    product: String,
    price: String,
    description:String,
    img: {
        type: String,
        required: true
      },
  }); 
 module.exports = mongoose.model('products', userSchema);

