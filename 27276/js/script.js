let i = false;
const SetBackGround =()=>{
console.log('click');
// let p1 = document.getElementsByClassName('first');
// let p2 = document.getElementsByClassName('second');
//let p1 = document.querySelector('.first');
//p1.style.backgroundColor = 'red';
    if (i){
        document.querySelector('.first').style.backgroundColor = 'red';
        document.querySelector('.second').style.backgroundColor = 'white';
    } else{
        document.querySelector('.second').style.backgroundColor = 'yellow';
        document.querySelector('.first').style.backgroundColor = 'white';
    }
    i=!i;
//console.log(p1);
}

let btnBkg = document.getElementById('set-background');

btnBkg.addEventListener('click',SetBackGround);