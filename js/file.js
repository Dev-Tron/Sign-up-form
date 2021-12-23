$('img').hide();
$('#first-p').hide();
$('#sec-p').hide();
$('#third-p').hide();
$('#four-p').hide();

$('button').click(function() {
   const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   const emailval = $('#mail').val();

    if ( $('#first').val() === "") {
        $('#img-1').show();
        $('#first-p').show();
       } else if ( $('#first') != "") {
        $('#img-1').hide();
        $('#first-p').hide();
       }

    if ( $('#last').val() === "") {
        $('#img-2').show();
        $('#sec-p').show();
       } else if ( $('#last') != "") {
        $('#img-2').hide();
        $('#sec-p').hide();
       }

    if ( $('#mail').val() === "") {
        $('#img-3').show();
        $('#third-p').show();
       } else if ( $('#first') != "") {
        $('#img-3').hide();
        $('#third-p').hide();
       }

    if ( $('#pass').val() === "") {
         $('#img-4').show();
         $('#four-p').show();
    } else if ( $('#first') != "") {
        $('#img-4').hide();
        $('#four-p').hide();
       }

    if ( emailval.match(emailReg) ) {
        $('#img-3').hide();
        $('#third-p').hide();
    } else {
        $('#img-3').show();
        $('#third-p').show();
    }
});

