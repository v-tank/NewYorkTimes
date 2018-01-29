function getData() {

	var searchTerm = $("#term").val();
	var startYear = $("#start").val();
	var endYear = $("#end").val();

	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
	  'api-key': "a3179e0c2cd34315bcc706f44d24cdc8",
	  'q': searchTerm,
	  'begin_date': startYear,
  	'end_date': endYear,
	  'sort': "newest",
	  'fl': "web_url, headline, pub_date",
	  'page': 0
	});
	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {

	  console.log(result);

	  for (var i = 0; i < parseInt($("#limit").val()); i++) {
	  	var title = result.response.docs[i]["headline"]["main"];
	  	var publish_date = result.response.docs[i]["pub_date"];
	  	var articleURL = result.response.docs[i]["web_url"];

	  	var articleCard = $("<div>");
	  	articleCard.html('<div class="card"><div class="card-body"><h5 class="card-title">'+title+'</h5><h6 class="card-subtitle mb-2 text-muted">'+publish_date+'</h6><a href="'+articleURL+'" class="card-link" target="_blank">'+articleURL+'</a></div></div>');

	  	// console.log(title, publish_date, articleURL);

	  	$("#results").prepend(articleCard);
	  }

	});
}

$("#search").on("click", function(event){
	event.preventDefault();
	getData();
});
