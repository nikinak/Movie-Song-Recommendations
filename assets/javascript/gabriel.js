var lastSongEl = $('#last-song');
lastSongEl.text(localStorage.getItem('lastSong'));

function getLyrics(songTitle) {
    console.log('before', songTitle)
    songTitle = songTitle.toLowerCase()
    console.log('after', songTitle)
    var songLyrics = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3130d66822mshcfc675e2289774cp18709ejsnc5da71eec2fe',
		'X-RapidAPI-Host': 'powerlyrics.p.rapidapi.com'
	    }
    };

    fetch(`https://powerlyrics.p.rapidapi.com/getlyricsfromtitle?title=${songTitle}`, songLyrics)
        .then(function(response) {return response.json()})        
	    .then(function(data) {console.log(data)
            if (data.success === false) {
                document.getElementById('lyrics-text').innerHTML = data.errmsg;
            } if (data.success === true) {
                document.getElementById('lyrics-text').innerHTML = data.lyrics;
            };
        })
	    .catch(function(error) {return console.error(error)})
};

$('#songs').on('click', '#songName', (e) => {
    let id = $(e.target).attr('name') || $(e.target).closest('#songName').attr('name');
    getLyrics(id);
    var lastSongEl = $('#last-song');
    localStorage.setItem("lastSong", id);
    lastSongEl.text(localStorage.getItem('lastSong'));
  })


var track4Lyrics = document.getElementsByClassName('btnSong')

// track4Lyrics.addEventListener("click", getLyrics)


// TODO's
// set click event function that will start the getLyrics function when a song is selected from the id='tracks' listed item and adds that song + artist title to local storage
// (Complete) get lyrics to display in id="lyrics-text"
// function to display songs and artist on page, recover data from local storeage