/*-------------------------------- Constants --------------------------------*/
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

/*-------------------------------- Variables --------------------------------*/
let num1 = 0;
let num2 = 0;
let operator = ''
let result = 0;

/*----------------------- Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/
calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    // console.log(event.target.innerText);
  
    // Example
    // need to be able to click numbers to add to num 1 


    if (event.target.classList.contains('number')) { 
        // if no operator have num1 assigned to the value selected. 
        //when the operator selected have num 2 assigned the value selected.
console.log(operator === '')
        if (operator === ''){
            display.innerText += event.target.textContent;
            num1 = +display.innerText;

        } else {
            display.innerText += event.target.textContent;
            num2 = +display.innerText

        }

    }  
    // Example
    // select operator 
    // clear the number from the display
    //variable needs to contain the operator 
    if (event.target.classList.contains ('operator')){
        display.innerText = '';
        operator = event.target.textContent;
        console.log({num1, num2, operator, result})
        if (operator === 'C') {
            operator = '';
            num1 = 0;
            num2 = 0;
            result = 0;
            
        }   
        
    
    
    // console.log(operator) 

    // display.innerText += event.target.textContent;
    } 
    if (event.target.classList.contains('equals')){
    // end result from num 1 and num2 base on the assigned operator 
    if(operator === '+'){
        result = num1 + num2 
        display.innerText = result;
        console.log(result)
    }
    
    }
  });
  
/*----------------------------- Event Listeners -----------------------------*/
