const dropdown = document.getElementById('dropdownchoices')
var displayContainer3 = document.getElementById('displaycontainer3')
var dropdownhide = document.getElementById('displaycontainer2')
var morbius = document.getElementById('morbius')

start()


function start() {
    dropdownhide.classList.remove('hide')
    dropdown.addEventListener('click', funcContainer3)
}

function funcContainer3() {
    displayContainer3.classList.remove('hide')
    dropdownhide.classList.add('hide')
    showArtists()
}

function showArtists(Artists) {

}