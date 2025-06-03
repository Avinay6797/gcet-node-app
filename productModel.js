import mongoose from 'mongoose'
const ProductSchema = mongoose.Schema({
  name: { type: String },
  price:{ type: number },
});
const Product = mongoose.model("Product", ProductSchema);