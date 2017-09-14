

function playlist() {
    $('#songs-list').empty();
    $.getJSON("../data/songs.json", function (songs) {
        songs.forEach(function (song, index) {
                $('#songs-list').append($('<div>').addClass('song')
                    .append($('<span>').addClass('song-duration').text(song.duration))
                    .append($('<span>').addClass('song-artist').text(song.artist))
                    .append($('<div>').addClass('song-name').text(song.title))
                    .append($('<i class="fa fa-share-alt" aria-hidden="true"></i>'))
                    .append($('<i class="fa fa-heart" aria-hidden="true"></i>'))
                )
        });
    });
}


playlist();