$(function () {
    var incomplete = false

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

    
        if (incomplete === false) {
            console.log("form complete");

            $.post("/data/friends", rankings, function(data) {
                
                if (data)console.log(friends);
                
            });
       
        } else {
            alert("Your responses to these statements are crucial to determining you new best friend forever. Please provide a ranking for each statement.");
        };

    });
});
