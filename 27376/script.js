$(document).ready(function(){
    let suma=0;
    $('#count-sum').on('click',function(){
        summator();
        
    });

    function summator(){
        for(i=0;i<$('.salary').length;i++){
            suma+=parseInt($('.salary').eq(i).text(),10);
            
        }
        $('#sum').text(suma);
        //console.log($('#sum'));


    }
    




});
