// main
$(document).ready(
  function () {
    // $('.dropdownlink').click(
    //   function () {
    //     var hover = $(this);
    //     var dropdown = hover.children('.dropdown');
    //     dropdown.toggleClass('active');
    //   }
    // );
    // $('.dropdownlink').click(
    //   function () {
    //     dropdownClick($(this));
    //   }
    // );
    // $('.dropdownlink').mouseenter(
    //   function () {
    //     var hover = $(this);
    //     var dropdown = hover.children('.dropdown');
    //     dropdown.addClass('active');
    //   }
    // );
    // $('.dropdownlink').mouseleave(
    //   function () {
    //     var hover = $(this);
    //     var dropdown = hover.children('.dropdown');
    //     dropdown.removeClass('active');
    //   }
    // );
    $('.dropdownlink').hover(
      function () {
        dropdownHover($(this));
      }
    );
    $('.hamburger > a').click(
      function () {
        $('.hamburger ul').removeClass('none');
        $('.hamburger ul').addClass('active');
      }
    );
    $('.hamburger ul li:first-child').click(
      function () {
        $('.hamburger ul').removeClass('active');
        $('.hamburger ul').addClass('none');
      }
    );
  }
);


// function
// hover on the item and make a dropdown menu appear
function dropdownHover(selection) {
  var dropdown = selection.children('.dropdown');
  dropdown.toggleClass('active');
}

// click on the item and make a dropdown menu appear
function dropdownClick(selection) {
  var dropdown = selection.children('.dropdown');
  dropdown.toggleClass('active');
}
