// This will be 'Search' button  - Need Ids for the html elements - take ID's value for search in URL
$("#searchBtn").on("click", function () {
    // console.log("search button clicked");
<<<<<<< HEAD
    event.preventDefault();
    var searchTerm = $("#searchInput").val();
=======
    var searchTerm = $("#searchInput").val();
    event.preventDefault();
    console.log(searchTerm);
>>>>>>> 2e45895a358a7fe25588a445de8a81efd7c941d1
    var limit = 5
    

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    searchTerm + "&api-key=SeAyCJ6GnIzGyJQXnzNC3wwsDZfcS5tq";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
            for (var i = 0; i < 5; i++) {
                var articlesContainer = $("<div>");
                var articleDiv = $("<div>");

                var headline = JSON.stringify(response.response.docs[i].abstract);
                var leadP = JSON.stringify(response.response.docs[i].lead_paragraph);

                var content = $("<h1>").text(headline);
                var leadContent = $("<h2>").text(leadP);

                content.appendTo(articleDiv);
                leadContent.appendTo(articleDiv);

                articleDiv.appendTo(articlesContainer);

                $("#results").prepend(articlesContainer);
            }
        });
});