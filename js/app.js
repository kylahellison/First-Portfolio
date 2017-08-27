// function clickBurger() {
//     var nav = document.getElementById("nav");
//     if (nav.style.display === 'none') {
//         nav.style.display = 'flex';
//     } else {
//         nav.style.display ='none';
//     }
// }

function clickBurger() {
    var nav = document.getElementById("nav");
    if (nav.style.top === '-250px') {
        nav.style.top = '0px';
    }
    else {
        nav.style.top ='-250px';
    }
}

// function closeMenu(){
//   // $('#nav').fadeOut(200);
//   var nav = document.getElementById("nav");
//   if (nav.style.display === 'flex') {
//       nav.style.display = 'none';
//   } else {
//       nav.style.display ='none';
//   }
// }
//
// $(document.body).click( function(e) {
//      closeMenu();
// });

$("#nav").focusout(function(){
    $(this).style.display ='none';
});
