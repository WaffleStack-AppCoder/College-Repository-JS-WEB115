//Variables

const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputGoal = document.getElementById("goal");
const inputZero = document.getElementById("breakfast");
const inputOne = document.getElementById("Snack-one");
const inputTwo = document.getElementById("lunch");
const inputThree = document.getElementById("Snack-two");
const inputFour = document.getElementById("dinner");
const submitButton= document.getElementById("submit");
const infoPara = document.getElementById("info-meal");

//checks if everything is required.
function validateForm() {
    const allInput = document.getElementsByTagName("input");
    if (emailField.value === "") {
      alert("Email is required");
      return false;
    }
    return true;
  }

  function clear(){
   /* const almostAllInput = document.getElementsByTagName("input");

    almostAllInput.value = " "; */

    var inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      input.value = '';
    });

  }

  function addingMeals(){
    inputZero.value + inputOne.value + inputTwo.value + inputThree.value + inputFour.value;
    let stringPara =  inputZero.value + inputOne.value + inputTwo.value + inputThree.value + inputFour.value;
    document.write(inputZero.value + inputOne.value + inputTwo.value + inputThree.value + inputFour.value);

    console.log(inputZero.value + inputOne.value + inputTwo.value + inputThree.value + inputFour.value);

    infoPara.innerHTML =  stringPara;
  }

  addingMeals()
