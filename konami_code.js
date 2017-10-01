const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  const input = document.querySelector('input')

/*
  input.addEventListener('keydown', function(e) {
    if (e.which === 71) {
      return e.preventDefault()
    }
  })
  */

  // Keep track of index outside of the event handler.
let index = 0;

input.addEventListener('keydown', function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);

  if (key === code[index]) {
    index++;

    if (index === code.length) {
      alert("Correct code entered.");

      index = 0;
    }
  } else {
    index = 0;
    alert("Wrong code entered.");
  }
})
}
