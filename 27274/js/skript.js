let i=0;
let knopka = document.createElement("button"/*, value="add an element"*/);
knopka.style="height:40px;width:200px";
//knopka.value="add an element";
knopka.innerHTML = "add an element";
document.getElementById("kontejner_knopki").appendChild(knopka);

function reakcja(){
    console.log("clicked "+i);
    i++;
    document.getElementById('kontejner_knopki').appendChild(document.createElement("li"))/*.innerHTML("element "+i)*/;
}
knopka.addEventListener("click",function() {
    reakcja()}
    );


