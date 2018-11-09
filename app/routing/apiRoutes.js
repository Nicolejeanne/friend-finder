// LOAD DATA
// Links routes to a series of "data" sources.
// These data sources hold arrays of information on friends
var friends = require("../data/friends");

// ROUTING
module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // When a user visits a link they are shown a JSON of the data

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  //   API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // When a user submits form data (a JSON object) the JSON is pushed to the appropriate JavaScript array
  // Then the server saves the data to the friends array

  app.post("/api/friends", function(req, res) {
    console.log(req.body);

    // Set minimum difference high as starting point for answer comparison, default friend match
    let bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    // Set user info
    let newUserInput = req.body;
    let newUserName = newUserInput.name;
    let newUserPhoto = newUserInput.photo;
    let newUserScores = newUserInput.scores;

    // in this for-loop, start off with a zero difference and compare the user and the friend scores, one set at a time
    //  whatever the difference is, add to the total difference
    // friend list loop
    for (let i = 0; i < friends.length; i++) {
      let totalDifference = 0;
      // score loop
      for (let j = 0; j < friends[i].scores.length; j++) {
        totalDifference += Math.abs(
          parseInt(
            newUserScores[j] - parseInt(friends[i].scores[j])
          )
        );
        if (totalDifference <= bestMatch.friendDifference) {
          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }

      // after finding match, add user to friend array
      friends.push(newUserInput);

    }
    console.log(bestMatch);
    // send back to browser the best friend match
    res.json(bestMatch);
  });
};
