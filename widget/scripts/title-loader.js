function titleLoader() {
    $('#title').empty();
    var currId = 1;

    $.getJSON("../data/songs.json", function (songs) {
        songs.forEach(function (song, index) {
            if (song.id === currId) {
                $('#title').append(
                    $('<div>')
                        .append($('<h3>').addClass('artist-name').text(song.artist))
                        .append($('<h5>').addClass('song-name').text(song.title))
                );
            }
        })
    });
}


titleLoader();