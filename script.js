// sets up each boxes colors
var colorBox = [
  {
    color: "red"
  },
  {
    color: "green"
  },
  {
    color: "blue"
  },
  
  {
    color: "purple"
  },
  
  {
    color: "yellow"
  },
  
  {
    color: "orange"
  },
  {
    color: "pink"
  },
]

var elements = [];

// all fun stuff occurs
function blocks(data) {
  var that = this;
  
  // setting up initial div
  this.starting = 0;
  this.colors = data;
  this.ele = document.createElement("div");
  
  // setting up the style of the boxes
  this.ele.style.backgroundColor = this.colors;
  this.ele.style.height = "100px";
  this.ele.style.width = "200px";
  this.ele.style.borderRadius = "10px";
  
  //creates div inside initial div, creates centers and styles the text
  this.startingEle = document.createElement("div");
  this.startingEle.classList.add("block")
  this.startingEle.style.textAlign = "center";
  this.startingEle.style.padding = "35px";
  this.startingEle.style.fontSize = "18px";
  if (this.colors === "yellow" || this.colors === "pink" || this.colors === "orange") {
    this.startingEle.style.color = "black";
  } else {
    this.startingEle.style.color = "white";
  }
  
  // adds the text and boxes to the document
  this.startingEle.innerHTML = this.starting;
  this.ele.appendChild(this.startingEle);
  
  // listens if the boxes are clicked, then runs the 
  // function to add 1 to the numbers
  this.ele.addEventListener("click", function(){
    that.addingNumbers();
  });
  
  document.body.appendChild(this.ele);
}

// taks whatever number the box clicked was at
// and returns it with +1
blocks.prototype.addingNumbers = function(){
  this.starting = this.starting + 1;
  this.startingEle.innerHTML = this.starting;
}

// sends the colors to the blocks() function
for(var ii=0; ii<colorBox.length; ii++){
  elements.push(new blocks(colorBox[ii].color));
}