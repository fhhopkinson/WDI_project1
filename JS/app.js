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

// var player1;
// var player2;
  var lives = 10;
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
      if(!match && lives > 1) {
        lives-=1;
        // lives.innerHTML('#lives');
        $('#lives').text(lives);
        console.log("number of lives " + lives);
      }
    });
  });


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
  

  // $("#refresh").on('click', function () {
  //  location.reload(true);
  // });

  
// });
// var image = "image" + key + ".jpg";
// getElementById("mainImage").src= image;
// if(key == max){
//  key = 0;
// }else{
//  key++;
// }


// var image = this;
// var images =[("/images/IMG_2162.JPG")
//              ("/images/IMG_2163.JPG")
//              ("/images/IMG_2164.JPG")
//              ("/images/IMG_2165.JPG")
//              ("/images/IMG_2166.JPG")
//              ("/images/IMG_2167.JPG")
//              ("/images/IMG_2168.JPG")
//              ("/images/IMG_2169.JPG")
//              ("/images/IMG_2170.JPG")
//              ("/images/IMG_2161.JPG")];



 
  if (lives = 10 ) {
    console.log("lives")
  } else if (lives = 9) {
  $(".hang10").css("background-image", "url('/images/IMG_1.JPG')");
  } else if (lives = 8) {
  $(".hang10").css("background-image", "url('/images/IMG_2.JPG')");
  } else if (lives = 7) {
  $(".hang10").css("background-image", "url('/images/IMG_3.JPG')");
  console.log('lives2')
  } else if (lives = 6) {
  $(".hang10").css("background-image", "url('/images/IMG_4.JPG')");
  } else if (lives = 5) {
  $(".hang10").css("background-image", "url('/images/IMG_5.JPG')");
  } else if (lives = 4) {
  $(".hang10").css("background-image", "url('/images/IMG_6.JPG')");
  } else if (lives = 3) {
  $(".hang10").css("background-image", "url('/images/IMG_7.JPG')");
  } else if (lives = 2) {
  $(".hang10").css("background-image", "url('/images/IMG_8.JPG')");
  } else if (lives = 1) {
  $(".hang10").css("background-image", "url('/images/IMG_9.JPG')");
  }

  $("#refresh").on('click', function () {
   location.reload(true);
   console.log('reset');
  });
});

