let owner =  document.getElementById('owner');
let welcomeMessage = document.getElementById('welcomeMessage');
let balance = document.getElementById('balance');
let operation = document.getElementById('op');
let balanceTag = document.getElementById('tag');

// Date Format 

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
if(month < 10){
    month = '0'+ month;
}else{
    month;
};

const greeting = setTimeout(() => {
    owner.style.color = 'green';
    owner.style.transition = 'all 3s';
    welcomeMessage.style.color = 'green';
    welcomeMessage.style.transition = 'all 3s';
}, 2000);


class BankAccount{
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount){
        if(amount = parseInt(prompt("Saisissez votre montant :",))){
            let updatedBalance = this.balance += amount;
            balance.innerHTML = updatedBalance + ' €';
            operation.insertAdjacentHTML('afterbegin', '<span id="deposit">('+ month + '/' + year + ') Vous avez ajouté la somme de ' + amount + '€ sur votre compte. Nouveau solde ' + updatedBalance + '€.</span><br>');
        }
    }

    withdraw(amount){
        if((amount = parseInt(prompt("Saisissez le montant à rétirer:"))) && this.balance > amount){
            let updatedBalance = this.balance -= amount;
            balance.innerHTML = updatedBalance + ' €';
            operation.insertAdjacentHTML('afterbegin', '<span id="withdraw">(' + month + '/' + year + ') Vous avez retiré la somme de ' + amount + '€ sur votre compte. Nouveau solde ' + updatedBalance + '€.</span><br>');
        }else if(this.balance < amount){
            alert('Retrait impossible. Fonds insufisants');
        }
    }

    showBalance(){
        balance.insertAdjacentHTML('afterbegin', this.balance);
    }
} 




let ninas = new BankAccount('Nina', 200);

ninas.showBalance();




