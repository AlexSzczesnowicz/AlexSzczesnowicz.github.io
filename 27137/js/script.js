function kwadraty(tablica){
    let sum = 0;
    for(let i=0; i<tablica.length; i++ ){
    sum += Math.pow(tablica[i],2);
    }   
    console.log(sum);
 }
 kwadraty([1, 2, 3, 4, 5, 6]); 