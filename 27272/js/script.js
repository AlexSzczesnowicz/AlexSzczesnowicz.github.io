let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

function makeSpis(miasta){
    for (i=0; i<miasta.length;i++) {
        let liElement = document.createElement('li');
        liElement.setAttribute('id', "elem"+i);
        let liMiast = document.createTextNode(miasta[i]);
        liElement.appendChild(liMiast);        
        //document.appendChild(liElement);
        console.log(liElement);
    
    }
}
makeSpis(cities);