  /* 
Program name: index-3.html this is scripts-3.js
Author: Gretchen R Prado Gonzalez
Date created: February 5
Date last edited: March 9
Version: 3.0
Description: JavaScript for patient registration form.*/


/*from w3schools*/
const d = new Date();
document.getElementById("datetoday").innerHTML = d.toDateString();

var pwdWrite = document.getElementById("pwd");
var lower = document.getElementById("lower");
var upper = document.getElementById("upper");
var number = document.getElementById("number");
var length = document.getElementById("length");

const slider = document.getElementById("vol");
const output = document.getElementById("rangeValue");

slider.addEventListener("input", function()
{
    output.textContent = slider.value;
});

pwdWrite.onfocus = function() 
{
    document.getElementById("error").style.display = "block";
}
pwdWrite.onblur = function()
{
    document.getElementById("error").style.display = "none";
}
pwdWrite.onload = function()
{
    document.getElementById("error").style.display = "none";
}

pwdWrite.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(pwdWrite.value.match(lowerCaseLetters)) {  
      lower.classList.remove("invalid");
      lower.classList.add("valid");
    } 
    else
    {
      lower.classList.remove("valid");
      lower.classList.add("invalid");
    }
    
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(pwdWrite.value.match(upperCaseLetters)) 
    {  
      upper.classList.remove("invalid");
      upper.classList.add("valid");
    } 
    else
    {
      upper.classList.remove("valid");
      upper.classList.add("invalid");
    }
  
    // Validate numbers
    var numbers = /[0-9]/g;
    if(pwdWrite.value.match(numbers)) 
    {  
      number.classList.remove("invalid");
      number.classList.add("valid");
    } 
    else 
    {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
    
    // Validate length
    if(pwdWrite.value.length >= 8) 
    {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } 
    else 
    {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  }
  const form = document.getElementById('myForm'); 
  
  /*form.addEventListener('submit', function(event) {
    event.preventDefault(); 

  });*/
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  
  const reviewArea = document.getElementById('reviewArea');
  reviewArea.innerHTML = ''; // Clear previous content
  for (const key in data) {
      reviewArea.innerHTML += `<p><b>${key}:</b> ${data[key]}</p>`;
  }

  function validatePassword() {
     const password = document.getElementById("pwd").value;
     const confirmPassword = document.getElementById("psw-repeat").value
     const userId = document.getElementById("username").value;
  
    if (password === confirmPassword) {
      document.getElementById("message").innerHTML = "Passwords match!";
     //document.getElementById("error").style.color = "green";
    } 
    else
    {
      document.getElementById("message").innerHTML = "Passwords do not match";
      //document.getElementById("message").style.color = "red";
    }
    if (password === userId) {
        document.getElementById("message").innerHTML = "Password cannot be User ID";
    }
    }

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Stop submission initially
  
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
  
      reviewArea.innerHTML = '<h2>Review Your Details</h2>';
      for (const key in data) {
          reviewArea.innerHTML += `<p><b>${key}:</b> ${data[key]}</p>`;
      }
  
      // Check password confirmation before submitting
      const password = document.getElementById("pwd").value;
      const confirmPassword = document.getElementById("psw-repeat").value;
      
      if (password !== confirmPassword) {
          document.getElementById("message").innerHTML = "Passwords do not match!";
          document.getElementById("message").style.color = "red";
          return; 
      }
  
      form.submit();
  });
    //document.getElementById("confirmSubmit").addEventListener("click", function() {
     // form.submit();
     document.getElementById("confirmSubmit").disabled = false;

  //});
  


//review form
  function reviewForm() {
    let formData = new FormData(document.getElementById("myForm"));
    let reviewHTML = "<h2>Review Your Information</h2><ul>";

    for (let [key, value] of formData.entries()) {
        reviewHTML += `<li><strong>${key.replace(/_/g, " ")}:</strong> ${value}</li>`;
    }

    reviewHTML += "</ul><button onclick='editForm()'>Edit</button>";
    document.getElementById("reviewArea").innerHTML = reviewHTML;
}

// Function to allow editing the form again
function editForm() {
    document.getElementById("reviewArea").innerHTML = "";
}

//new one
function validateEmail() {
  let emailInput = document.getElementById("email");
  let errorSpan = document.getElementById("emailError");
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailPattern.test(emailInput.value) && emailInput.value.length > 0) {
      errorSpan.textContent = "Invalid email format (e.g., name@example.com)";
  } else {
      errorSpan.textContent = ""; // Clear error message if input is valid
  }
}