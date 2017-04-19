jQuery(function() {


});
console.log('starter.js is connected!');


let h1 = $("div").append("<h1 class=header>Welcome Checkers</h1>");
  //I appended the h1 tag to the div


$("h1").append("<p id='newGame'>click below to start a new game</p>");
$("p").append("<br> <input type='button' value='New Game' onclick='makeBoard()'>");

//creating button to display checkers table once I clck the button

let makeBoard = function(){

    let table = $("<div class='table'></div>");
    //Created a div tag and labled it "table"
        $("h1").append("<div class='table'></div>");
        //appending the table 'div' to the h1 tag. must be below the start button

        let makerow1 = function(){
            let row1 = $("<div class='row' id='row1'></div>");
                // created div with a class called "row" there should be 4 rows
                 $('.table').append("<div class='row' id='row1'></div>");
                //appending the row div to the table div....make it block for stacking
                  $('.row').append("<div class='cell' id='r1c1'></div>");
                  // append the div class cell to the table and then style it red
                  $('.row').append("<div class='cell' id='r1c2' style='background-color:red'></div>");
                  $('.row').append("<div class='cell' id='r1c3'></div>");
                  $('.row').append("<div class='cell' id='r1c4' style='background-color:red'></div>");
                  //apppend cell to row2

        };
        makerow1();

      let makerow2 = function() {
          let row2 = $("<div class='row' id='row2'></div>");
                // created div with a class called "row" there should be 4 rows
                  $('.table').append("<div class='row' id='row2'></div>");
                //appending the row div to the table div....make it block for stacking
                  $('#row2').append("<div class='cell' id='r2c1' style='background-color:red'></div>");
                  $('#row2').append("<div class='cell' id='r2c2'></div>");
                  $('#row2').append("<div class='cell' id='r2c3' style='background-color:red'></div>");
                  $('#row2').append("<div class='cell' id='r2c4'></div>");
        }
        makerow2();

      let makerow3 = function () {
          let row3 = $("<div class='row' id='row3' ><div>");
          //created div with a class called "row" this makes row 3
              $('.table').append("<div class='row' id='row3'></div>");
              //apppend the variable to the table
              $('#row3').append("<div class='cell' id='r3c1'></div");
              //append the cells to the row3 variable
              $('#row3').append("<div class='cell' id='r3c2' style='background-color:red'></div>");
              $('#row3').append("<div class='cell' id='r3c3'></div");
              $('#row3').append("<div class='cell' id='r3r4 'style='background-color:red'></div");
      }
      makerow3();

      let makerow4 = function () {
          let row4 = $("<div class='row' id='row4'></div>");
          //created div with a class called "row" that makes row 4
              $('.table').append("<div class='row' id='row4'></div>");
           //append the div to the table
              $('#row4').append("<div class='cell' id='r4c1' style='background-color:red'></div>");
              $('#row4').append("<div class='cell' id='r4c2'></div>");
              $('#row4').append("<div class='cell' id='r4c3'style='background-color:red'></div>");
              $('#row4').append("<div class='cell' id='r4c4'></div>");
      }
      makerow4();

     /* let makeChecker = function () {
        let checker = $("<div class='checker' id='p1'></div>");
          }
          for (var i = 0; i < 4; i++) {
            $('.checker').id= i;
          makeChecker();
      }; */
      let makeChecker = function () {
        let checker = $("<div></div>");
          }
          for (var i = 0; i < 4; i++) {
            $('<div>',{class:"checker", id:"p"+i}).appendTo('.table');
            // I ran a loop for the 4 checkers pieces and then added the IDs with number to each peice
      }
      makeChecker();
}
//$moreContentToAppend.attr('id', 'someId');
     // variab + attr ( id, 'nameOfId') semicolon




