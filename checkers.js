jQuery(function() {


});
console.log('starter.js is connected!');


let h1 = $("div").append("<h1 class=header>Welcome To This Bootleg Game</h1>");
  //I appended the h1 tag to the div


$("h1").append("<p id='newGame'>click below to start a new game (and waste yout time)</p>");
$("p").append("<br> <input type='button' id='butt' value='New Game' onclick='makeBoard()'>");


//

//creating button to display checkers table once I clck the button. I will need to hide or disable the start game button . myButton is not working

let makeBoard= function(){

    //$("#butt").attr("disabled", true);
    document.getElementById('butt').style.visibility='hidden';
    $("h1").append("<p1>Score:</p1>")




    let table = $("<div class='table'></div>");
    //Created a div tag and labled it "table"
        $("h1").append("<div class='table'></div>");
        //appending the table 'div' to the h1 tag. must be below the start button

        let makerow1 = function(){
            let row1 = $("<div class='row' id='row1'></div>");
                // created div with a class called "row" there should be 4 rows
                 $('.table').append("<div class='row' id='row1'></div>");
                //appending the row div to the table div....make it block for stacking
                  $('.row').append("<div class='cell' id='0'></div>");
                  // append the div class cell to the table and then style it red
                  $('.row').append("<div class='cell' id='1'></div>");
                  $('.row').append("<div class='cell' id='2'></div>");
                  $('.row').append("<div class='cell' id='3'></div>");
                  //apppend cell to row2

        };
        makerow1();

      let makerow2 = function() {
          let row2 = $("<div class='row' id='row2'></div>");
                // created div with a class called "row" there should be 4 rows
                  $('.table').append("<div class='row' id='row2'></div>");
                //appending the row div to the table div....make it block for stacking
                  $('#row2').append("<div class='cell' id='4'></div>");
                  $('#row2').append("<div class='cell' id='5'></div>");
                  $('#row2').append("<div class='cell' id='6'></div>");
                  $('#row2').append("<div class='cell' id='7'></div>");
        }
        makerow2();

      let makerow3 = function () {
          let row3 = $("<div class='row' id='row3' ><div>");
          //created div with a class called "row" this makes row 3
              $('.table').append("<div class='row' id='row3'></div>");
              //apppend the variable to the table
              $('#row3').append("<div class='cell' id='8'></div");
              //append the cells to the row3 variable
              $('#row3').append("<div class='cell' id='9'></div>");
              $('#row3').append("<div class='cell' id='10'></div");
              $('#row3').append("<div class='cell' id='11'></div");
      }
      makerow3();

      let makerow4 = function () {
          let row4 = $("<div class='row' id='row4'></div>");
          //created div with a class called "row" that makes row 4
              $('.table').append("<div class='row' id='row4'></div>");
           //append the div to the table
              $('#row4').append("<div class='cell' id='12'></div>");
              $('#row4').append("<div class='cell' id='13'></div>");
              $('#row4').append("<div class='cell' id='14'></div>");
              $('#row4').append("<div class='cell' id='15'></div>");
      }
      makerow4();

      let makeChecker = function () {
        let checker = $("<div></div>");

          for (var i = 0; i < 4; i++) {

           let checkerId=  $('<div>',{class:"checker", id:"p"+i}).appendTo('.table');
            // I ran a loop for the 4 checkers pieces and then added the IDs with number to each peice
          };

           $(".checker").click(function(){
             (alert ("Sorry, Game under Construction!!!!!!"));
              });
         }
      makeChecker();
    //this ends the makeBoard functoin


let colorArray = ["red", "blue", "green", "orange"];
//since we have 4 colors that will appear, we need to create an array for the random number in the function to chose from. this is declared outside the functoins. Global variable



  let showColorInRandomBox = function (){
        let randomColorIndex = Math.floor(Math.random() * colorArray.length);
                // gets a random number between 0-3, this is for the 4 colors - blue, red, green, orange
              let randomColor =  colorArray[randomColorIndex];
                // it takes the random number given (math.random) and picks from the array [0,1,2,3] to return the string red, green, blue , orange
              let pickRandomBoxIdNumber = Math.floor(Math.random() * 16);
              // now I have a random color, pick a random ID box and set the box to that color
                //let assignRandomBoxIdNumber = $('<div>',{class:"checker", id:pickRandomBoxIdNumber})
              let randomBox = $("#" + pickRandomBoxIdNumber).css('background-color', randomColor);
               // this says: JQ ("get ID" + with this random number )and assign the css property(of random randomColor) css understands that red, blue, green, orange are colors declared in the array
              let randomBoxClick = $("#" + pickRandomBoxIdNumber).click(function(){

                  let tableZoneMouseOVer = $(randomBox).mouseenter(function(){
                  $(this).css("background-color", "randomBox");
                   });
                   tableZoneMouseOVer.mouseleave(function() {
                 $(this).css("background-color", "");
                    });

              });

            };
              //this allows me to click on the random colored box
setTimeout(showColorInRandomBox, 2000);
}

              //this ends the showColorInRandomBox function









