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



    $(document).on("click", function() {
        if ($('#nav').css('top') == ('0px')) {
                $('#nav').css('top', '-250px');
            }
    });

});
