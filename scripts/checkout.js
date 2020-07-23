
$(document).ready(function(){
    // JQuery tooltip
    $('.tool').tooltip();

   

    // Correct card num
    $('#ccnum').change(function(){
        if(isccnum("ccnum")){
            document.getElementById("ccnum").style = "background-color: #cef4db;";
        } else {
            document.getElementById("ccnum").style = "background-color: #ffe2c4;";
        }
    });

    $('#email').change(function(){
        if(isemail("email")){
            document.getElementById("email").style = "background-color: #cef4db;";
        } else {
            document.getElementById("email").style = "background-color: #ffe2c4;";
        }
    });


    // Feedback about correct phone and card
    $('#submit').click(function(){
        if(!isccnum("ccnum") || !isemail("email")){
            if(!isemail("email")){
                document.getElementById("wrongEmail").style.display = "block";
            }
            if(!isNumCard("numcard")){
                document.getElementById("wrongNum").style.display = "block";
            }
        } else {
            document.getElementById("success").style.display = "block";
        }
    });


    
});

function isccnum(htmlcomp){
    var card = /^\d{16}$/;
    var num = document.getElementById(htmlcomp).value;

    return card.test(num);
}

function isemail(htmlcomp) 
{
    var email =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var num = document.getElementById(htmlcomp).value;
    return email.test(num);
}




























































































































// JQuery checkbox
$( function() {
    $( ".choixmeca" ).checkboxradio();
  } );
