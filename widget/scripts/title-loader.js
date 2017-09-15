var currId = 7;

function titleLoader() {
    $('#title').empty();
    $.getJSON("../data/songs.json", function (songs) {
        songs.forEach(function (song) {
            if (song.id === currId) {
                $('#title')
                    .append($('<h3>').addClass('artist-name').text(song.artist))
                    .append($('<h5>').addClass('song-name').text(song.title));

            }
        });
    });
}


titleLoader();
