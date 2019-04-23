// Import the ORM to create functiont hat will interact with the database
let orm = require("./../config/orm");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },

    // Variables for cols and vals are arrays.
    create: function(name, cb) {
        orm.create("burgers", ["burger_name", "devoured"], [name, false], cb);
        },

    update: function(id, cb) {
        var condition = "id=" + id;
        orm.update("burgers", {
            devoured: true
        }, condition, cb);
    }
};

module.exports = burger;