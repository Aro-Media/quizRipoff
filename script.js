
let input = document.querySelector(".input");
let clearButton = document.querySelector(".clear");
let equalsButton = document.querySelector(".equals");
let result = document.querySelector(".result");



const calculateSpaghetti = Age => {


  let sTotal = Age * 3 * 365;

    let plural = "x";
    if (Age === 1) {
        plural = "year!";
    } else {
        plural = "years!";
    }

result.innerHTML = "You could eat " + sTotal + " bowls of spaghetti in " + Age + " " + plural;
  
  
}



equalsButton.addEventListener("click", () => {

  let userInput = Number(input.value);
  
  

  
calculateSpaghetti(userInput);

})



// DO NOT TOUCH THIS CODE
clearButton.onclick = function() {
  input.value = "";
  result.innerHTML = "";

}