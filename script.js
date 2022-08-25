$(document).ready(function () {
    var $prog = $('.prog')
    var $game = $('.game')
    var $all = $('.all')
    var $a = $('.a')

    function func(clas) {
        $a.slideUp(0)
        $a.filter(clas).slideDown(330) 
    }

    $prog.on('click', function (e) {
        func('.p')
    })

    $game.on('click', function (e) {
        func('.g')
    })

    $all.on('click', function (e) {
        func('.a')
    })
});