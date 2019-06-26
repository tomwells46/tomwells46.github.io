document.getElementById('sea').addEventListener("click", myFunction);

function myFunction() {
  alert ("Hello World!");
}

document.getElementById('wildfire').addEventListener("mouseover", myFunction2);

function myFunction2() {
  let wildfire = document.getElementById('wildfire');
  wildfire.style.opacity = '0.1';
}
