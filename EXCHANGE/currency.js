class Currency{
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency=firstCurrency;
        this.secondCurrency=secondCurrency;
        this.url="https://api.exchangerate.host/latest?base=";
        this.amount=null;
       

    }
    exchange(){
        return new Promise((resolve, reject) => {
            fetch(this.url+this.firstCurrency)
            .then(response => response.text())
            .then(result => {
               const data=JSON.parse(result);
               const parity=data.rates[this.secondCurrency];
               const amount2=Number(this.amount);
               let total=parity*amount2;
               resolve(total);
            })
            .catch(error => reject('error', error));
        })
     

    }

    changeAmount(amount){
        this.amount=amount;
    };
    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency=newFirstCurrency;
    }
    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency=newSecondCurrency;
    }
};