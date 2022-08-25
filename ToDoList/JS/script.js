$(document).ready(function () {
    var $input = $('.mr-2')
    var $btn = $('.btn')
    var $list = $('.list-group')
    var i = 0
    $btn.on('click',function(e){

        i++

        $list.append(`<li>${i}) ${$input.val()}</li>`)
        
        $input.val('')
    })
});