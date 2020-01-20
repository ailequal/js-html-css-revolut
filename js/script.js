// main
$(document).ready(
  function () {
    $('.dropdownlink').click(
      function () {
        var hover = $(this);
        var dropdown = hover.children('.dropdown');
        dropdown.toggleClass('active');
      }
    );
    $('.dropdownlink').mouseenter(
      function () {
        var hover = $(this);
        var dropdown = hover.children('.dropdown');
        dropdown.addClass('active');
      }
    );
    $('.dropdownlink').mouseleave(
      function () {
        var hover = $(this);
        var dropdown = hover.children('.dropdown');
        dropdown.removeClass('active');
      }
    );
  }
);

// function
// hover on the item and make a dropdown menu appear
// function dropdownHover() {
//   // var hover = $(this);
//   var hover = $('.accounts');
//   var dropdown = hover.children('.dropdown');
//   dropdown.addClass('active');
// }

// click on the item and make a dropdown menu appear
// function dropdownClick() {
//   var hover = $(this);
//   console.log(hover);
//   // console.log($('.accounts'));
//   // var hover = $('.accounts');
//   var dropdown = hover.children('.dropdown');
//   dropdown.toggleClass('active');
// }
