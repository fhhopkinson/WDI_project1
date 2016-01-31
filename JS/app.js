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
    console.log(startArray.length);

    $.each(startArray, function(index, value) { // run a loop over the array and this fills the unordered list with the required number of answerTile for the game.
      $(".answerTiles").append('<li class="answerTile"></li>');
      console.log("testing whether appending tile to html " + ".answerTile");
        if(startArray.indexOf(this.id) = " ")
          $(".answerTiles").append('<li class="answerTile">_</li>');
    });
  });
//win logic

// var player1;
// var player2;
  var lives = 7;
  var correctLettersArr = [];

  //Add event listener to letter tiles
  $('.tile').on("click",function() {

    var $answerTiles = $(".answerTile");//Put answers in an array
    var letterIndex = startArray.indexOf(this.id);//Attach desired index number to variable
    var self = this; // store this as self so we can use it inside the forEach loop.

    console.log('click');
    console.log("this is startArray " + startArray);
    
    var match = false;

    startArray.forEach(function(letter, index) { //here we have changed if to self because otherwise it would refer to .tile rather than startArray.
      if(letter === self.id) {
        $answerTiles.eq(index).html(self.id);
        correctLettersArr[index] = self.id;
        match = true;
      }
    });

    if(!match) {
      lives-=1;
      // lives.innerHTML('#lives');
      $('#lives').text(lives);
      console.log("number of lives " + lives);
    }

    //If letter clicked is in startArray...
    // if(startArray.indexOf(this.id) !== -1) {
    //   console.log("The index of the letter you clicked: " + startArray.indexOf(this.id));
    //   $answerTiles.eq(letterIndex).html(this.id);//Add HTML of clicked letter to the appropriate index of squirrel array
    //   correctLettersArr[startArray.indexOf(this.id)] = this.id; //Push letter of button pressed to correctLettersArr

    //   console.log('what is correctLettersArr: ' + correctLettersArr);
    //   console.log('letterIndex' + letterIndex);
    // } else {
    //   lives-=1;
    //   // lives.innerHTML('#lives');
    //   $('#lives').text(lives);
    //   console.log("number of lives " + lives);
    // }

    if (lives == 0) {
      console.log('player1 wins');
      $('#winner').text("Player 1");
    } else if(startArray.toString() === correctLettersArr.toString()) {
      console.log('player2 wins');
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


 
 