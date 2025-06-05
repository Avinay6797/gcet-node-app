import mongoose from 'mongoose'
const productSchema = mongoose.Schema({
  name: { type: String },
  price: { type: Number },
});
// const Product = mongoose.model("Product", ProductSchema);

export default mongoose.model("Product", productSchema);