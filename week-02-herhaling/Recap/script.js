let input = document.getElementById('Input')
let button = document.getElementById('Button')
let output = document.getElementById('output')

button.addEventListener('click', function() {
 console.log('Button clicked');
 button.style.backgroundColor = 'red'
 output.textContent = 'Hallo ' + input.value + '!'
 output.style.color = 'red' 
})

let input2 = document.getElementById('Input2')
let input3 = document.getElementById('Input3')
let button2 = document.getElementById('Button2')
let output2 = document.getElementById('output2')

button2.addEventListener('click', function() {
   input2.value * input3.value
   output2.textContent = 'Het resultaat is: ' + (input2.value * input3.value)
   output2.style.color = 'blue'

})