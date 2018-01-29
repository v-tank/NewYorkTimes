// Built by LucyBot. www.lucybot.com

function getData() {

	var searchTerm = $("#term").val();
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
	  'api-key': "a3179e0c2cd34315bcc706f44d24cdc8",
	  'q': searchTerm,
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
	  	var container = $("<div>");
	  	var title = result;
	  }

	});
}

$("#search").on("click", function(event){
	event.preventDefault();
	getData();
});
