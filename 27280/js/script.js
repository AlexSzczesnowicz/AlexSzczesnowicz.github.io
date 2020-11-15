let form = document.getElementById('form');
let submitButon = document.getElementById('butn');

const submitForm =(event)=>{
    event.preventDefault();
    console.log('click'); 

    //let first = document.getElementsByName('fname');
    let fn = document.querySelector('[name="fname"]').value;
    let ln = document.querySelector('[name="lname"]').value;

    let mail = document.querySelector('[name="email"]').value;
    let zgodaW = document.querySelector('[name="zgodaWsz"]').checked;
    let zgoda1 = document.querySelector('[name="zgodaM1"]').checked;
    let zgoda2 = document.querySelector('[name="zgodaM2"]').checked;

    if(zgodaW){
        autmaticZgoda();
    } else{
        zgoda1 = false;
        zgoda2 = false;
    }
    //console.log(mail);
    validate(fn,ln,mail,zgoda2);



}
function validate(varun1, varun2, varun3, varun4){
    console.log('validate starts')
    if (varun1.length>0 && varun2.length>0 && varun3.toString().icludes('@') && varun4==true){
        console.log("works");
        //console.log(varun1.length);
    }

}


function autmaticZgoda(){
        document.querySelector('[name="zgodaM1"]').checked = true;
        document.querySelector('[name="zgodaM2"]').checked = true;
    

}

submitButon.addEventListener('click',submitForm);