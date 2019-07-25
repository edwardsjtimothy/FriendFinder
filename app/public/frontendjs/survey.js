$(function () {
    var incomplete = false

    $("#submit").on("click", function (event) {
        event.preventDefault();


       
        $(".custom-select").each(function () {

            if ($(this).val() === "") {
            $(this).css("border", "1px solid red");
            incomplete = true;
            } else if ($(this).val() !== "") {
            $(this).css("border", "1px solid grey");
            };

            });

            if ($("select").val() !== "") {
                incomplete = false;
            };

            if (incomplete === false) {
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
        } else {
            alert("Your responses to these statements are crucial to determining you new best friend forever. Please provide a ranking for each statement.");
        };

            console.log(rankings);
    
    });
});
