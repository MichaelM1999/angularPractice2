const db = require("../models");

module.exports = {
    findOne: function(req, res) {
        //req will have two values

        console.log("Checking DB for Findone", req.body);
        db.User
          .findOne({username: req.body.username}).then(data => {
            res.send(data);
          })
          .catch(err => res.status(422).json(err));
          //match username's password here...
          //use if statement
    },
    create: function(req, res) {
       //make a statement to check if user exists already.
       console.log('HEY', req.body);
        db.User
          .exists({username: req.body.username}).then(data => {
              console.log(data)
            if (data === true) {
                res.send({err: 'User already exists!'})
                console.log("already here")
              }
              else {
                db.User.create(req.body).then(data => res.json(data))
                .catch(err => res.status(422).json(err));
                console.log("user created");
              }

          });
        
      }
}

