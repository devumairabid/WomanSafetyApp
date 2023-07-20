const jwt = require('jsonwebtoken');
const Product = require('../models/Product')
const bcrypt = require('bcrypt')
const fs = require('fs');
const path = require('path');
const privateKey = fs.readFileSync(path.resolve(__dirname, '../private.key'), 'utf-8')




exports.signUp =(req, res, ) =>{
    console.log(req.body,'ggggggggggggggggggggggggggggggg');
    const product = new Product(req.body)
    var token = jwt.sign({ email :req.body.email}, privateKey, { algorithm: 'RS256' });
    const hash = bcrypt.hashSync(req.body.password, 10);
    product.password = hash;
    product.token = token;
    product.save();
    res.json(product)
    console.log(token);
}

exports.login = async(req,res)=>{
    try {
        const userLoggedIn = await Product.findOne({email: req.body.email});
        const isAuth =  bcrypt.compareSync(req.body.password , userLoggedIn.password); 
        if (isAuth) {
            var token = jwt.sign({ email :req.body.email}, privateKey, { algorithm: 'RS256' });
            
            userLoggedIn.token  = token
            userLoggedIn.save();
            res.json(userLoggedIn);
        } else {
          res.status(401).json({ error: 'Invalid email or password.' });
        }
    } catch (error) {
      res.status(500).json({ error: 'An error occurred.' });
    }
   
    
}

// exports.imageUpload=(req,res)=>{
//     try {
//         ImageInDb = new Product(req.body);
//         ImageInDb.save();
//         res.json(ImageInDb);
//         res.sendStatus(200).json('success to upload image');
//     } catch (error) {
//         res.sendStatus(401).json('failure to upload image');
//     }
// }

// exports.getOne = async (req, res) => {
//     const id = req.params.id;
//     const product = await Product.findById(id).exec()
//     res.json(product)
// }



exports.imageUpload = async (req, res) => {
    console.log("req.body", req.body)
    try {
      const { image } = req.body;
        console.log("image: " + image)
  
      const newUser = new Product({
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password,
        image: image
      });
      console.log("newUser: " + newUser)
      
  
     const hello= await newUser.save();
     console.log(hello);
  
      res.status(200).json('Successfully uploaded image');
    } catch (error) {
      res.status(401).json('Failed to upload image');
    }
  };

  
  
  
  
  
  
  


























// exports.signUp = (req, res) => {
//     const product = new Product(req.body);
//     var token = jwt.sign({ email: req.body.email }, privateKey, { algorithm: 'RS256' });
//     const hash = bcrypt.hashSync(req.body.password, 10);
//     product.password = hash;
//     product.token = token;
//     product.save()
//     res.json({token})
// }



// exports.login = async(req, res) => {
//     try {
//         const user = await Product.findOne({email: req.body.email })
//         const isAuth = bcrypt.compareSync(req.body.password, user.password);
//         if (isAuth) {
//             var token = jwt.sign({ email: req.body.email }, privateKey, { algorithm: 'RS256' });
//             user.token=token;
//             res.json({ token})
//             user.save();
//         } else {
//             res.sendStatus(401)
//         }
//     } catch (error) {
//         res.status(401).json( error)
//     }
 
  
// }