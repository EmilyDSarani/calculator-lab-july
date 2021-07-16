HTML Setup
Two inputs
A button
Why? To tell the code "When" to do the calculation
How? buttonEl.addEventListener('click', () => {})
A span
Why? To inject the result and show it to the user
How? resultEl.textContent = result
Add ids to all the elements we need to grab in javascript
Events -- where all the magic happens
onClick
result of the calculation should appear in the span
grab the value of the first input
grab the value of the second input
feed these values into the add function
How? const result = add(val1, val2)
Inject that result into the correct span

so essentially, combine the different labs from throughout the week..
