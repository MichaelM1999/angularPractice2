const express = require('express')
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var path = require('path');
const routes = require("./routes");

const Models = require('./models/index');

var PORT = process.env.PORT || 4202;
const app = express()
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

DATABASE = "mongodb://localhost/reactreadinglist";
if(process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
 
 }else {
 
  mongoose.connect(DATABASE, function(err){ db = 'mongodb://localhost/reactreadinglist'
   if(err){
    console.log(err);
   }else {
    console.log('mongoose connection is successful on: ' + db);
   }
  });
 }
// Serve only the static files form the dist directory
const distDir = __dirname + "/dist/";
app.use(express.static(distDir));
/* final catch-all route to index.html defined last */
app.get('/*', (req, res) => {
  res.sendFile(__dirname + "/dist/"+'/index.html');
})

//gets all followed stocks working
router.route('/shares/find').post((req, res) => {
    console.log('hellooooo', req.body.username);
  Models.Stock.find({owner: req.body.username}).then(data => {
    console.log(data)
    res.send(data);

  })
});

//follows a stock working
router.route('/shares/follow').post((req, res) => {
  Models.Stock.exists({stock_name: req.body.stock, owner: req.body.user}).then(data => {
    console.log(data, "data herre")
  if (data === true) {
      res.send({err: "you're already following"})
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
  Models.Stock.deleteOne({owner: req.body.owner, stock_name: req.body.stock_name}).then(data =>{
    res.send(data)
    // .catch(err => res.status(422).json(err));
    console.log("deleteing", req.body.stock_name);
  })
})

//logs user in working
router.route('/user/login').post((req, res) => {
    console.log(req.body, "gisia")
  Models.User.findOne({username: req.body.username}).then(data => {
    res.send(data);
    console.log("running user login route")
  })
  .catch(err => res.status(422).json(err));
});

//creates user working
router.route('/user/create').post((req, res) => {
  console.log(req.body, "helai")
  Models.User.exists({username: req.body.username}).then(data => {
    console.log(data)
    if (data === true) {
        res.send({err: 'User already exists!'})
        console.log("already here")
      }
      else {
        Models.User.create(req.body).then(data => res.json(data))
        .catch(err => res.status(422).json(err));
        console.log("user created");
      }
  })
})

// app.use('/', router);

app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})
