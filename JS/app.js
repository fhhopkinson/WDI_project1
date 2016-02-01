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

    $.each(startArray, function(index, value) {
    //(startArray.replace(" ", "_")) // run a loop over the array and this fills the unordered list with the required number of answerTile for the game.
    // $(document).keydown(function(e) { 
    // if (startArray.replace(" ", "_")) { 
    //   ( $(".answerTiles").append('<li class="answerTile">_</li>'))
      console.log("testing whether appending tile to html " + ".answerTile");
      ($(".answerTiles").append('<li class="answerTile"></li>'));

    });
  });
//win logic
  var lives = 10;
  var correctLettersArr = [];
  //Add event listener to letter tiles
  $('.tile').on("click",function() {

    var $answerTiles = $(".answerTile");//Put answers in an array
    var letterIndex = startArray.indexOf(this.id);//Attach desired index number to variable
    var self = this; // store this as self so we can use it inside the forEach loop.
    var match = false;
    console.log('click');
    console.log("this is startArray " + startArray);
    
    startArray.forEach(function(letter, index) { //here we have changed if to self because otherwise it would refer to .tile rather than startArray.
      if(letter === self.id) {
        $answerTiles.eq(index).html(self.id);
        correctLettersArr[index] = self.id;
        match = true;
      }
    });
    if(!match && lives >= 1) { //lives diminishing logic
      lives-=1;
      $('#lives').text(lives);
      console.log("number of lives " + lives);
    }
    if (lives == 0) {
      console.log('player1 wins');
      $('#winner').text("Player 1");
    } else if(startArray.toString() === correctLettersArr.toString()) {
      console.log('player2 wins');
      $('#winner').text("Player 2");
    } else {
      console.log("else at the end of the win logic " + this.id);
    } 
    if (lives === 9) { //logic for image changing from nothing to hanging
    $(".hang10").css({"background-image": "url('images/IMG_1.JPG')"});
    console.log("lives");
    } else if (lives === 8) {
    $(".hang10").css({"background-image": "url('images/IMG_2.JPG')"});
    } else if (lives === 7) {
    $(".hang10").css({"background-image": "url('images/IMG_3.JPG')"});
    console.log('lives2');
    } else if (lives === 6) {
    $(".hang10").css({"background-image": "url('images/IMG_4.JPG')"});
    } else if (lives === 5) {
    $(".hang10").css({"background-image": "url('images/IMG_5.JPG')"});
    } else if (lives === 4) {
    $(".hang10").css({"background-image": "url('images/IMG_6.JPG')"});
    } else if (lives === 3) {
    $(".hang10").css({"background-image": "url('images/IMG_7.JPG')"});
    } else if (lives === 2) {
    $(".hang10").css({"background-image": "url('images/IMG_8.JPG')"});
    } else if (lives === 1) {
    $(".hang10").css({"background-image": "url('images/IMG_9.JPG')"});
    } else if (lives === 0) {
    $(".hang10").css({"background-image": "url('images/IMG_10.JPG')"});
    }
  });
  $("#refresh").on('click', function () { //refresh button logic
   location.reload(true);
   console.log('reset');
  });
});

