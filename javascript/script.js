var artistId = '5pKCCKE2ajJHZ9KAiaK11H';
var querySongs = 'https://spotify81.p.rapidapi.com/artist_singles?id=' + artistId

// /// --- Fetch artist songs & create a button to select the song
// // ID=songs from index.html
// var songList = $('#songs')

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3d49b28fa7mshd6566b34c07f0e9p1fa63cjsn4a728070049a',
        'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
    }
};

fetch(querySongs, options)
    .then(response => response.json())
    .then(function(data) {
        console.log(data) 
        console.log(data.data.artist.discography.singles.items[1].releases.items[0].name)
        console.log(data.data.artist.discography.singles.items[6].releases.items[0].name)
        console.log(data.data.artist.discography.singles.items.length)

        for (var i = 0; i < data.data.artist.discography.singles.items.length; i++) {
            var song = data.data.artist.discography.singles.items[i].releases.items[0].name
            console.log(song)
            songEl1 = $('<li>')
            songEl1.attr('class', 'btnSong')
            songEl2 = $('<button>')
            songEl2.attr('name', song)
            songEl2.text(song); 
            songEl1.append(songEl2)
            songList.append(songEl1)
        }
    })
    .catch(err => console.error(err))
