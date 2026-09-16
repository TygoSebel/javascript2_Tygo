let submit = document.getElementById('submit')
let result = document.getElementById('result')
let bedrag = document.getElementById('bedrag')  
let korting = document.getElementById('korting')
let amount = document.getElementById('amount')
let discount = document.getElementById('discount')
 
console.log(amount, discount)
 

submit.addEventListener('click', function(e){
    e.preventDefault();
    console.log(amount.value, discount.value)
 
  result.textContent = ""+ optellen(amount.value, discount.value);
})
 
 
function optellen(a, b) {
 
  return 100 - (100 * b / 100);
}
 
 
 