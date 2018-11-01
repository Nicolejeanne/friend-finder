// LOAD DATA
// Links routes to a series of "data" sources.
// These data sources hold arrays of information on friends
var friendsData = require("../data/friends");

// ROUTING
module.exports = function(app) {

    // API GET Requests
    // Below code handles when users "visit" a page.
    // When a user visits a link they are shown a JSON of the data

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });

    //   API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // When a user submits form data (a JSON object) the JSON is pushed to the appropriate JavaScript array
    // Then the server saves the data to the friends array

    app.post("/api/friends", function(req, res) {
        console.log("here it is: " + req.body);
        friendsData.push(req.body);
        res.json(true);
    });

    // Determine friend compatibility
// let user = req.body;

    // Code to clear out the table for testing
    app.post("/api/clear", function() {
        // Empty out the arrays of data
        friendsData = [];
        console.log(friendsData);
      });
}
