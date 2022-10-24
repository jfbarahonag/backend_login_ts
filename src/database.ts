import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/users', {})
  .then(db => console.log("Database connected"))
  .catch(err => console.log(err))