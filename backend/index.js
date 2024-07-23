const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");
const { log } = require("console");

app.use(express.json());
app.use(cors());

//Database Connection:
mongoose.connect("mongodb+srv://bookhavenadmin:comp2068summer2024@cluster0.n6wzpig.mongodb.net/bookstore")

//API Creation

app.get("/", (req,res)=>{
    res.send("Express App is Running")
})

// Image Storage Engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req,file,cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})


//Creating Upload Endpoint for images
app.use('/images',express.static('upload/images'))
app.post("/upload", upload.single('book'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

//Schema for creting books

const Book = mongoose.model("Book", {
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    new_price:{
        type: Number,
        required: true
    },
    old_price:{
        type: Number,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    },
    available:{
        type:Boolean,
        default:true
    }

})

app.post('/addbook', async(req,res)=>{
    let books = await Book.find({});
    let id;
    if(books.length>0)
    {
        let last_book_array = books.slice(-1);
        let last_book = last_book_array[0];
        id = last_book.id+1;
    }
    else{
        id=1;
    }
    const book = new Book({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price
    });
    console.log(book);
    await book.save();
    console.log("Saved");
    res.json({
        success: true,
        name:req.body.name
    })
})

// Creating API for deleting Books:

app.post('/removebook', async(req,res)=>{
    await Book.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    });
})

// Creating API for getting all books
app.get('/allbooks',async(req,res)=>{
    let books = await  Book.find({});
    console.log("All books fetched!")
    res.send(books);
})

// Schema for creting user

const User = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

// Creating Endpoint for restering the user

app.post('/signup', async(req,res)=>{

    let check = await User.findOne({email:req.body.email});
    if (check){
        return res.status(400).jason({success:false,error:"Existing user found with same email address!"})
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i]=0;
    }
    const user = new User({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData: cart,
    })

    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }

    const token = jwt.sign(data, 'secret_ecom');
    res.json({success:true,token})

})

// Creating Endpoint for User Login
app.post('/login', async(req,res)=>{
    let user = await User.findOne({email:req.body.email});
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"Wrong Password"});
        }
    }
    else{
        res.json({success:false,errors:"Wrong Email Id"});
    }
})

app.listen(port, (error)=>{
    if (!error) {
        console.log("Server Running on Port "+port)
    }
    else{
        console.log("Error: "+error)
    }
})