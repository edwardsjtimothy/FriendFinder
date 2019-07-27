var surveyData = require("../data/friends");

module.exports = function(app) {
  
  app.get("/api/friends", function(req, res) {
    res.json(surveyData);
  });

 
  app.post("/api/friends", function(req, res) {
    surveyData.push(req.body);

    var compatability = []
    var bffScore = 0

    function friendSort() {

        
        var user = surveyData[surveyData.length-1].scores;
        
        for (i = 0; i < surveyData.length-1; i++) {

          var scores = surveyData[i].scores;

          for (x = 0; x < 10; x++) {
            var max = Math.max(scores[x],user[x]);
            var min = Math.min(scores[x],user[x]);
            var diff = max-min;
            bffScore += diff;

            if (x === 9) {
                compatability.push(bffScore);
                bffScore = 0;
            };
          }; 

          if (compatability.length === surveyData.length-1) {
              var bff = compatability.indexOf(Math.min(...compatability));
              console.log(surveyData[bff]);
              return surveyData[bff];
              
          };

        };

    };

    var newFriend = friendSort(surveyData);
    res.json(newFriend);
    
  });

};
