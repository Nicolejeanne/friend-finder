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

// Get user info
let newUser = req.body;

// Set minimum difference high as starting point for answer comparison, default friend match
let bestMatchIndex = 0;
let minDiff = 1000;

// in this for-loop, start off with a zero difference and compare the user and the friend scores, one set at a time
    //  whatever the difference is, add to the total difference
    for(let i = 0; i < friendsData.length; i++) {
        let totalDiff = 0;
        for(let j = 0; j < friendsData[i].scores.length; j++) {
          let difference = Math.abs(newUser.scores[j] - friendsData[i].scores[j]);
          totalDiff += difference;
        }

        // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
      if(totalDiff < minDiff) {
        bestMatchIndex = i;
        minDiff = totalDiff;
      }

// after finding match, add user to friend array
        friendsData.push(newUser);

      // send back to browser the best friend match  
        res.json(friendsData[bestMatchIndex]);
    };

    });
}
