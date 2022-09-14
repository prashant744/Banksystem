const mongoose = require("mongoose");
const User = require("./models/user");

mongoose
  .connect("mongodb://localhost:27017/bank_stand2", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB!"))
  .catch((error) => console.log(error.message));

const seedUsers = [
  {
    name: "Prashant",
    email: "prashant100@gmail.com",
    credits: 10000,
  },
  {
    name: "Priyanshu",
    email: "priyanshu200@gmail.com",
    credits: 7000,
  },
  {
    name: "Gaurav",
    email: "gaurav@gmail.com",
    credits: 4500,
  },
  {
    name: "Ved",
    email: "ved@yahoo.com",
    credits: 8600,
  },
  {
    name: "Tappu",
    email: "tappu@gmail.com",
    credits: 7500,
  },
  {
    name: "Rewa",
    email: "rewa@yahoo.com",
    credits: 6900,
  },
  {
    name: "Divya",
    email: "divya100@gmail.com",
    credits: 3000,
  },
  {
    name: "Aman",
    email: "aman123@yahoo.com",
    credits: 2100,
  },
  {
    name: "sahil",
    email: "sahil123@gmail.com",
    credits: 5300,
  },
];

User.insertMany(seedUsers)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
