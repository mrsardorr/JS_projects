window.addEventListener('load', function (e) {
    var span1 = document.querySelector('.item-1 span');
    var btn1 = document.querySelector('.btn1');
    var reset1 = document.querySelector('.reset1');
    var stop1 = document.querySelector('.stop1');
    var setvalue = document.querySelectorAll('.setval');
    var time = 1000

    function TimerOptions(btnStart, btnStop, btnReset, time, innerTime, span) {
        this.btnStart = btnStart
        this.btnStop = btnStop
        this.btnReset = btnReset
        this.time = time
        this.innerTime = innerTime
        this.span = span

        var comf = this // comufulyaj

        this.control = function (e) {
            comf.btnStart.disabled = true
            comf.btnStop.disabled = false
            comf.inter = setInterval(function () {
                comf.span.innerHTML = comf.time
                comf.time--
                if (comf.time < 0) {
                    clearInterval(comf.inter)
                }
                
            }, comf.innerTime)
        }
        this.stop = function(e){
            clearInterval(comf.inter)
            comf.btnStart.disabled = false
            comf.btnStop.disabled = true

        }
        this.restart = function(e){
            clearInterval(comf.inter)
            comf.time = time
            comf.span.innerHTML = ''

            comf.btnStop.disabled = false
            comf.btnStart.disabled = false
        }
    }


    var timer1 = new TimerOptions(btn1, stop1, reset1, 100, 1000, span1)

    timer1.btnStart.addEventListener('click', timer1.control)

    timer1.btnStop.addEventListener('click', timer1.stop)

    timer1.btnReset.addEventListener('click', timer1.restart)

    setvalue.forEach(function(val,idx){
        val.addEventListener('click', function () {
            var tt = this.getAttribute('data-time')
            timer1.span.innerHTML = tt
            timer1.time = tt
            console.log(tt)
        })
    })



    // setvalue.addEventListener('click',function(e){
    //     var val = this.getAttribute('data-time')
    //     console.log(val)
    // })


});