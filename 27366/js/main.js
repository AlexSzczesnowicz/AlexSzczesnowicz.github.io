$(document).ready(function(){

$('#knopka').click(function(){
    $('#kvadrat').animate({
        right:'100px', 
        height:'100px',
        width:'100px'
    },3000, function(){
        $('#kvadrat').animate({
            backgroundColor: "blue",
          }, 1000 );
    });
    setTimeout(()=>{$('#kvadrat').append('<h2>animacja</h2>');},3000);
});
});
// почему не ьерутся данные о положении Х2 из ЦСС файла, как их взять

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


