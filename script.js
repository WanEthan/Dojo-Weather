

function alertdisplay() {
    alert("Loading weather report...")
}



function removecookies() {
    var cookiespart = document.querySelector(".cookies");
    cookiespart.remove();

}

var todayhigh = document.querySelector("#todayhigh")
var todaylow = document.querySelector("#todaylow")

var tomhigh = document.querySelector("#tomhigh")
var tomlow = document.querySelector("#tomlow")

var frihigh = document.querySelector("#frihigh")
var frilow = document.querySelector("#frilow")

var sathigh = document.querySelector("#sathigh")
var satlow = document.querySelector("#satlow")


function changedegree(element) {
    console.log(element.value);
    if (element.value == 'Fahrenheit') {
        todayhigh.innerText = "75°";
        todaylow.innerText = "65°";
        tomhigh.innerText = "80°";
        tomlow.innerText = "66°";
        frihigh.innerText = "69°";
        frilow.innerText = "61°";
        sathigh.innerText = "78°";
        satlow.innerText = "70°";
    }
    else {
        todayhigh.innerText = "24°";
        todaylow.innerText = "18°";
        tomhigh.innerText = "27°";
        tomlow.innerText = "19°";
        frihigh.innerText = "21°";
        frilow.innerText = "16°";
        sathigh.innerText = "26°";
        satlow.innerText = "21°";

    }
}