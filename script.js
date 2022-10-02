// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



// login validatiom
var username = document.getElementById("username");
var password = document.getElementById("password");
function lvalidate(callback) {
  if (username.value == "admin" && password.value == 12345) {
    // alert("Login successfully");
    // window.location = "home.html"; // Redirecting to other page.
    callback("home.html");
    return true;
  }
  else if (username.value == null || username.value == "") {
    alert("Please enter the username.");
    return false;
  }

  else if (password.value == null || password.value == "") {
    alert("Please enter the password.");
    return false;
  }
  else if (password.value != 12345 && username.value == "admin") {
    alert("Please enter the correct password.");
    return false;
  }
  else if (password.value = 12345 && username.value != "admin") {
    alert("Please enter the correct username.");
    return false;
  }

  else {
    alert("please input correct credentials");

    return false
  }

};
// validate email and password function end

// callback fun start
function redirect(url) {
  window.location.replace(url);
}
// callback end


fetch('https://jsonplaceholder.typicode.com/todos')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log('error: ' + err);
  });
function appendData(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = data[i].title;
    mainContainer.appendChild(li);
  }
}
