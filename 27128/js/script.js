
function napis(napis){
    let iloscSlow = 0;
    let slowa=[];
    //pobieram
    for (let i in napis){
        if(napis[i]==" "){
            iloscSlow++;
            i--; //spacja off
        }
        slowa[iloscSlow] += napis[i];
        //console.log(napis[i]);
        //console.log(slowa[iloscSlow]);
    }
    //wynnik
    for(let i = iloscSlow; i>=0; i--){
        console.log(slowa[i].toString()); //działa ale przed slowom mam "unifined"
        //console.log((slowa[i].toString())-"undefined"); nie dziala - NaN
        //console.log((slowa[i].toString()).exec("undefined")); nie dziła - exec not a function
         // console.log((slowa[i]).exec("undefined")); dlaczego nie działa - nie wiem
    }
    
}
//urohomenie 
napis("hello world");

