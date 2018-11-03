// DATA
// Below data will hold all of the friends information

let friendsArray = [
  {
    name: "Bob Bobby",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhgq6zNL0YcjFnSP_xDtpBwucFsZR4qcOx52XKu8Y7fiWT__ZQ",
    scores: [5, 2, 5, 3, 4, 1, 1, 4, 2, 5]
  }, {
    name: "Lois",
    photo: "https://i.imgflip.com/1g76ai.jpg",
    scores: [5, 5, 1, 5, 1, 1, 1, 4, 4, 5]
  }, {
    name: "Justin",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIpj4EyXnCsY1dcjFU9VIwH5pKg5NE_KVR6twYrFTxCexgT_m",
    scores: [1, 3, 3, 2, 1, 3, 5, 1, 5, 5]
  }, {
    name: "Martha",
    photo: "http://www.gstatic.com/tv/thumb/persons/70834/70834_v9_bb.jpg",
    scores: [3, 1, 1, 3, 1, 5, 5, 2, 5, 5]
  }, {
    name: "Beth",
    photo: "https://vignette.wikia.nocookie.net/rickandmorty/images/5/58/S2e4_beth_drinking_wine.png/revision/latest?cb=20160922025143",
    scores: [2, 1, 2, 1, 1, 5, 5, 4, 2, 5]
  }

];

// Exporting the array. This makes it accessible to other files using require.
module.exports = friendsArray;
