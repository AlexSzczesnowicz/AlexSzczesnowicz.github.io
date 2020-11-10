
//var flagComplete;
function bubbles(arayToSort){
    let dlugosc = arayToSort.length-1;
   // let arayWynnik =[];
    let buf1;
    //let buf2;
    console.log("bubles start");
    console.log("dlugisc "+dlugosc);

    for(let i=0;i<dlugosc;i++){
        //flagComplete=0;
        console.log("cikl "+i);

        for(let j=0;j<dlugosc-i;j++){
            if(arayToSort[j]>arayToSort[j+1]){
                buf1 = arayToSort[j+1];   // buf1 oraz drugi nie są zmianny a linki do arayToSort[x]
                                            // buf2 = arayToSort[j+1]; // z tego powodu nie wiem w jaki sposob odczytac i zrobic to statycznym na czas poruwnania
                                        // nie jestem pewny ale byc moge sprobowalem by nagrać zmianny na HDD ale tem sposob jest brzydki
                                        
                arayToSort[j+1] = arayToSort[j] ; 
                arayToSort[j] = buf1;
                // buf1 and buf2 are the links to arayToSort[x] and I do not know how to make it's value static
              // =buf2;     // this logic of code will works in another programic languages

            
            } 
        }
        // if(flagComplete == 0){
        //     console.log("flag up");
        //     break;
        //     } 
    }
    console.log("return bubles complete " + arayToSort);
}


console.log(bubbles([12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]));

