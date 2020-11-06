let listaPracownikow = {
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
};


// for (pracownik of listaPracownikow.pracownicy){
//     array.forEach(element => {
//         this.firstName = this.firstName.toUpperCase();
//         this.lastName = this.lastName.toUpperCase();
//     });
//     // pracownik.firstName = pracownik.firstName.toUpperCase();
//     // pracownik.lastName = pracownik.lastName.toUpperCase();

// }
// console.log(listaPracownikow);
for(const elEm in listaPracownikow) {
    for(let i=0; i< listaPracownikow[elEm].length; i++) {
        for(const drugEl in listaPracownikow[elEm][i]) {

            listaPracownikow[elEm][i][drugEl]=listaPracownikow[elEm][i][drugEl].toUpperCase();
            //console.log(listaPracownikow[elEm][i][drugEl]);
        }
    }
}
for(const wywodElementów in listaPracownikow){
    let strokiNaWywod=[];
    for(let j=0; j<listaPracownikow[wywodElementów].length; j++) {
        strokiNaWywod[j]='';
        for (const strFormWywoda in listaPracownikow[wywodElementów][j]){
            strokiNaWywod[j]+=j+" "+listaPracownikow[wywodElementów][j][strFormWywoda];
        }
        
    }
    console.log(strokiNaWywod); 
}