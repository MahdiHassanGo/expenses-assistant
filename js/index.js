// getting all the value 

const income = parseFloat(document.getElementById('income').value);
const software = parseFloat(document.getElementById('software').value);
const courses = parseFloat(document.getElementById('courses').value);
const internet = parseFloat(document.getElementById('internet').value);
const savingPercentage = parseFloat(document.getElementById('savings').value);


// adding event listener for calculate button 
const  CalculateButton= document.getElementById('calculate');
CalculateButton.addEventListener('click' ,function(){
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);
    const savingPercentage = parseFloat(document.getElementById('savings').value);
    
    
const totalExpenses = software+courses+internet;
const balance = income - totalExpenses;

const totalExpensesElement = document.getElementById('total-expenses');
totalExpensesElement.innerText=totalExpenses.toFixed(2);


const balanceElement = document.getElementById('balance');
balanceElement.innerText=balance.toFixed(2);


const results = document.getElementById('results');
results.classList.remove('hidden');




});

// adding event listener for savings button 

const calculateSavingsButton= document.getElementById('calculate-savings')
calculateSavingsButton.addEventListener('click',function()
{const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);
    const savingPercentage = parseFloat(document.getElementById('savings').value);
    
    
    const totalExpenses = software+courses+internet;
    const balance = income - totalExpenses;

    const savingAmount = (savingPercentage * balance) / 100;
    
const remainingBalance  =balance-savingAmount;

    const savingElement = document.getElementById('savings-amount');
    savingElement.innerText  =savingAmount.toFixed(2);


    const remainingElement = document.getElementById('remaining-balance');
    remainingElement.innerText  =remainingBalance.toFixed(2);




})