$(function(){


  //Placeholder Array for testing purposes
  var startArray;
  console.log(startArray);

  $("form").on("submit", function(e){
    e.preventDefault();
    var nextWord;
    var startWord = $("input#startWord").val();
    nextWord = startWord.toUpperCase(this.id);
    startArray = nextWord.split("");
    console.log(nextWord)
    console.log(startArray);
    
  });
//win logic
var lives = 7;
// var player1;
// var player2;

var squirrelLetterArr = [];

//Add event listener to letter tiles
$('.tile').on("click",function() {

var squirrelsArray = $(".squirrel");//Put squirrels in an array
var squirrelIndex = startArray.indexOf(this.id);//Attach desired index number to variable

  console.log('click');
  console.log("this is startArray " + startArray);
    
  //If letter clicked is in startArray...
  if(startArray.indexOf(this.id)!== -1) {
    console.log("The index of the letter you clicked: " + startArray.indexOf(this.id));
    squirrelsArray[squirrelIndex].innerHTML = (this.id);//Add HTML of clicked letter to the appropriate index of squirrel array
    squirrelLetterArr[startArray.indexOf(this.id)] = this.id; //Push letter of button pressed to squirrelLetterArr

  console.log('what is squirrelLetterArr: ' + squirrelLetterArr);
  console.log('squirrelIndex' + squirrelIndex);
  }else {
    lives-=1;
    console.log("number of lives" + lives);
  };
  if (lives === 0) {
    console.log('player1 wins');
  }else if(startArray.toString() === squirrelLetterArr.toString()){
    console.log('player2 wins');
  } else {
    console.log("else at the end of the win logic " + this.id);
  }
});
});


//make space bar populate a color.

// $(this.id).toggle();