const dropdown = document.getElementById('dropdownchoices')
var displayContainer3 = document.getElementById('displaycontainer3')
var dropdownhide = document.getElementById('displaycontainer2')
var newheader = document.getElementById('second-text')
var startheader = document.getElementById('start-text')
var selectEl = document.getElementById('selectchoices')
dropdownhide.classList.remove('hide')
selectEl.addEventListener('change', funcContainer3)

var songList = $('#songs')

var lastArtistEl = $('#last-artist');
lastArtistEl.text(localStorage.getItem('lastArtist'));

function funcContainer3(event) {
    // console.log('event', event)
    // console.log(event.target.value)
    var artistSelected = event.target.value
    displayContainer3.classList.remove('hide')
    newheader.classList.remove('hide')
    dropdownhide.classList.add('hide')
    startheader.classList.add('hide')
    showArtists(artistSelected) // Unused code below

    if (artistSelected == 'Adele') {
        var artistId = '4dpARuHxo51G3z768sgnrY';
    } else if (artistSelected == 'Bad Bunny') {
        var artistId = '4q3ewBCX7sLwd24euuV69X';
    } else if (artistSelected == 'Justin Bieber') {
        var artistId = '1uNFoZAHBGtllmzznpCI3s';
    } else if (artistSelected == 'Lizzo') {
        var artistId = '56oDRnqbIiwx4mymNEv7dS';
    } else {
        var artistId = '5pKCCKE2ajJHZ9KAiaK11H'; // Rhianna Spotify ID
    }

    // var artistId = '5pKCCKE2ajJHZ9KAiaK11H'
    var querySongs = 'https://spotify81.p.rapidapi.com/artist_singles?id=' + artistId

    // --- Fetch artist songs & create a button to select the song
    // ID=songs from index.html
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
            // console.log(data) 
            // console.log(data.data.artist.discography.singles.items[1].releases.items[0].name)
            // console.log(data.data.artist.discography.singles.items[6].releases.items[0].name)
            // console.log(data.data.artist.discography.singles.items.length)

            for (var i = 0; i < data.data.artist.discography.singles.items.length; i++) {
                var song = data.data.artist.discography.singles.items[i].releases.items[0].name
                // console.log(song)
                songEl2 = $('<button>')
                songEl2.attr('id', 'songName')
                songEl2.attr('name', song)
                songEl2.text(song); 
                songList.append(songEl2)
            }
        })
        .catch(err => console.error(err))

    var lastArtistEl = $('#last-artist');
    localStorage.setItem("lastArtist", artistSelected);
    lastArtistEl.text(localStorage.getItem('lastArtist'));
}

// $('#songs').on('click', '#songName', (e) => {
//     let id = $(e.target).attr('name') || $(e.target).closest('#songName').attr('name');
//     console.log(id);
//   })

function showArtists(artist) {

}