let form = document.getElementById('form');

const submitForm =(event)=>{
    event.preventDefault();
    console.log('click');

    //let first = document.getElementsByName('fname');
    let fn = document.querySelector('[name="fname"]').value;
    let ln = document.querySelector('[name="lname"]').value;
    console.log(fn+' '+ln);

}

form.addEventListener('click',submitForm);