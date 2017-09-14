var $playlist = $('#playlist');
var $player = $('#player');
var $burger = $('#burger');
var $back = $('#back');

$($playlist.hide());

$($burger).click(function () {
    $player.hide();
    $('.shadow1-bottom').hide();
    $('.shadow1-top').hide();
    $playlist.show()
});
$($back).click(function () {
    $playlist.hide();
    $player.show();
    $('.shadow1-bottom').show();
    $('.shadow1-top').show();
});








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
