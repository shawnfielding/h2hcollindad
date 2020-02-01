// link to the data
var friendData = require("../data/friends");
// Routing for API calls
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {
    function getSum(xar) {
      var sum = 0
      for (var i = 0; i < xar.length; i++) {
        sum += xar[i]
      }
      return sum
    }
    var thisSum = getSum(req.body.scores)
    var matchOne = friendData[0];
    var matchDiff = Math.abs(thisSum) - (getSum(friendData[0].scores))
    var thatSum
    var theDiff
    for (var i = 1; i < friendData.length; i++) {
      thatSum = getSum(friendData[i].scores);
      theDiff = Math.abs(thisSum - thatSum);
      if (theDiff < matchDiff) {
        matchDiff = theDiff
        matchOne = friendData[i]
      }
    }
    res.json(matchOne);
  });
};
