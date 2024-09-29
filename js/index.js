// getting all the value 
let count =0;

const income = parseFloat(document.getElementById('income').value);
const software = parseFloat(document.getElementById('software').value);
const courses = parseFloat(document.getElementById('courses').value);
const internet = parseFloat(document.getElementById('internet').value);
const savingPercentage = parseFloat(document.getElementById('savings').value);


// adding event listener for calculate button 
const  CalculateButton= document.getElementById('calculate');
CalculateButton.addEventListener('click' ,function(){
     count +=1;
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

//  history 
 
const historyItem = document.createElement('div');
historyItem.className ='bg-white p-3 rounded-md border-l-2 border-indigo-500';

historyItem.innerHTML = `
      <p>Serial: ${count}</p>
      <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
      <p class="text-xs text-gray-500">Income : ${income.toFixed(2)}</p>
      <p class="text-xs text-gray-500">Income : ${totalExpenses.toFixed(2)}</p>
      <p class="text-xs text-gray-500">Income : ${balance.toFixed(2)}</p>
`
const historyContainer = document.getElementById('history-list');
historyContainer.insertBefore(historyItem,historyContainer.firstChild)



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


// history tab function 

const historyTab= document.getElementById('history-tab');
const assistantTab= document.getElementById('assistant-tab');
historyTab.addEventListener('click',function()
{
    historyTab.classList.add('text-white','bg-gradient-to-r','from-blue-500' ,'to-purple-400');

    historyTab.classList.remove('text-gray-600');
    


    assistantTab.classList.remove('text-white','bg-gradient-to-r','from-blue-500' ,'to-purple-400');

    assistantTab.classList.add('text-gray-600');
   
    document.getElementById('expense-form').classList.add('hidden');

    document.getElementById('history-section').classList.remove('hidden')
})


assistantTab.addEventListener('click',function()
{
    historyTab.classList.remove('text-white','bg-gradient-to-r','from-blue-500' ,'to-purple-400');

    historyTab.classList.add('text-gray-600');
    


    assistantTab.classList.add('text-white','bg-gradient-to-r','from-blue-500' ,'to-purple-400');

    assistantTab.classList.remove('text-gray-600');
   
    document.getElementById('expense-form').classList.remove('hidden');

    document.getElementById('history-section').classList.add('hidden')
})