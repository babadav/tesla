function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}
// $('#results').append(tplawesome('hi','Im','kenneth'))
$(function() {
    $("form").on("submit", function(e) {
       e.preventDefault();
       // prepare the request
       var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
            maxResults: 3,
            order: "viewCount",
            publishedAfter: "2015-01-01T00:00:00Z"
       }); 
       // execute the request
       request.execute(function(response) {
          var results = response.result;
          $("#results").html("");
          $.each(results.items, function(index, item) {
          	console.log(item)
            $.get("tpl/item.html", function(data) {
                $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
            });
          });
          resetVideoHeight();
       });
    });

    $("body").on("click", "#results .item", function() {
    	// console.log("click event on item")
    	$("#results .item").removeClass("active");
    	$(this).addClass("active")
    })
    
    $(window).on("resize", resetVideoHeight);
});

function resetVideoHeight() {
    $(".video").css("height", $("#results").width() * 9/16);
}

function init() {
	console.log("init()");
    gapi.client.setApiKey("AIzaSyDH3Je7Vq_redqWlOy-m2CG54yFJ39XOQs");
    gapi.client.load("youtube", "v3", function() {
        // yt api is ready
        console.log("youtube api ready");
    });
}

$('video').iframeTracker({
		blurCallback: function(){
			$('video').on('click', function(){
				console.log('please work');
			})
		}
	});




let coords= {
	lat: 0,
	long: 0
};

navigator.geolocation.watchPosition((data)=>{
	console.log(data);
})

