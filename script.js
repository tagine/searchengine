
// This will be 'Search' button  - Need Ids for the html elements - take ID's value for search in URL
$("#searchBtn").on("click", function () {
    event.preventDefault();
    // console.log("search button clicked");
    var searchTerm = $("#searchInput").val();
    console.log(searchTerm);
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
                var articleDiv = $("<div>");

                var headline = JSON.stringify(response.response.docs[i].abstract);
                var leadP = JSON.stringify(response.response.docs[i].lead_paragraph);

                var content = $("<h1>").text(headline);
                var leadContent = $("<h2>").text(leadP);

                articleDiv.text(content + leadContent);

                $("#results").prepend(articleDiv);
            }
        });
});