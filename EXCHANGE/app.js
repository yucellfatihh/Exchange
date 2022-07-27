const amountElement=document.querySelector("#amount");
const firstSelect=document.querySelector("#firstCurrency");
const secondSelect=document.querySelector("#secondCurrency");
const currency = new Currency();

eventListeners();

function eventListeners() {
    amountElement.addEventListener("input",exchangeCurrency);
    firstSelect.onchange=function () {
        const firstUnit=firstSelect.options[firstSelect.selectedIndex].textContent;
        currency.changeFirstCurrency(firstUnit);
        UI.changeFirstUnit(firstUnit);
    };
    secondSelect.onchange=function(){ 
        const secondUnit=secondSelect.options[secondSelect.selectedIndex].textContent;  
        currency.changeSecondCurrency(secondUnit);
        UI.changeSecondUnit(secondUnit);    
    };
}

function exchangeCurrency(e){

    currency.changeAmount(amountElement.value);
    currency.exchange()
    .then(result=>{
        UI.changePlaceHolder(result);
    })
    .catch(err=>console.log(err));
    e.preventDefault();
};