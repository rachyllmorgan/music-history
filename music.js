$(document).ready(function(){	

	// Load songs from JSON
		$.ajax({
			url: "music.json",
		}).done(function(data) {
			var table = '';
			for(var i =0; i <= data.songs.length; i++) {
				console.log("data.songs", data.songs);
				table += "<table><tr><h3>"+ data.songs[i].name +"</h3></tr>"+"<tr>"+data.songs[i].artist+"</tr></br>"+"<tr>"+data.songs[i].album+"</tr></table>"+"<input type='button' value='Remove' class='remove'>";
				$('#table-body').html(table);
			
			}
		})
		
		// Add additional JSON file
		$(".more").click(function(){
			$.ajax({
				url: "music2.json",
			}).done(function(data) {
				var table = '';
				for(var i =0; i <= data.songs.length; i++) {
					console.log("data.songs[i].name", data.songs[i].name);
					table += "<table><tr><h3>"+data.songs[i].name+"</h3></tr>"+"<tr>"+data.songs[i].artist+"</tr></br>"+"<tr>"+data.songs[i].album+"</tr>"+"<input type='button' value='Remove' class='remove'></table>";
				}
				$('#table-body').append(table);
			})
		})

		// Remove songs
		$(document).on("click", ".remove", function(){
			console.log("Remove Clicked");
			$(this).prev().remove();
		})
});