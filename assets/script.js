const dropdown = document.getElementById('dropdownchoices')
var displayContainer3 = document.getElementById('displaycontainer3')
var dropdownhide = document.getElementById('displaycontainer2')
var selectEl = document.getElementById('selectchoices')
dropdownhide.classList.remove('hide')
selectEl.addEventListener('change', funcContainer3)


function funcContainer3(event) {
    // console.log('event', event)
    // console.log(event.target.value)
    var artistSelected = event.target.value
    displayContainer3.classList.remove('hide')
    dropdownhide.classList.add('hide')
    showArtists(artistSelected)
}

function showArtists(artist) {

}