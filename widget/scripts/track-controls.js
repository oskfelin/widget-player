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
            strokeWidth: 7,
            trailColor: '#ffffff',
            trailWidth: 7
        });
        circle.set(0.36);

        var circle1 = new ProgressBar.Circle('#progress1', {
            color: '#d3d5de',
            strokeWidth: 7,
            start: 0.36,
            duration: 30000,
            trailColor: '#ffffff',
            trailWidth: 7
        });
        circle1.animate(1);
    };

});



