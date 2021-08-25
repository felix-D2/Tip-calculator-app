const billValue = document.getElementById('billValue');
const btn_10 = document.getElementById('btn_10');
const btn_5 = document.getElementById('btn_5');

const totalValue = document.getElementById('totalValue');
const numberOfPeopleValue = document.getElementById('numberOfPeopleValue');

const buttonList = document.getElementById('btnList');
const button = buttonList.children;


let bill = 0;
let people = 0;
let total = 0;



function updateTotal(){
    if(bill > 0 && people >0){
        totalValue.innerText = bill/people;
    }
    else{
        totalValue.innerText = "0";
    }
    console.log("test");

}



billValue.addEventListener("input", function(e){
    bill = e.target.value;
    updateTotal();
});





numberOfPeopleValue.addEventListener("input", function(e){
    people = e.target.value;
    updateTotal();
});





// Selction d'un bouton
function btnSelect(btnNumber) {
    console.log("C'est cliqué !")
    for(let i=0; i<5; i++) {
        if (i == btnNumber) {
            button.item(i).setAttribute("selected", true);
        } 
        else {
            button.item(i).removeAttribute("disabled");
        }
    }
}



for (let i=0; i<5; i++) { 
    console.log("Tu clique tu clique");

    button.item(i).addEventListener("click", function(e){
        btnSelect(i);
    });
}


