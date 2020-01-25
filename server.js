const express = require('express')
const mongoose = require("mongoose");
const routes = require("./routes");
var bodyParser = require("body-parser");
const app = express()
var PORT = process.env.PORT || 4202;
const cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:4200/',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

app.use(express.urlencoded({
    extended: true
  }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
app.use(routes);
// routes 
// get all
// app.route('api/followedStocks').get((req,res) =>{
//   res.send({
//     stocks: [{name: "CEI"},{name: "GOOG"}]
//   })
// })
//get one
// app.route('api/')
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})
