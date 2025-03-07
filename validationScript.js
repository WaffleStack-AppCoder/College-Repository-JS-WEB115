    // JavaScript code for form validation

const inputForm = document.getElementById("inputField");
const inputButton = document.getElementById("button");

console.log(inputForm.value)


	// Prevent form from submitting
 addEventListener("submit", function(event){
    const alphanumericRegex = /^[0-9]*$/;
    const onlyTextRegex = /^[a-zA]*$/;

    if (inputForm.value == " "){
        alert("ERROR MESSAGE: Wrong Input... Try Again Type in Text. Spaces are not Allowed...")
    } else if (inputForm.value == ""){
      alert("ERROR MESSAGE: The input is very empty! Try again!")
    } else if (inputForm.value != alphanumericRegex){
      alert("No Numbers or Symbols Please...")
    } else if (inputForm.value == onlyTextRegex){ //Why Won't this work..
      alert("Good job! Form Submited");
    } else{
      alert("ERROR MESSAGE: The input field is empty and or incorrect.");
    }
 });

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message