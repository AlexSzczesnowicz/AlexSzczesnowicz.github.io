
var flagWyp;
function bubbles(arayToSort){
    let dlugosc = arayToSort.length-1;
    let arayEtalon = arayToSort;
    console.log("Etalon"+arayEtalon);
    console.log("bubles start");
    console.log("dlugisc "+dlugosc);

    for(i=0;i<dlugosc;i++){
        flagWyp=0;

        console.log("cikl "+i);

        for(j=0;j<dlugosc-i;j++){
            arayToSort[j] = compare(arayEtalon[j],arayEtalon[j+1]);

            console.log("ineration "+j);
        }
        if(flagWyp == 0){
            console.log("flag up");
            break;

        } 
    }
    console.log("Etalon"+arayEtalon);
    console.log("return bubles complete");
    return arayToSort;
    
   
}

function compare(pervszy, drugi){
    console.log("compare start");
    if (pervszy>drugi){
        return drugi;
        flagWyp = 1;

    } else 
    return pervszy;
}

// Array.prototype.swap = function (x,y) {
//     var b = this[x];
//     this[x] = this[y];
//     this[y] = b;
//     return this;
//   }





console.log(bubbles([12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]));

