var input = document.getElementById("typeNumber");
var randomNumber = Math.round(Math.random() * 10 + 1);
var count = 0;

function notify() {
  if (count < 3) {
    if (parseInt(input.value) < 1 || parseInt(input.value) > 10) {
      alert("Please enter number 1 to 10");
    } else {
      count++;
      alert(input.value + " and " + randomNumber);

      if (parseInt(input.value) == parseInt(randomNumber)) {
        alert("Winner");
      } else if (input.value < randomNumber) {
        alert("Enter value greater than " + input.value);
      } else {
        alert("Enter value less than " + input.value);
      }
    }
  } else {
    alert("Your time is end...");
  }

  document.getElementById("typeNumber").value = null;
}
