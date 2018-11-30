// LOAD DATA
// Links routes to a series of "data" sources.
// These data sources hold arrays of information on friends
var friendsArray = require("../data/friends");

// ROUTING
module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // When a user visits a link they are shown a JSON of the data

  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });

  //   API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // When a user submits form data (a JSON object) the JSON is pushed to the appropriate JavaScript array
  // Then the server saves the data to the friends array

  app.post("/api/friends", function(req, res) {
    console.log(req.body);

    // Set user info
    let newUserInput = req.body;
    console.log(newUserInput);
    let newUserName = newUserInput.name;
    console.log(newUserName);
    let newUserPhoto = newUserInput.photo;
    console.log(newUserPhoto);
    let newUserScores = newUserInput.scores;
    console.log(newUserScores);


    // Set minimum difference high as starting point for answer comparison, default friend match
    let bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    // in this for-loop, start off with a zero difference and compare the user and the friend scores, one set at a time
    //  whatever the difference is, add to the total difference
    // friend list loop
    for (let i = 0; i < friendsArray.length; i++) {
      let totalDifference = 0;
      // score loop
      for (let j = 0; j < friendsArray[i].scores.length; j++) {
        totalDifference += Math.abs(
          parseInt(newUserScores[j] - parseInt(friendsArray[i].scores[j]))
        );
        if (totalDifference <= bestMatch.friendDifference) {
          bestMatch.name = friendsArray[i].name;
          bestMatch.photo = friendsArray[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }

    // after finding match, add user to friend array
    friendsArray.push(newUserInput);
    
    console.log(bestMatch);
    // send back to browser the best friend match
    res.json(bestMatch);
  });
};
