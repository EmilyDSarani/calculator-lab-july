
import { add } from '../utils.js';
import { subtract } from '../utils.js';
import { multiply } from '../utils.js';
import { divide } from '../utils.js';

const addInputEl1 = document.getElementById('add-input-1');
const addInputEl2 = document.getElementById('add-input-2');
const addButtonEl = document.getElementById('add-button');
const addResultEl = document.getElementById('add-result');

addButtonEl.addEventListenter('click', ()=>{
    const firstValue = addInputEl1.value;
    const secondValue = addInputEl2.value;
    const sum = add(firstValue, secondValue);
    addResultEl.textContent.Content = sum;

    
});

const subtractInputEl1 = document.getElementById('subtract-input-1');
const subtractInputEl2 = document.getElementById('subtract-input-2');
const subtractButtonEl = document.getElementById('subtract-button');
const subtractResultEl = document.getElementById('subtract-result');


subtractButtonEl.addEventListenter('click', ()=>{
    const firstValue = subtractInputEl1.value;
    const awesomesauce2 = subtractInputEl2.value;
    const sum = subtract(firstValue, awesomesauce2);
    subtractResultEl.textContent.Content = sum;
});


const multiplyInputEl1 = document.getElementById('multiply-input-1');
const multiplyInputEl2 = document.getElementById('multiply-input-2');
const multiplyButtonEl = document.getElementById('multiply-button');
const multiplyResultEl = document.getElementById('multiply-result');


multiplyButtonEl.addEventListenter('click', ()=>{
    const firstValue = multiplyInputEl1.value;
    const secondValue = multiplyInputEl2.value;
    const sum = subtract(firstValue, secondValue);
    multiplyResultEl.textContent.Content = sum;
});



const divideInputEl1 = document.getElementById('divide-input-1');
const divideInputEl2 = document.getElementById('dvide-input-2');
const divideButtonEl = document.getElementById('divide-button');
const divideResultEl = document.getElementById('divide-result');



divideButtonEl.addEventListenter('click', ()=>{
    const firstValue = divideInputEl1.value;
    const secondValue = divideInputEl2.value;
    const sum = subtract(firstValue, secondValue);
    divideResultEl.textContent.Content = sum;

});