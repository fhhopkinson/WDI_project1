$(function(){


  //Placeholder Array for testing purposes
  var startArray = [];
  console.log(startArray);

  $("form").on("submit", function(e){
    e.preventDefault();
    var nextWord;
    var startWord = $("input#startWord").val();
    nextWord = startWord.toUpperCase(this.id);

    
    console.log(nextWord)
    startArray = nextWord.split("");
    console.log(startArray);
    
  });




//win logic
var lives = 7;
var player1;
var player2;

var letterClicked = "";

//Put squirrels in an array
var squirrelsArray = $(".squirrel");

//Add event listener to letter tiles
$('.tile').on("click",function() {
  console.log('click');
  console.log(startArray);

  //If letter clicked is in startArray...
  if(startArray.indexOf(this.id)!== -1) {

    // (this.id).text(('#squirrel').indexOf(startArray));
    console.log("The index of the letter you clicked: " + startArray.indexOf(this.id));

    //Attach desired index number to variable
    var squirrelIndex = startArray.indexOf(this.id);

    //Add HTML of clicked letter to the appropriate index of squirrel array
    squirrelsArray[squirrelIndex].innerHTML = (this.id);
    // $(this.id).toggle();
console.log('is squirrelsArray filling' + squirrelsArray);
console.log('squirrelIndex' + squirrelIndex);
  }else {
    lives-=1;
    console.log("number of lives" + lives);
    if (lives === 0) {
     console.log('player1 wins');
     }else if(startArray == squirrelsArray){
        console.log('player2 wins');
        console.log(squirrelsArray);
     } else {
        console.log("else at the end of the win logic" + this.id);
     }
  };
});
});

// var endArray = endWord.split("");
// var endWord = endArray.toString()


// startArray.indexOf()

// $(#tile.id).on("click",function() {
//   if(content of the indices of startArray == this.id)
//    content of the index of startArray.text into box of correct index
//   else{
// (#tile.id).text("");

//make space bar populate a color.
