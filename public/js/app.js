$(function() {

$(window).resize(function(){
    if ($(window).width()> 1000){
        $('body').css
        ({background:'red'
    })
    }else if ($(window).width()> 700){
        4('body').css
        ({background: 'blue'
    })
    }else{
        $('body').css
        ({
            background:'yellow'
        })
    }
    })





   $('.box1').on('click', function(){
       $('body').css({
           background:'red'
       })
   })
   

});
