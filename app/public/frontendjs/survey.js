$(function() {
    console.log( "ready!" );

$("#submit").on("click", function(event) {
    event.preventDefault();

    // Here we grab the form elements
    var rankings = {
      name: $("#name").val().trim(),
      photo: $("#photo-link").val().trim(),
      response1: $("#statement-one").val().trim(),
      response2: $("#statement-two").val().trim(),
      response3: $("#statement-three").val().trim(),
      response4: $("#statement-four").val().trim(),
      response5: $("#statement-five").val().trim(),
      response6: $("#statement-six").val().trim(),
      response7: $("#statement-seven").val().trim(),
      response8: $("#statement-eight").val().trim(),
      response9: $("#statement-nine").val().trim(),
      response10: $("#statement-ten").val().trim(),
    };

    console.log(rankings);
    console.log("Hi");

    // This line is the magic. It"s very similar to the standard ajax function we used.
    // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
    // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
    // depending on if a tables is available or not.

    // $.post("/data/friends", rankings,
    //   );

  });
});