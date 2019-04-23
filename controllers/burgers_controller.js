let express = require("express");
let router = express.Router();

// import model burger to use
let burger = require("./../models/burger");

//Create all our routes and set up logic within those routes
//Index Route
router.get("/", function(req, res) {
    res.redirect("/burgers");
  });

router.get("/burgers", function(req, res) {
    burger.all(function(burgerData) {
        var hbsObject = {
            burger_data: burgerData
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("api/burgers", function(req, res) {
    burger.create([
        "burger_name"
    ], [req.body.burger_name], function(result) {
        //send back the id
        res.json({ id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    //if doesn't work it is params not param
    burger.update(req.param.id, function(result) {
        console.log(result);
        res.sendStatus(200);
    });
});

module.exports = router;