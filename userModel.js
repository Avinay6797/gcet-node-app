import mongoose from 'mongoose'
const userSchema = mongoose.Schema({
  name: { type: String },
  email:{ type:string },
  pass: { type:string },
});
const User = mongoose.model("User", userSchema);