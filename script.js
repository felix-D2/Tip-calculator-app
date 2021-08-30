const billValue = document.getElementById('billValue');
const btn_10 = document.getElementById('btn_10');
const btn_5 = document.getElementById('btn_5');

const numberOfPeopleValue = document.getElementById('numberOfPeopleValue');
const erreurPeople = document.querySelector("#erreurPeople");

const totalValue = document.getElementById('totalValue');
const tipAmountValue = document.getElementById('tipAmountValue');


const button = document.querySelector("button");
let arrayBtn = [0, 0, 0, 0, 0];

const custumTip = document.querySelector("#tip input");

console.log("custumTip", custumTip);

let bill = 0;
let people = 0;
let total = 0;
let tip = 0;
let tipAmount = 0;



function updateTotal(){
    if(bill > 0 && people >0 ){
        console.log("bill", bill);

        tipAmount = (bill*tip/100)/people;
        tipAmount = Math.round(tipAmount * 100) / 100;// Arroundi
        tipAmountValue.innerText = "$" + tipAmount;

        total = (bill+bill*tip/100)/people;
        total = Math.round(total * 100) / 100;
        totalValue.innerText = "$" + total;
    }
    else{
        totalValue.innerText = "$" + "0.00";
        tipAmountValue.innerText = "$" + "0.00";
    }
    console.log("test");
}

updateTotal();




billValue.addEventListener("input", function(e){
    bill = e.target.value*1; // *1 cast pour convertir en nombre
    updateTotal();
});
numberOfPeopleValue.addEventListener("input", function(e){
    people = e.target.value;
    updateTotal();
});





// Selection d'un bouton
function btnSelecting(btnNumber, tipValue) {
    let currentButton = button;
    for(let i=0; i<5; i++) {
        if (i == btnNumber && arrayBtn[i] != 1) {
            currentButton.style.backgroundColor = "#26C2AD";
            console.log("btn " + btnNumber + " cliqué");
            arrayBtn[i] += 1;
            tip = tipValue;
        }
        else if (i == btnNumber && arrayBtn[i] == 1) {
            currentButton.removeAttribute("style");
            arrayBtn[i] = 0;
            tip = 0;
        }
        else if (btnNumber == -1) { // To reseting function
            currentButton.removeAttribute("style");
            arrayBtn[i] = 0;
            tip = 0;
        }
        else {
            currentButton.removeAttribute("style");
            arrayBtn[i] = 0;
        }
        currentButton = currentButton.nextElementSibling;
    }
    updateTotal();
    console.log("tip", tip);
}

custumTip.addEventListener("input", function(e){
    tip = e.target.value;
    updateTotal();
});


numberOfPeopleValue.addEventListener("input", function(e){
    people = e.target.value;
    if (people == 0) {
        erreurPeople.innerText = "Can't be zero";
        numberOfPeopleValue.classList.add("erreur");
        //numberOfPeopleValue.style.border="solid";
        //numberOfPeopleValue.style.border-color="red";
      } else {
        erreurPeople.innerText = "";
        numberOfPeopleValue.classList.remove("erreur");
    }

    updateTotal();
});





let inputs = document.querySelector("input.numberOfPeople");

console.log("inputs", inputs);

function resetting(){
    console.log("coucou");
    numberOfPeopleValue.setAttribute("value", "10");

    inputs.forEach(input => input.value = '');

    btnSelecting(-1);
}

