const express = require('express')
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");

const Models = require('./models/index');

var PORT = process.env.PORT || 4202;
const app = express()
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/reactreadinglist');

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDb connection established');
})

//gets all followed stocks
router.route('/shares/get').get((req, res) => {
    console.log('hellooooo', req.body.user);
  Models.Stock.find({owner: req.body.user}.then(data => {
    res.json(data)
  }))
});

//follows a stock
router.route('/shares/follow').post((req, res) => {
  Models.Stock.exists({stock_name: req.body.stock, owner: req.body.user}).then(data => {
    console.log(data, "data herre")
  if (data === true) {
      res.json({err: "you're already following"})
      console.log("already here")
      
    }
    else {
      console.log(req.body, 'HERE IT IS ');
      let stock = {
        stock_name: req.body.stock,
        owner: req.body.user
      }

      Models.Stock.create(stock).then(data => res.send(data))
      .catch(err => res.status(422).json(err));
      console.log("stock created");
    }
});
})

//removes stock from user
router.route('/shares/delete').post((req, res) =>{
  Models.Stock.deleteOne({owner: req.body.stockunfollow.owner, stock_name: req.body.stockunfollow.stock_name}).then(data =>{
    res.send(data)
    // .catch(err => res.status(422).json(err));
    console.log(data);
  })
})

//logs user in
router.route('/user/login').post((req, res) => {
    console.log(req.body, "gisia")
  Models.User.findOne({username: req.body.username}).then(data => {
    res.json(data);
  })
  .catch(err => res.status(422).json(err));
});

//creates user
router.route('/user/create').post((req, res) => {
  console.log(req.body, "helai")
  Models.User.exists({username: req.body.username}).then(data => {
    console.log(data)
    if (data === true) {
        res.json({err: 'User already exists!'})
        console.log("already here")
      }
      else {
        Models.User.create(req.body).then(data => res.json(data))
        .catch(err => res.status(422).json(err));
        console.log("user created");
      }
  })
})

router.route('/foo').get((req, res) =>{
  res.json("hello world!!!!")
})

app.use('/', router);

app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})
