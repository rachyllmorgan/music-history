//var songs = [];
//var list_of_songs = document.getElementById("songlist");

//songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
//songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
//songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
//songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
//songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


//var addSongBottom = songs.push("Hold Back the River > by James Bay on the album Chaos and the Calm");
//var addSongTop = songs.unshift("Just One Drink > by Jack White on the album Lazaretto");
//
//
//var addSong = prompt("Pick a song","Song Name");
//	if (addSong===""); {
//var addArtist = prompt("Who sings it?","Artist Name")
//	}
//	if (addSong===""); {
//var addAlbum = prompt("On what album?","Album Name")
//	songs.push(addSong + " &#8208 by " + addArtist + " on the album " + addAlbum);
//}
//for (var i = 0; i < songs.length; i++) {
//	var list = songs[i];
//
//	var song_mod = songs[i].replace(/[-+.^:,*@()!]/g,"").replace(/>/g, "-");
//
//console.log(song_mod);
//list_of_songs.innerHTML += "<span class='list_mod'>" + song_mod + "</span>" + "<br>";
//}

$(document).ready(function(){
		$.ajax({
				url: "music.json"
		}).done(function(data) {
				console.log(JSON.stringify(data.songs));
				$("#songlist").html(JSON.stringify(data.songs))
		})
		$.ajax({
				url: "music.json"
		}).done(function(data) {
				console.log(JSON.stringify(data.songs));
		})
});