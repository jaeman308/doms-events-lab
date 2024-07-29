/*-------------------------------- Constants --------------------------------*/
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

/*-------------------------------- Variables --------------------------------*/
let num1 = 0;
let num2 = 0;
let operator = ''

/*----------------------- Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/
calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    // console.log(event.target.innerText);
  
    // Example
    // need to be able to click numbers to add to num 1 

    if (event.target.classList.contains('number')) {
         display.innerText += event.target.textContent;
         num1 = +display.innerText;
         // console.dir(display)
        // Do something with a number
        console.log(typeof num1)

    }  
    // Example
    // select operator 
    if (event.target.innerText === '*' || '/' || '+' || '-'){
    //   display.innerText += `${event.target.innerText}`
        // operator = 
        
    // display.innerText += event.target.textContent;
    } 
    if (event.target.class === 'equals'){
        return `${num1} ${operator} ${num2}`
    }
  });
  
/*----------------------------- Event Listeners -----------------------------*/
