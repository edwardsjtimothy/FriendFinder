$(() => {
    console.log("survey frontend logic");
    //variable to check if the form is fully filled out
    var incomplete = false

    //click function for the submit button
    $("#submit").on("click", function (event) {
        event.preventDefault();

        var rankings = {
            name: $("#name").val().trim(),
            photo: $("#photo-link").val().trim(),
            scores: [],
        };
         
        $(".custom-select").each(function () {
        rankings.scores.push(parseInt($(this).val().trim()));
        });

        $(".user-res").each(function () {

            if ($(this).val() === "") {
                $(this).css("border", "1px solid red");
                incomplete = true;
            } else if ($(this).val() !== "") {
                $(this).css("border", "1px solid grey");
                incomplete = false;
            };

        });

    
        if (incomplete === true) {
            console.log("form complete");

            $.post("/api/friends", rankings, function(data) {
                
                if (data)console.log("working", data);
                
            });

        } else {
            alert("Your responses to these statements are crucial to determining you new best friend forever. Please provide a ranking for each statement.");
        };

    });

});
