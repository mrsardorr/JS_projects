var dino = document.querySelector('.dino');
var block = document.querySelector('.block');
var windo = document.querySelector('.window')
var h111 = document.querySelector('h1')

function jump(){
    if(dino.classList != 'action'){
        dino.classList.add('action')
    }
    setTimeout(function(){
        dino.classList.remove('action');
    },500)
}

var check = setInterval(function(){
    var top = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    var left = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if(left<20 && left>0 && top>=130){
        // block.style.animation = 'none';
        block.style.display = 'none'
        alert('dead')
        location.href = 'index.html';
    }
},1);

var i = 0
setInterval(function(e){
        // i = 0
        i++
        h111.innerHTML = i
},1200)



