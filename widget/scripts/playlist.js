

function playlist() {
    $('#songs-list').empty();
    $.getJSON("../data/songs.json", function (songs) {
        songs.forEach(function (song, index) {
                $('#songs-list').append($('<div>')
                    .append($('<span>').addClass('song-duration').text(song.duration))
                    .append($('<span>').addClass('song-artist').text(song.artist))
                    .append($('<div>').addClass('song-name').text(song.title)))
        });
    });
}


playlist();
