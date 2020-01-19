const db = require("../models");

module.exports = {
    create: function(req, res) {
        console.log('HEY', req.body);
         db.Stock
           .exists({stock_name: req.body.stock, owner: req.body.user}).then(data => {
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

                 db.Stock.create(stock).then(data => res.send(data))
                 .catch(err => res.status(422).json(err));
                 console.log("stock created");
               }
 
           });
         
       },
    find: function(req, res) {
      console.log('hellooooo', req.body.user);
      db.Stock
        .find({owner: req.body.user}).then(data => {
          res.send(data)
          // .catch(err => res.status(422).json(err));
        })
    },
    delete: function(req, res) {
      console.log("deleting", req.body.stockunfollow.owner);
      db.Stock
        .deleteOne({owner: req.body.stockunfollow.owner, stock_name: req.body.stockunfollow.stock_name}).then(data =>{
          res.send(data)
          // .catch(err => res.status(422).json(err));
          console.log(data);
        })
    }
}