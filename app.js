//1) Problem Name: JSDOM
//If email and password fields are empty ask use to fill up the fields
//If both are filled, show an alert saying ‘Logged In Successfully’.

function validateForm() 
{
    var username = document.getElementById("username").value;
    var password = document.document.getElementById("password").value;
    if (username == null && password == null) 
    {
      alert("Username & Password must be filled out");
    }
    else
    {
        alert("Logged Successfully");
    }
}

// 1) Problem Name: JS DOM

document.getElementById("Listner").addEventListener("click",abc)

function abc()
{ 
    document.getElementById("Listner").style.background="red";
}


// Problem 3 
var element2 = document.getElementById("problem3");
console.log(element2);

var element = document.getElementById("problem3").getAttribute("onClick");
console.log(element);

var element2 = document.getElementById("problem3").getAttribute("style");
console.log(element2);

var chnge_color = document.getElementById("problem3");
chnge_color.style.color="yellow";
console.log(chnge_color);

//problem 1

var first_div = document.getElementById("div-class").firstElementChild;
first_div.attributes[0].value="changed-class";
console.log(first_div);
document.getElementById("div-class").style.color="red";
document.getElementById("div-class").style.border="5px solid blue";

//2) Problem Name: QuerySelector

var q_first_div = document.querySelector("#div-class-q").firstElementChild;
q_first_div.attributes[0].value="q-changed-class";
console.log(q_first_div);
document.querySelector(".div-class-q").style.color="red";
document.querySelector(".div-class-q").style.border="5px solid blue";
