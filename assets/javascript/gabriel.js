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


// test for the above function
getLyrics('Hey Jude')




// TODO's
// set click event function that will start the getLyrics function when a song is selected from the the track-list class listed item and adds that song title to local storage
// get lyrics to display in id="lyrics-text"
// function to display songs and track on page
