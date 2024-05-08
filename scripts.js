const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

   // Add validation for empty inputs
  if (!dividend || !divider){
    result.innerText = "Division not performed. Both values are required in inputs. Try again"
    return;
  }
  // Add validation for division by zero
  if  (parseInt(divider) === 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again";
    console.error("Division by zero error: ", new Error().stack);
    return; 
  }

  if (isNaN(dividend) || isNaN(divider)){
    console.error("Error: Invalid number provided",new Error().stack)
    document.write( "Something critical went wrong. Please reload the page");
    return;
  }

  result.innerText = Math.floor(dividend / divider);
});

/*const form = document.getElementById("division-form");
const result = document.getElementById("result");

form.addEventListener("submit", (event) => {
 event.preventDefault();
 const dividend = parseFloat(document.getElementById("dividend-input").value);
 const divider = parseFloat(document.getElementById("divider-input").value);

 if (isNaN(dividend) || isNaN(divider)) {
  result.innerText = "Invalid input. Please enter valid numbers.";
  return;
 }
 if (divider === 0) {
  result.innerText = "Division by zero is not allowed.";
  return;
 }
 result.innerText = Math.floor(dividend / divider);
});*/