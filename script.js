$(document).ready(function () {
    $(".nav a").on("click", function (event) {
        event.preventDefault();
        var targetId = $(this).attr("href");
        $(targetId).get(0).scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start"
        });
    });
});
