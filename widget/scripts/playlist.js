var $playlist = $('#playlist, .shadow2-bottom, .shadow2-top');
var $player = $('#player, .shadow1-bottom, .shadow1-top');
var $burger = $('#burger');
var $back = $('#back');

$($playlist.hide());

$($burger).click(function () {
    $player.hide();
    $playlist.show()
});
$($back).click(function () {
    $playlist.hide();
    $player.show();
});

function playlist() {
    $('#songs-list').empty();
    $.getJSON("../data/songs.json", function (songs) {
        songs.forEach(function (song, index) {
            $('#songs-list').append($('<div>').addClass('song')
                .append($('<span>').addClass('song-duration').text(song.duration))
                .append($('<span>').addClass('song-artist').text(song.artist))
                .append($('<div>').addClass('song-name').attr('id', song.id).text(song.title))
                .append($('<i class="fa fa-share-alt" aria-hidden="true"></i>'))
                .append($('<i class="fa fa-heart" aria-hidden="true"></i>'))
            )
        });
        $('.song-name').click(function () {
            currId = parseInt(this.id);
            $playlist.hide();
            $player.show();
            titleLoader();
            return currId
        });
    });
}
playlist();