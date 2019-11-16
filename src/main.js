function beginScripts() {
    var search = document.getElementById('search');
    var cover = document.getElementById('cover');
    var clock = document.getElementById('clock');

    manageClock(clock)
    setTimeout(function() {cover.remove()}, 700);
}

function manageClock(clock) {
    var date = new Date
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'PM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;

    clock.innerHTML = hours + ':' + minutes + ' ' + ampm;

    setTimeout(function() {manageClock(clock)}, 1000);
}

document.onkeypress = function (e) {
    var search = document.getElementById('search');
    var searchFocus = (document.activeElement === search);

    if (!searchFocus) {
        if (e.key != 'Enter') {
            old = search.value;
            search.value += e.key;
            search.focus();
        }
    }

    else if (searchFocus) {
        if (e.key == 'Enter') {
            window.location.href = ('https://duckduckgo.com/?q=' + search.value).replace(/ /g,"+");
        }
    }
}
