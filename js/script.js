// main
$(document).ready(
  function () {
    // $('.accounts').hover(
    //   function () {
    //     dropdownHover();
    //   }
    // );
    $('.accounts').click(
      function () {
        dropdownClick();
      }
    );
    console.log($('.accounts'));
  }
);

// function
// hover on the item and make a dropdown menu appear
function dropdownHover() {
  // var hover = $(this);
  var hover = $('.accounts');
  var dropdown = hover.children('.dropdown');
  dropdown.addClass('active');
}

// click on the item and make a dropdown menu appear
function dropdownClick() {
  // var hover = $(this);
  var hover = $('.accounts');
  console.log(hover);
  var dropdown = hover.children('.dropdown');
  console.log(dropdown);
  dropdown.toggle('active');
}
