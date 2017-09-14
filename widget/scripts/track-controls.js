var $play = $('.play');
var $pause = $('.pause');

$($play.hide());

$($pause).click(function (event) {
    $(this).hide();
    $play.show()
});
$($play).click(function (event) {
    $(this).hide();
    $pause.show()
});