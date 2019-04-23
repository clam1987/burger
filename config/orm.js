//Require connection
let connection = require("./connection");

//Loops through and creates an array of question marks for passing in values
function printQuestionMark(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

//helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  //loops through the keys and push the key/value as a string int arr
  for (var key in db) {
    var value = ob[key];
    //Check for hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  //translate array of strings to a single comma-seprated string
  return arr.toString();
}

//object for all our sql statements
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },

  //vals is an array that saves to cols
  //cols are columens that are inserted into values
create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString +=" (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMark(vals.length);
    queryString += ") ";

    console.log(queryString);
    
    connection.query(queryString, vals, function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
    });
},

//objColVals are vals and cols we update
update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE" + tables;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE "
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, res) {
        if (err) {
            throw err;
        }
        cb(res);
    });
}
};

//Export orm obj
module.exports = orm;
