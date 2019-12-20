var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
// This will be 'Search' button  - Need Ids for the html elements - take ID's value for search in URL
$("#searchBtn").on("click", function () {
    var searchTerm = $("#searchInput").val();
    var limit = 5
    // var startYear =
    // var endYear = 
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + "q="
    searchTerm + "&api-key=vHQDjSkj9UkPscONU8NsiP549feFmAIX";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var results = response.docs;
            for (var i = 0; i < limit.val(); i++) {
                var articleDiv = $("<div>");
                var headline = response.docs[i].abstract;
                var leadP = response.docs[i].lead_paragraph;
                var content = $("<h1>").text(headline);
                var leadContent = $("<h2>").text(leadP);
                articleDiv.text(content + leadContent);
                $("#results").prepend(articleDiv);
            }
        });
});