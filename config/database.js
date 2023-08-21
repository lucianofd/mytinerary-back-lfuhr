import mongoose from "mongoose";

mongoose.connect("mongodb+srv://lfuhr:unPassword@cluster0.mwwvrvd.mongodb.net/")
.then(()=>{
    console.log('Database connected');
})
.catch((err)=>{
      console.log('Database connection failed' + err);
})