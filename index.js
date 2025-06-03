import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(cors());
app.use(express.json()); 


mongoose.connect("mongodb://localhost:27017/gcet")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));


const userSchema = mongoose.Schema({
  name: { type: String },
});
const User = mongoose.model("User", userSchema);


app.get("/", (req, res) => res.send("good morning"));

app.get("/register", async (req, res) => {
  const result = await User.create({ name: "vinay" });
  return res.json(result);
});

app.post("/register", async (req, res) => {
  const { name } = req.body;
  const result = await User.create({ name });
  return res.json(result);
});

app.get("/greet", (req, res) => res.send("greetings"));

app.get("/name", (req, res) => res.send("vinaykumar"));

app.get("/weather", (req, res) => res.send("24"));

app.get("/products", (req, res) => {
  const products = [
    { name: "Product 1", price: 34 },
    { name: "Product 2", price: 64 },
    { name: "Product 3", price: 45 },
  ];
  res.json(products);
});


app.listen(8081, () => {
  console.log("Server started on port 8081");
});
