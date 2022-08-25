window.addEventListener('load',function(e){


    var k1 = document.querySelector('.box-1')
    var k2 = document.querySelector('.box-2')
    var k3 = document.querySelector('.box-3')
    var k4 = document.querySelector('.box-4')
    var k5 = document.querySelector('.box-5')
    var k6 = document.querySelector('.box-6')
    var k7 = document.querySelector('.box-7')
    var k8 = document.querySelector('.box-8')
    var k9 = document.querySelector('.box-9')


    var btn = document.querySelector('button')





    k1.addEventListener('keyup',function(e){
        this.value = this.value.replace(/[^\d]/g,'x')
        this.value = this.value.replace(/[123456789]/g,'0')
        
        if (
            ((k1.value == 'x') || (k1.value == 'X')) && 
            ((k2.value == 'x') || (k2.value == 'X')) &&
            ((k3.value == 'x') || (k3.value == 'X')) 
            ){
            alert('X yutdi')
        }
        else if (
            ((k1.value == 'x') || (k1.value == 'X')) && 
            ((k5.value == 'x') || (k5.value == 'X')) &&
            ((k9.value == 'x') || (k9.value == 'X'))
        ){
            alert('X yutdi')
        }
        else if (
            ((k1.value == 'x') || (k1.value == 'X')) && 
            ((k4.value == 'x') || (k4.value == 'X')) &&
            ((k7.value == 'x') || (k7.value == 'X'))
        ){
            alert('X yutdi')
        }
    })
    k2.addEventListener('keyup',function(e){
        this.value = this.value.replace(/[^\d]/g,'x')
        this.value = this.value.replace(/[123456789]/g,'0')


        if (((k1.value == 'x') || (k1.value == 'X')) && 
            ((k2.value == 'x') || (k2.value == 'X')) &&
            ((k3.value == 'x') || (k3.value == 'X')) ){
            alert('X yutdi')
    
        }
        else if (
            ((k2.value == 'x') || (k2.value == 'X')) && 
            ((k5.value == 'x') || (k5.value == 'X')) &&
            ((k8.value == 'x') || (k8.value == 'X'))
        ){
            alert('X yutdi')
        }
    })
    k3.addEventListener('keyup',function(e){
        this.value = this.value.replace(/[^\d]/g,'x')
        this.value = this.value.replace(/[123456789]/g,'0')


        if (((k1.value == 'x') || (k1.value == 'X')) && 
            ((k2.value == 'x') || (k2.value == 'X')) &&
            ((k3.value == 'x') || (k3.value == 'X')) ){
            alert('X yutdi')
    
        }
        else if (
            ((k3.value == 'x') || (k3.value == 'X')) && 
            ((k5.value == 'x') || (k5.value == 'X')) &&
            ((k7.value == 'x') || (k7.value == 'X'))
        ){
            alert('X yutdi')
        }
        else if (
            ((k3.value == 'x') || (k3.value == 'X')) && 
            ((k6.value == 'x') || (k6.value == 'X')) &&
            ((k9.value == 'x') || (k9.value == 'X'))
        ){
            alert('X yutdi')
        }
    })
    k4.addEventListener('keyup',function(e){
        this.value = this.value.replace(/[^\d]/g,'x')
        this.value = this.value.replace(/[123456789]/g,'0')


        if (((k1.value == 'x') || (k1.value == 'X')) && 
            ((k4.value == 'x') || (k4.value == 'X')) &&
            ((k7.value == 'x') || (k7.value == 'X')) ){
            alert('X yutdi')
    
        }
        else if (
            ((k4.value == 'x') || (k4.value == 'X')) && 
            ((k5.value == 'x') || (k5.value == 'X')) &&
            ((k6.value == 'x') || (k6.value == 'X'))
        ){
            alert('X yutdi')
        }

    })
    k5.addEventListener('keyup',function(e){
        this.value = this.value.replace(/[^\d]/g,'x')
        this.value = this.value.replace(/[123456789]/g,'0')


         if (
            ((k2.value == 'x') || (k2.value == 'X')) && 
            ((k5.value == 'x') || (k5.value == 'X')) &&
            ((k8.value == 'x') || (k8.value == 'X'))
        ){
            alert('X yutdi')
        }
        else if (
            ((k3.value == 'x') || (k3.value == 'X')) && 
            ((k5.value == 'x') || (k5.value == 'X')) &&
            ((k7.value == 'x') || (k7.value == 'X'))
        ){
            alert('X yutdi')
        }
        else if (
            ((k1.value == 'x') || (k1.value == 'X')) && 
            ((k5.value == 'x') || (k5.value == 'X')) &&
            ((k9.value == 'x') || (k9.value == 'X'))
        ){
            alert('X yutdi')
        }
        else if (
            ((k4.value == 'x') || (k4.value == 'X')) && 
            ((k5.value == 'x') || (k5.value == 'X')) &&
            ((k6.value == 'x') || (k6.value == 'X'))
        ){
            alert('X yutdi')
        }
    })
    k6.addEventListener('keyup',function(e){
        this.value = this.value.replace(/[^\d]/g,'x')
        this.value = this.value.replace(/[123456789]/g,'0')


        if (((k4.value == 'x') || (k4.value == 'X')) && 
            ((k5.value == 'x') || (k5.value == 'X')) &&
            ((k6.value == 'x') || (k6.value == 'X')) ){
            alert('X yutdi')
    
        }
        else if (
            ((k3.value == 'x') || (k3.value == 'X')) && 
            ((k6.value == 'x') || (k6.value == 'X')) &&
            ((k9.value == 'x') || (k9.value == 'X'))
        ){
            alert('X yutdi')
        }
    })
    k7.addEventListener('keyup',function(e){
        this.value = this.value.replace(/[^\d]/g,'x')
        this.value = this.value.replace(/[123456789]/g,'0')


        if (
            ((k1.value == 'x') || (k1.value == 'X')) && 
            ((k4.value == 'x') || (k4.value == 'X')) &&
            ((k7.value == 'x') || (k7.value == 'X'))
        ){
            alert('X yutdi')
        }
        else if (
            ((k3.value == 'x') || (k3.value == 'X')) && 
            ((k5.value == 'x') || (k5.value == 'X')) &&
            ((k7.value == 'x') || (k7.value == 'X'))
        ){
            alert('X yutdi')
        }
        else if (
            ((k7.value == 'x') || (k7.value == 'X')) && 
            ((k8.value == 'x') || (k8.value == 'X')) &&
            ((k9.value == 'x') || (k9.value == 'X'))
        ){
            alert('X yutdi')
        }
    })
    k8.addEventListener('keyup',function(e){
        this.value = this.value.replace(/[^\d]/g,'x')
        this.value = this.value.replace(/[123456789]/g,'0')



         if (
            ((k2.value == 'x') || (k2.value == 'X')) && 
            ((k5.value == 'x') || (k5.value == 'X')) &&
            ((k8.value == 'x') || (k8.value == 'X'))
        ){
            alert('X yutdi')
        }
        else if (
            ((k7.value == 'x') || (k7.value == 'X')) && 
            ((k8.value == 'x') || (k8.value == 'X')) &&
            ((k9.value == 'x') || (k9.value == 'X'))
        ){
            alert('X yutdi')
        }
    })
    k9.addEventListener('keyup',function(e){
        this.value = this.value.replace(/[^\d]/g,'x')
        this.value = this.value.replace(/[123456789]/g,'0')



         if (
            ((k3.value == 'x') || (k3.value == 'X')) && 
            ((k6.value == 'x') || (k6.value == 'X')) &&
            ((k9.value == 'x') || (k9.value == 'X'))
        ){
            alert('X yutdi')
        }
        else if (
            ((k7.value == 'x') || (k7.value == 'X')) && 
            ((k8.value == 'x') || (k8.value == 'X')) &&
            ((k9.value == 'x') || (k9.value == 'X'))
        ){
            alert('X yutdi')
        }
        else if (
            ((k1.value == 'x') || (k1.value == 'X')) && 
            ((k5.value == 'x') || (k5.value == 'X')) &&
            ((k9.value == 'x') || (k9.value == 'X'))
        ){
            alert('X yutdi')
        }
    })
    















    
    k1.addEventListener('keyup',function(e){
        if (
            ((k1.value == '0') || (k1.value == '0')) && 
            ((k2.value == '0') || (k2.value == '0')) &&
            ((k3.value == '0') || (k3.value == '0')) 
            ){
            alert('0 yutdi')
        }
        else if (
            ((k1.value == '0') || (k1.value == '0')) && 
            ((k5.value == '0') || (k5.value == '0')) &&
            ((k9.value == '0') || (k9.value == '0'))
        ){
            alert('0 yutdi')
        }
        else if (
            ((k1.value == '0') || (k1.value == '0')) && 
            ((k4.value == '0') || (k4.value == '0')) &&
            ((k7.value == '0') || (k7.value == '0'))
        ){
            alert('0 yutdi')
        }
    })
    k2.addEventListener('keyup',function(e){
        if (((k1.value == '0') || (k1.value == '0')) && 
            ((k2.value == '0') || (k2.value == '0')) &&
            ((k3.value == '0') || (k3.value == '0')) ){
            alert('0 yutdi')

        }
        else if (
            ((k2.value == '0') || (k2.value == '0')) && 
            ((k5.value == '0') || (k5.value == '0')) &&
            ((k8.value == '0') || (k8.value == '0'))
        ){
            alert('0 yutdi')
        }
    })
    k3.addEventListener('keyup',function(e){
        if (((k1.value == '0') || (k1.value == '0')) && 
            ((k2.value == '0') || (k2.value == '0')) &&
            ((k3.value == '0') || (k3.value == '0')) ){
            alert('0 yutdi')

        }
        else if (
            ((k3.value == '0') || (k3.value == '0')) && 
            ((k5.value == '0') || (k5.value == '0')) &&
            ((k7.value == '0') || (k7.value == '0'))
        ){
            alert('0 yutdi')
        }
        else if (
            ((k3.value == '0') || (k3.value == '0')) && 
            ((k6.value == '0') || (k6.value == '0')) &&
            ((k9.value == '0') || (k9.value == '0'))
        ){
            alert('0 yutdi')
        }
    })
    k4.addEventListener('keyup',function(e){
        if (((k1.value == '0') || (k1.value == '0')) && 
            ((k4.value == '0') || (k4.value == '0')) &&
            ((k7.value == '0') || (k7.value == '0')) ){
            alert('0 yutdi')

        }
        else if (
            ((k4.value == '0') || (k4.value == '0')) && 
            ((k5.value == '0') || (k5.value == '0')) &&
            ((k6.value == '0') || (k6.value == '0'))
        ){
            alert('0 yutdi')
        }
    })
    k5.addEventListener('keyup',function(e){
         if (
            ((k2.value == '0') || (k2.value == '0')) && 
            ((k5.value == '0') || (k5.value == '0')) &&
            ((k8.value == '0') || (k8.value == '0'))
        ){
            alert('0 yutdi')
        }
        else if (
            ((k3.value == '0') || (k3.value == '0')) && 
            ((k5.value == '0') || (k5.value == '0')) &&
            ((k7.value == '0') || (k7.value == '0'))
        ){
            alert('0 yutdi')
        }
        else if (
            ((k1.value == '0') || (k1.value == '0')) && 
            ((k5.value == '0') || (k5.value == '0')) &&
            ((k9.value == '0') || (k9.value == '0'))
        ){
            alert('0 yutdi')
        }
        else if (
            ((k4.value == '0') || (k4.value == '0')) && 
            ((k5.value == '0') || (k5.value == '0')) &&
            ((k6.value == '0') || (k6.value == '0'))
        ){
            alert('0 yutdi')
        }
    })
    k6.addEventListener('keyup',function(e){
        if (((k4.value == '0') || (k4.value == '0')) && 
            ((k5.value == '0') || (k5.value == '0')) &&
            ((k6.value == '0') || (k6.value == '0')) ){
            alert('0 yutdi')

        }
        else if (
            ((k3.value == '0') || (k3.value == '0')) && 
            ((k6.value == '0') || (k6.value == '0')) &&
            ((k9.value == '0') || (k9.value == '0'))
        ){
            alert('0 yutdi')
        }
    })
    k7.addEventListener('keyup',function(e){
        if (
            ((k1.value == '0') || (k1.value == '0')) && 
            ((k4.value == '0') || (k4.value == '0')) &&
            ((k7.value == '0') || (k7.value == '0'))
        ){
            alert('0 yutdi')
        }
        else if (
            ((k3.value == '0') || (k3.value == '0')) && 
            ((k5.value == '0') || (k5.value == '0')) &&
            ((k7.value == '0') || (k7.value == '0'))
        ){
            alert('0 yutdi')
        }
        else if (
            ((k7.value == '0') || (k7.value == '0')) && 
            ((k8.value == '0') || (k8.value == '0')) &&
            ((k9.value == '0') || (k9.value == '0'))
        ){
            alert('0 yutdi')
        }
    })
    k8.addEventListener('keyup',function(e){
         if (
            ((k2.value == '0') || (k2.value == '0')) && 
            ((k5.value == '0') || (k5.value == '0')) &&
            ((k8.value == '0') || (k8.value == '0'))
        ){
            alert('0 yutdi')
        }
        else if (
            ((k7.value == '0') || (k7.value == '0')) && 
            ((k8.value == '0') || (k8.value == '0')) &&
            ((k9.value == '0') || (k9.value == '0'))
        ){
            alert('0 yutdi')
        }
    })
    k9.addEventListener('keyup',function(e){
         if (
            ((k3.value == '0') || (k3.value == '0')) && 
            ((k6.value == '0') || (k6.value == '0')) &&
            ((k9.value == '0') || (k9.value == '0'))
        ){
            alert('0 yutdi')
        }
        else if (
            ((k7.value == '0') || (k7.value == '0')) && 
            ((k8.value == '0') || (k8.value == '0')) &&
            ((k9.value == '0') || (k9.value == '0'))
        ){
            alert('0 yutdi')
        }
        else if (
            ((k1.value == '0') || (k1.value == '0')) && 
            ((k5.value == '0') || (k5.value == '0')) &&
            ((k9.value == '0') || (k9.value == '0'))
        ){
            alert('0 yutdi')
        }
    })

    


    btn.addEventListener('click',function(e){
        k1.value = ''
        k2.value = ''
        k3.value = ''
        k4.value = ''
        k5.value = ''
        k6.value = ''
        k7.value = ''
        k8.value = ''
        k9.value = ''

    })
    





} )