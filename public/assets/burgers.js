$(function() {
    $(".change-devoured").on("click", function(e) {
        var id = $(this).data("id");
        var newdev = $(this).data("newdev");
        var devouredState = {
            devoured: newdev
        };
        console.log(id)
        console.log(devouredState);
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(
            function() {
                console.log("changed devoured to", newdev);
                location.reload();
            }
        );

    });
    $(".create-form").on("submit", function(e) {
        e.preventDefault();

        var newBurger = {
            burger_name: $("#ca").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };
        console.log(newBurger);
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("New burger: " + newBurger);
                location.reload();
            }
        );
    });

});