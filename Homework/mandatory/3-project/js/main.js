function onButtonPress(buttonId, newClassToAssign) {
  const button = document.querySelector(buttonId)
  button.addEventListener("click", function () {
    const jumbatronDiv = document.querySelector(".jumbotron")
    jumbatronDiv.className = 'jumbotron ' + newClassToAssign
  })
}
onButtonPress('#bluebtn', 'blue');
onButtonPress('#orangeBtn', 'orange');
onButtonPress('#greenBtn', 'green');



const submitButton = document.querySelector('form button');
submitButton.addEventListener('click', function() {
  const allInputs = document.querySelectorAll('form input, textarea')
  let allInputsValid = true;
   
    allInputs.forEach(element => {
        if ((element.value === "") || element.type === 'email' && !element.value.includes('@')) {
            element.style.backgroundColor = 'FD7C7C';
            allInputsValid = false;
        }
        
    });
    if (allInputsValid) {
         alert('Thank you');
         allInputs.forEach(element => {
        element.value = ""
    })
    }
} )
