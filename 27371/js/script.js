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

$('#upButton').on('click',function(){
    karusel('up');
    // for(i=0;i<$('.paragraf').length;i++){
    //     let buf1=$('.paragraf').eq(4).text();
   
});
$('#downButton').on('click',function(){
    karusel('down');
    // for(i=0;i<$('.paragraf').length;i++){
    //     let buf1=$('.paragraf').eq(4).text();
   
});

function karusel(direktion){
    let bufer=[];
    parStringLen = $('.paragraf').length;

    for(i=0;i<$('.paragraf').length;i++){
        bufer[i]=$('.paragraf').eq(i).text();
       
        //console.log('karusel starts')
    }
    switch(direktion){
        case 'down':
            for(i=0;i<parStringLen-1;i++){
                $('.paragraf').eq(i+1).text(bufer[i]);
                //console.log(bufer[i]);
            }
            $('.paragraf').eq(0).text(bufer[parStringLen-1]);
            $('.paragraf').eq(1).text(bufer[0]);

            break;
        case 'up':
            //console.log('down seen');
            for(i=1;i<parStringLen-1;i++){
                $('.paragraf').eq(i-1).text(bufer[i]);
            }
                $('.paragraf').eq(parStringLen-1).text(bufer[0]);
                $('.paragraf').eq(parStringLen-2).text(bufer[parStringLen-1]);

            break;
            

    }




}

});