const billValue = document.getElementById('billValue');
const btn_10 = document.getElementById('btn_10');
const btn_5 = document.getElementById('btn_5');

const numberOfPeopleValue = document.getElementById('numberOfPeopleValue');
const erreurPeople = document.querySelector("#erreurPeople");

const totalValue = document.getElementById('totalValue');
const tipAmountValue = document.getElementById('tipAmountValue');


const button = document.querySelector(".buttonTip");
let arrayBtn = [0, 0, 0, 0, 0];

const custumTip = document.querySelector("#customTip");
const resetBtn = document.querySelector("#reset button");


let bill = 0;
let people = 0;
let total = 0;
let tip = 0;
let tipAmount = 0;


console.log("custumTip", custumTip);


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
}



// Input bill et number of people
billValue.addEventListener("input", function(e){
    bill = e.target.value*1; // *1 cast pour convertir en nombre
    updateTotal();
    resetBtn.classList.remove("disabled");
});

numberOfPeopleValue.addEventListener("input", function(e){
    people = e.target.value;
    if (people == 0) {
        erreurPeople.innerText = "Can't be zero";
        numberOfPeopleValue.classList.add("erreur");
      } else {
        erreurPeople.innerText = "";
        numberOfPeopleValue.classList.remove("erreur");
    }
    updateTotal();
    resetBtn.classList.remove("disabled");
});



// Selection d'un bouton tip
function btnSelecting(btnNumber, tipValue) {
    let currentButton = button;
    for(let i=0; i<5; i++) {
        if (i == btnNumber && arrayBtn[i] != 1) {
            currentButton.style.backgroundColor = "#26C2AD";
            custumTip.removeAttribute("style");
            console.log("btn " + btnNumber + " cliqué");
            arrayBtn[i] += 1;
            tip = tipValue;
            custumTip.value="";
        }
        else if (i == btnNumber && arrayBtn[i] == 1) {
            currentButton.removeAttribute("style");
            custumTip.removeAttribute("style");
            arrayBtn[i] = 0;
            tip = 0;
            custumTip.value="";
        }
        else if (btnNumber == -1) { // To reseting function and custom tip
            currentButton.removeAttribute("style");
            arrayBtn[i] = 0;
        }
        else {  
            currentButton.removeAttribute("style");
            custumTip.removeAttribute("style");
            arrayBtn[i] = 0;
            custumTip.value="";
        }
        currentButton = currentButton.nextElementSibling;
    }
    updateTotal();
    resetBtn.classList.remove("disabled");
    console.log("tip", tip);
}



//Input tip personalisé
custumTip.addEventListener("input", function(e){
    custumTip.style.backgroundColor = "#26C2AD";

    tip = e.target.value*1;
    updateTotal();
    console.log("tip", tip);

    btnSelecting(-1);
    resetBtn.classList.remove("disabled");
});



// Resetting fonction
function resetting(){
    btnSelecting(-1);
    bill=0;
    tip = 0;
    people=0;
    updateTotal();

    erreurPeople.innerText = "";
    numberOfPeopleValue.classList.remove("erreur");
    custumTip.removeAttribute("style");

    resetBtn.classList.add("disabled");

    console.log("reset");
}





resetBtn.classList.add("disabled");
updateTotal();