const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDb = require("./config/dbConnection")
const dotenv = require("dotenv").config()


const port = process.env.PORT || 5000;

const app = express();
connectDb()
app.use(cors());
app.use(express.json());

app.use("/product", require("./router/product"))
app.use('/product/uploads', express.static(path.join(__dirname, "uploads")));
app.use("/cart", require("./router/cart"))


app.listen(port, () => {
    console.log(`Server running on port:${port}`)
})