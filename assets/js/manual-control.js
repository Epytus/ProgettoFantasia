function funzione() {

    $('#manual-control').collapse({
        toggle: true
    })

    var check = document.getElementById("en-manual");
    if (check.checked) {
        $("#manual-control").collapse('toggle');
    } else {
        $("#manual-control").collapse('hide');
    }

}


function en_pellet() {
    if (document.getElementById("en-pellet").checked) {
        document.getElementById("range-pellet").disabled = false;
    } else {
        document.getElementById("range-pellet").disabled = true;
    }
}




$( document ).ready(function() {
    $('#customRange3').on('input', function(){
         v = $('#customRange3').val();
         console.log(v);
         $('div.price').text(v);
    });
});