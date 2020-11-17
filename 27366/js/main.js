$(document).ready(function(){

$('#knopka').click(function(){
    $('#kvadrat').animate({
        right:'100px', height:'100px',width:'100px'
    },3000, function(){
        $('#kvadrat').css({backgroundColor:'red'
        },5000
    );
});
});
});


        //$('#kvadrat').animate({backgroundColor:'#4E1402'},1000);
        //setTimeout($('#kvadrat').css({backgroundColor:'#4E1402'},1000),3000);
        //    let sekfunk = $('#kvadrat').css({backgroundColor:'#4E1402'},1000);
        //    setTimeout(sekfunk,1000);
        // function secfun(){
        //     $('#kvadrat').css({backgroundColor:'#4E1402'},1000);
        // }
        // setTimeout(()=>{
        //     secfun();
        // });
//     setTimeout(()=>{$('#kvadrat').css({backgroundColor:'red'});
// },1000);


