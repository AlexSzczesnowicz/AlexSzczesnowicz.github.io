$(document).ready(function(){
//     let tt = $('.paragraf');
// console.log(tt[2]);
// console.log(tt.length);
// console.log($('.paragraf')[4]);
// console.log($('.paragraf').eq(4).text());
// $('.paragraf').eq(4).text('yfjkkk');
//tt[4]=tt[1];
//$('.paragraf')[2]=$('.paragraf')[4];
//$('.paragraf').eq(3)=$('.paragraf').eq(1);

$('#knopka1').on('click',function(){
    Karusel(down);
    // for(i=0;i<$('.paragraf').length;i++){
    //     let buf1=$('.paragraf').eq(4).text();
   
});
function Karusel(direktion){
    let bufer=[];
    for(i=0;i<$('.paragraf').length;i++){
        bufer[i]=$('.paragraf').eq(i).text();
        console.log('karusel starts')
    }
    switch(direktion){
        case 'up':
            break;




        case 'down':
            for(i=1;i<$('.paragraf').length-1;i++){
                $('.paragraf').eq(i-1).text = bufer[i];
            }
                $('.paragraf').eq($('.paragraf').length-1).text = bufer[0];
                $('.paragraf').eq($('.paragraf').length-2).text = bufer[$('.paragraf').length-1];

            break;
            

    }




}

});