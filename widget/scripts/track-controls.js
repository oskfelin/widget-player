var $play = $('.play');
var $pause = $('.pause');
var $next = $('.next');
var $previous = $('.previous');

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
    $($previous).click(function () {
        if (currId > 1) {
            currId = currId - 1;
            titleLoader();
            return currId - 1
        }
        else {
            currId = songs.length;
            titleLoader();
            return currId
        }
    });
    window.onload = function onLoad() {
        var circle = new ProgressBar.Circle('#progress', {
            color: '#d3d5de',
            strokeWidth: 5,
            trailColor: '#ffffff',
            trailWidth: 5
        });
        circle.set(0.4);
    };

});



