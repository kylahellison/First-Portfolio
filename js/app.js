function clickBurger() {
    var nav = document.getElementById("nav");
    if (nav.style.top === '-250px') {
        nav.style.top = '0px';
    }
    else {
        nav.style.top ='-250px';
    }
}





 $(document).ready(function() {

    //FUNCTION TO HIDE NAV MENU
        //Click anywhere on the document
        //If nav menu is showing, hide it
    $(document).on("click", function() {
        if ($('#nav').css('top') == ('0px')) {
                $('#nav').css('top', '-250px');
            }
    }); //End function to hide nav menu

    //FUNCTION TO HIDE AND SHOW CONTENT
        //Click nav link
            //the link user clicked on becomes "target"
            //Show target, hide all sibling divs.
    $('#nav a').on('click', function(){
       var target = $(this).attr('rel');
       $("#"+target).show().siblings("div").hide();
   }); //End function to hide and show content


}); //END READY
