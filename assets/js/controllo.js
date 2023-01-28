

    /*     $('#panel-manual-body').collapse({
            toggle: true
          })
    
        var check = document.getElementById("en_manual");
        if (check.checked){
            $("#panel-manual-body").collapse('show');
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", "led_set?state=" + "on", true);
            xhttp.send();
        } else {
            $("#panel-manual-body").collapse('hide');
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", "led_set?state=" + "off", true);
            xhttp.send();
        } */



var i=0;

function cambio_stato() {

    var spento = 'https://lottie.host/068e15b2-a72e-42a8-a39f-5210b4d0f64b/gPEmFK8OcA.json';
    var attesa = 'https://lottie.host/809d565c-15e9-4f4a-8695-bb715d1dd2d9/z7q3pbFfZi.json';
    var acceso = 'https://lottie.host/b845dbbc-34c7-4c3d-8b7d-c049507739b8/Z8oqheoLsf.json';

   i++; 

    if(i==5){
        i=1;
    }

    switch(i) {
        case 1:
            document.querySelector("lottie-player").load(attesa);
            document.getElementById("pw-state").innerHTML="Attesa";
            break;
        case 2:
            document.querySelector("lottie-player").load(acceso);
            document.getElementById("pw-state").innerHTML="Acceso";
            break;
        case 3:
            document.querySelector("lottie-player").load(attesa);
            document.getElementById("pw-state").innerHTML="Attesa";
            break;
        case 4:
            document.querySelector("lottie-player").load(spento);
            document.getElementById("pw-state").innerHTML="Spento";
            break;
      }

}

function temp_plus(){
    document.getElementById("set-temp").stepUp();
}

function temp_minus(){
    document.getElementById("set-temp").stepDown();
}

function prog_plus(){
    document.getElementById("set-prog").stepUp();
}

function prog_minus(){
    document.getElementById("set-prog").stepDown();
}