let inputEl = document.getElementById('input');
const convertBtn = document.getElementById('btn')


let unitMtr = document.getElementById('unit-value-mtr');
let unitLtr = document.getElementById('unit-value-ltr');
let unitKilo = document.getElementById('unit-value-kilo');

convertBtn.addEventListener('click', function(){    
    let inputValue = inputEl.value;
    console.log(inputValue);
    if(inputValue <= 0 || inputValue === ''){
        return alert('Please Enter Valid Input!');
    }
    unitMtr.innerText = `${inputValue} meters = ${(inputValue * 3.28).toFixed(3)} feet | ${inputValue} feet = ${(inputValue * 0.304).toFixed(3)} meters`;
    unitLtr.innerText = `${inputValue} liters = ${(inputValue * 0.264).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue * 3.785).toFixed(3)} litres`;
    unitKilo.innerText = `${inputValue} kilos = ${(inputValue * 2.204).toFixed(3)} pounds | ${inputValue} pound = ${(inputValue * 0.453).toFixed(3)} kilos`;
    
})


