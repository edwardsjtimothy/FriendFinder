$(function () {
    var incomplete = false

    $("#submit").on("click", function (event) {
        event.preventDefault();

        $(".user-res").each(function () {

            if ($(this).val() === "") {
                $(this).css("border", "1px solid red");
                incomplete = true;
            } else if ($(this).val() !== "") {
                $(this).css("border", "1px solid grey");
                incomplete = false;
            };

        });

        if (incomplete === false) {
            var rankings = {
                name: $("#name").val().trim(),
                photo: $("#photo-link").val().trim(),
                response1: parseInt($("#statement-one").val().trim()),
                response2: parseInt($("#statement-two").val().trim()),
                response3: parseInt($("#statement-three").val().trim()),
                response4: parseInt($("#statement-four").val().trim()),
                response5: parseInt($("#statement-five").val().trim()),
                response6: parseInt($("#statement-six").val().trim()),
                response7: parseInt($("#statement-seven").val().trim()),
                response8: parseInt($("#statement-eight").val().trim()),
                response9: parseInt($("#statement-nine").val().trim()),
                response10: parseInt($("#statement-ten").val().trim()),
            };
        } else {
            alert("Your responses to these statements are crucial to determining you new best friend forever. Please provide a ranking for each statement.");
        };

        console.log(rankings);


        $.post("/data/friends", rankings,
      function(data) {

        // If a table is available... tell user they are booked.
        if (data) {
          alert("Yay! You are officially booked!");
        }

      });

    });
});
