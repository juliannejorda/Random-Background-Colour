button.addEventListener("click", (button) => {
  // Need to selector BOTH the button and body
  //needs to get the number colourList.length-1 to get position
  //random number between those numbers
  //colourList.length-1 -> so can get the the max number of items in the array since
  //it starts at zero!
  //Math.floor would round down so it will go to 0 if needed
  var btn = document.getElementById(button);
  var body = document.querySelector(body);
  var colourList = [
    "red",
    "blue",
    "yellow",
    "green",
    "purple",
    "orange",
    "pink",
  ];
  var position = Math.floor(Math.random() * colourList.length);
  //with that position number, get that item from the array
  var newColour = colourList[position];
  document.body.style.background = newColour;
});
