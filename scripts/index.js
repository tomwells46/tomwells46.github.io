document.getElementById('trigger1').addEventListener("mouseover", trigFunc1);
document.getElementById('trigger2').addEventListener("mouseover", trigFunc2);
document.getElementById('trigger3').addEventListener("mouseover", trigFunc3);

function trigFunc1() {
  let trigger = document.getElementById('trigger1');
  console.log("trigger works")
  trigger.className = "zoomOut animated";
}

function trigFunc2() {
  let trigger = document.getElementById('trigger2');
  console.log("trigger works")
  trigger.className = "zoomOut animated";
}

function trigFunc3() {
  let trigger = document.getElementById('trigger3');
  console.log("trigger works")
  trigger.className = "zoomOut animated";
}
