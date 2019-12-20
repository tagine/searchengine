// This will be 'Search' button  - Need Ids for the html elements - take ID's value for search in URL
$("#searchBtn").on("click", function () {
    // console.log("search button clicked");
    event.preventDefault();
    var searchTerm = $("#searchInput").val();
    var limit = $(".custom-select").val();
    console.log(limit);
    

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    searchTerm + "&api-key=SeAyCJ6GnIzGyJQXnzNC3wwsDZfcS5tq";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            for (var i = 0; i < limit; i++) {
                var articlesContainer = $("<div>");
                var articleDiv = $("<div>");

                var headline = JSON.stringify(response.response.docs[i].abstract);
                var leadP = JSON.stringify(response.response.docs[i].lead_paragraph);
                var link = JSON.stringify(response.response.docs[i].web_url);
               

                var content = $("<h2>").text(headline);
                var leadContent = $("<h4>").text(leadP);
                var contentLink = $("<a>").text(link);
                contentLink.attr("href", response.response.docs[i].web_url);

                content.appendTo(articleDiv);
                leadContent.appendTo(articleDiv);
                contentLink.appendTo(articleDiv);

                articleDiv.appendTo(articlesContainer);

                $("#results").prepend(articlesContainer);
            }
        });
});