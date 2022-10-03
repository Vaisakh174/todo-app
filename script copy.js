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
  if (username.value == "admin" && password.value == "12345") {
    // alert("Login successfully");
    // window.location = "home.html"; // Redirecting to other page.
    callback("home.html");
    return true;

  }
  else if (username.value == null || username.value == "") {
    alert("Please enter the username.");
    inputclear()
    return false;
  }

  else if (password.value == null || password.value == "") {
    alert("Please enter the password.");
    inputclear()
    return false;
  }
  else if (password.value != "12345" && username.value == "admin") {
    alert("Please enter the correct password.");
    inputclear()
    return false;
  }
  else if (password.value = "12345" && username.value != "admin") {
    alert("Please enter the correct username.");
    inputclear()
    return false;
  }

  else {
    alert("please input correct credentials");
    inputclear()
    return false
  }


};
// validate email and password function end

// callback fun start
function redirect(url) {
  window.location.replace(url);
}
// callback end

function inputclear() {
  username.value = "";
  password.value = "";
}
// print json
var xmlhttp = new XMLHttpRequest();
var url = "https://jsonplaceholder.typicode.com/todos";

xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    myFunction(myArr);
    console.log(myArr);
  }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

let count = 0;
const listenChange = (element) => {
  count = count + 1;

  element.style.pointerEvents = 'none';
  element.style.userSelect = 'none';
  element.parentNode.parentNode.style.textDecoration = 'line-through'
  element.parentNode.parentNode.style.opacity = '0.5'
  // var new Promise((resolve, reject) => {

  // })
  if (count == 5) {
    document.querySelector('.message').style.display = "flex"

    // count = 0;
    setTimeout(() => {
      document.querySelector('.message').style.display = "none"
    }, 5000)
  }
}
function myFunction(arr) {
  var out = "";
  var i;
  for (i = 0; i < arr.length; i++) {
    todo = document.createElement('div');
    todo.classList.add('todo')
    var checked = false
    check = document.createElement('input')
    check.type = 'checkbox';
    var text = document.createElement('h4')

    if (arr[i].completed) {
      check = "<input type = 'checkbox' checked='true' onchange='listenChange(this)' style='pointer-events:none;'>"
      text.innerHTML = check
      checked = true
      text.style.textDecoration = 'line-through'

    }
    else {
      check = "<input type = 'checkbox' onchange = 'listenChange(this)'>"
      text.innerHTML = check
      checked = false
    }



    todo.append(text)

    text = document.createElement('h3')
    text.innerText = arr[i].title

    todo.append(text)

    text2 = document.createElement('h5');
    text2.innerText = arr[i].id
    todo.append(text2)
    if (checked) {
      todo.style.textDecoration = 'line-through';
      todo.style.opacity = 0.5;
    }
    document.querySelector('.todos').append(todo)
  }

}
