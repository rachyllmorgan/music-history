// var songs = [];
// var list_of_songs = document.getElementById("songlist");

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


// var addSongBottom = songs.push("Hold Back the River > by James Bay on the album Chaos and the Calm");
// var addSongTop = songs.unshift("Just One Drink > by Jack White on the album Lazaretto");

//var addSong = prompt("Pick a song");
//	if (addSong===""); {
//var addArtist = prompt("Who sings it?")
//	}
//	if (addSong===""); {
//var addAlbum = prompt("On what album?")
//	songs.push(addSong + " &#8208 by " + addArtist + " on the album " + addAlbum);
//}

// console.log(song_mod);
// list_of_songs.innerHTML += "<div class='list_mod'>" + song_mod + "</div>" + "<br>";
// }

//$(document).ready(function(){	
//	
//		$.ajax({
//				url: "music.json",
//		}).done(function(data) {

//});


$(document).ready(function(){	
	
		$.ajax({
				url: "music.json",
		}).done(function(data) {
			var table = '';
		for(var i =0; i <= data.songs.length; i++) {
			console.log(data.songs[i].name);
			table += "<table><tr><h3>"+data.songs[i].name+"</h3></tr>"+"<tr>"+data.songs[i].artist+"</tr></br>"+"<tr>"+data.songs[i].album+"</tr></table>";
			$('#table-body').html(table);
		}
						})
		$(".more").click(function(){
			$.ajax({
				url: "music2.json",
			}).done(function(data) {
			var table = '';
		for(var i =0; i <= data.songs.length; i++) {
			console.log(data.songs[i].name);
			table += "<table><tr><h3>"+data.songs[i].name+"</h3></tr>"+"<tr>"+data.songs[i].artist+"</tr></br>"+"<tr>"+data.songs[i].album+"</tr></table>";
			$(".remove").click(function() {
				$("tr").remove("<tr>");
			})
			$('#table-body').html(table);
		}
						})
		})
		
});