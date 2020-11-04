function fibonaci(element){
    let k5 = Math.sqrt(5);

    let wynnik = Math.round((Math.pow((1+k5)/2, element) - Math.pow((1-k5)/2, element))/k5);
    //return wynnik;
    console.log(wynnik);
}

fibonaci(7);