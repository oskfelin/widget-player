var $play = $('.play');
var $pause = $('.pause');
var $next = $('.next');
$($play.hide());

$($pause).click(function () {
    $(this).hide();
    $play.show()
});
$($play).click(function () {
    $(this).hide();
    $pause.show()
});

$.getJSON("../data/songs.json", function (songs) {
    $($next).click(function () {
        if (currId <= songs.length - 1) {
            currId = currId + 1;
            titleLoader();
            return currId + 1
        }
        else {
            currId = 1;
            titleLoader();
            return currId
        }
    });
});




