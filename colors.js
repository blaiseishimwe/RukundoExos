//Array of colors
let arrayOfColors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];
// function to set color
function setColor() {
  //select the document object using tagNames
  var kolor = document.getElementsByTagName("span");
  //iterate through the object setting colors
  for (let i = 0; i < 6; i++) {
    kolor[i].style.color = arrayOfColors[i];
  }
}
//call the function to set the color
setColor();
