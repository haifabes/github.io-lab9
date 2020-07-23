
$(document).ready(function(){
    // JQuery tooltip
    $('.tool').tooltip();


    $('#email').change(function(){
        if(isemail("email")){
            document.getElementById("email").style = "background-color: #cef4db;";
        } else {
            document.getElementById("email").style = "background-color: #ffe2c4;";
        }
    });

        
});



function isemail(htmlcomp) 
{
    var email =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var num = document.getElementById(htmlcomp).value;
    return email.test(num);
}



