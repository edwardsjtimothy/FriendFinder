var surveyData = require("../data/friends");

module.exports = function(app) {
  
  app.get("/friends", function(req, res) {
    res.json(surveyData);
  });

 
  app.post("/friends", function(req, res) {
    surveyData.push(req.body);
    
  });

};