let colors = ['#3C7515', '#6CA639', '#F5C36D', '#AC8EFF', '#F45A55'];

const changeColor = () => {
  let target = event.target;
  let colourNumber = target.colourNumber;
  console.log(colourNumber);
  switch (colourNumber) {
    case 0:
      target.style.backgroundColor = colors[0];
      break;
    case 1:
      target.style.backgroundColor = colors[1];
      break;
    case 2:
      target.style.backgroundColor = colors[2];
      break;
    case 3:
      target.style.backgroundColor = colors[3];
      break;
    case 4:
      target.style.backgroundColor = colors[4];
      break;
    default:
      console.log('error in switchcase')
  }
  if (target.colourNumber < 4) {
    target.colourNumber++;
  } else {
    target.colourNumber = 0;
  }
;}

const addEvents = () => {
  document.querySelectorAll('.box').forEach(function(item){
    item.addEventListener('mouseover', changeColor);
    item.colourNumber = 0;
  })
}

addEvents()
