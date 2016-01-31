$(function(){


  //Placeholder Array for testing purposes
  var startArray;
  console.log(startArray);

  $("form").on("submit", function(e){
    e.preventDefault();
    var nextWord;
    var startWord = $("input#startWord").val();
    startWord = startWord.split(" ").join("_");
    nextWord = startWord.toUpperCase(this.id);
    startArray = nextWord.split("");

    console.log(nextWord)
    console.log(startArray);
    
  });
//win logic

// var player1;
// var player2;
var lives = 7;
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
    // lives.innerHTML('#lives');
    $('#lives').text(lives);
    console.log("number of lives " + lives);
  };
  if (lives == 0) {
    console.log('player1 wins');
    $('#winner').text("Player 1");
  }else if(startArray.toString() === squirrelLetterArr.toString())
{ console.log('player2 wins');
$('#winner').text("Player 2");
  } else {
    console.log("else at the end of the win logic " + this.id);
  }



});

 $("#refresh").on('click', function () {
  location.reload(true);
});
  console.log('reset');
});


 
 