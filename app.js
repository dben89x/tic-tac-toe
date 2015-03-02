'use strict';

$(document).ready(function() {
var firstPlayersTurn = true;
var won = false;

  $('.cell').on('click', function() {

  if ($('#a1').hasClass('x') && $('#b1').hasClass('x') && $('#c1').hasClass('x')) {
    won = true;
    $('#a1').addClass('winning-colors');
    $('#b1').addClass('winning-colors');
    $('#c1').addClass('winning-colors');
  }
  if ($('#a2').hasClass('x') && $('#b2').hasClass('x') && $('#c2').hasClass('x')) {
    won = true;
    $('#a2').addClass('winning-colors');
    $('#b2').addClass('winning-colors');
    $('#c2').addClass('winning-colors');
  }
  if ($('#a3').hasClass('x') && $('#b3').hasClass('x') && $('#c3').hasClass('x')) {
    won = true;
    $('#a3').addClass('winning-colors');
    $('#b3').addClass('winning-colors');
    $('#c3').addClass('winning-colors');
  }
  if ($('#a1').hasClass('x') && $('#a2').hasClass('x') && $('#a3').hasClass('x')) {
    won = true;
    $('#a1').addClass('winning-colors');
    $('#a2').addClass('winning-colors');
    $('#a3').addClass('winning-colors');
  }
  if ($('#b1').hasClass('x') && $('#b2').hasClass('x') && $('#b3').hasClass('x')) {
    won = true;
    $('#b1').addClass('winning-colors');
    $('#b2').addClass('winning-colors');
    $('#b3').addClass('winning-colors');
  }
  if ($('#c1').hasClass('x') && $('#c2').hasClass('x') && $('#c3').hasClass('x')) {
    won = true;
    $('#c1').addClass('winning-colors');
    $('#c2').addClass('winning-colors');
    $('#c3').addClass('winning-colors');
  }
  if ($('#a1').hasClass('x') && $('#b2').hasClass('x') && $('#c3').hasClass('x')) {
    won = true;
    $('#a1').addClass('winning-colors');
    $('#b2').addClass('winning-colors');
    $('#c3').addClass('winning-colors');
  }
  if ($('#a3').hasClass('x') && $('#b2').hasClass('x') && $('#c1').hasClass('x')) {
    won = true;
    $('#a3').addClass('winning-colors');
    $('#b2').addClass('winning-colors');
    $('#c1').addClass('winning-colors');
  }


  if ($('#a1').hasClass('o') && $('#b1').hasClass('o') && $('#c1').hasClass('o')) {
    won = true;
    $('#a1').addClass('winning-colors');
    $('#b1').addClass('winning-colors');
    $('#c1').addClass('winning-colors');
  }
  if ($('#a2').hasClass('o') && $('#b2').hasClass('o') && $('#c2').hasClass('o')) {
    won = true;
    $('#a2').addClass('winning-colors');
    $('#b2').addClass('winning-colors');
    $('#c2').addClass('winning-colors');
  }
  if ($('#a3').hasClass('o') && $('#b3').hasClass('o') && $('#c3').hasClass('o')) {
    won = true;
    $('#a3').addClass('winning-colors');
    $('#b3').addClass('winning-colors');
    $('#c3').addClass('winning-colors');
  }
  if ($('#a1').hasClass('o') && $('#a2').hasClass('o') && $('#a3').hasClass('o')) {
    won = true;
    $('#a1').addClass('winning-colors');
    $('#a2').addClass('winning-colors');
    $('#a3').addClass('winning-colors');
  }
  if ($('#b1').hasClass('o') && $('#b2').hasClass('o') && $('#b3').hasClass('o')) {
    won = true;
    $('#b1').addClass('winning-colors');
    $('#b2').addClass('winning-colors');
    $('#b3').addClass('winning-colors');
  }
  if ($('#c1').hasClass('o') && $('#c2').hasClass('o') && $('#c3').hasClass('o')) {
    won = true;
    $('#c1').addClass('winning-colors');
    $('#c2').addClass('winning-colors');
    $('#c3').addClass('winning-colors');
  }
  if ($('#a1').hasClass('o') && $('#b2').hasClass('o') && $('#c3').hasClass('o')) {
    won = true;
    $('#a1').addClass('winning-colors');
    $('#b2').addClass('winning-colors');
    $('#c3').addClass('winning-colors');
  }
  if ($('#a3').hasClass('o') && $('#b2').hasClass('o') && $('#c1').hasClass('o')) {
    won = true;
    $('#a3').addClass('winning-colors');
    $('#b2').addClass('winning-colors');
    $('#c1').addClass('winning-colors');
  }
    console.log(won);
    if ($(this).hasClass('taken')) {}  // firstPlayers turn
    else {
      if (firstPlayersTurn) {
        $(this).text('X');
        $(this).addClass('x');
        $(this).addClass('taken');
         firstPlayersTurn = false;
      } else {                        // secondPlayers turn
        $(this).text('O');
        $(this).addClass('o');
        $(this).addClass('taken');
        firstPlayersTurn = true;
      }
    }
  });
});
