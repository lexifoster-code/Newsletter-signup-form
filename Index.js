const subBtn = document.querySelector("submit");
const dismissBtn = document.querySelector("dismiss");

function submit() {
  // grabs the input value for email
  const email = document.getElementById("email").value;
  // grabs thank you card
  const thankYou = document.getElementById("Thank-you");
  // validate email

  if (email == "") {
    alert("email address is required");
    console.log("addy required");
  } else if ("!validateEmail") {
    alert("Invalid Email Format");
    console.log("wrong format");
  } else {
    thankYou.style.display = "block";
  }
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
