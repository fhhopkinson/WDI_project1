$(function(){

  var startArray;
  console.log(startArray);
  $("form").on("submit", function(e){ //have to prevent default as the page refreshes after pressing enter.
    e.preventDefault();
    var nextWord;
    var startWord = $("input#startWord").val();
    startWord = startWord.split(" ").join("_");// turning a space into an underscore in the array
    nextWord = startWord.toUpperCase(this.id); //to match the buttons on click case
    startArray = nextWord.split(""); //spltiing the string into individual letters per index

    $.each(startArray, function(index, value) { // add the list to the ul so that the letters go into new boxes
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
    
    startArray.forEach(function(letter, index) { //here we have changed if to self because otherwise it would refer to .tile rather than startArray.
      if(letter === self.id) {
        $answerTiles.eq(index).html(self.id);
        correctLettersArr[index] = self.id;
        match = true;
      }
    });


    if(!match && lives >= 1) { //lives diminishing logic ie losing lives. if match is false lose a life
      lives-=1;
      $('#lives').text(lives);// adding number of lives to text box
      console.log("number of lives " + lives);
    }
    if (lives == 0) {
      $('#winner').text("Butcher");
    } else if(startArray.toString() === correctLettersArr.toString()) { //tried doing this and it worked so i kept it
      $('#winner').text("Innocent");
    } else {
    } 
    

    if (lives === 9) { //logic for image changing from good luck to hanging
    $(".hang10").css({"background-image": "url('images/IMG_1.JPG')"});
    console.log("lives");
    } else if (lives === 8) {
    $(".hang10").css({"background-image": "url('images/IMG_2.JPG')"});
    } else if (lives === 7) {
    $(".hang10").css({"background-image": "url('images/IMG_3.JPG')"});
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
    $(".hang10").css({"background-image": "url('images/IMG_11.JPG')"});
    }


  });

  $("#refresh").on('click', function () { //refresh button logic
   location.reload(true);
  });
});

function checkWinner() {}
function changePicture() {}


