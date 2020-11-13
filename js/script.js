// evento al click del pulsante Genera
var btnGenerate = document.getElementById("generate");
btnGenerate.addEventListener("click",
    
    function () {
        var passengerName = document.getElementById("name").value;
        console.log("Generazione nome del passeggero:", passengerName);

        var km = document.getElementById("km").value;
        console.log("Generazione dei km da percorrere:", km);

        var age = document.getElementById("age").value;
        console.log("Generazione dell'età:", age);

        var ticketPrice = Math.floor(km * 0.21);
        var discount;
        var discountType;
        console.log("Prezzo del biglietto pieno:", ticketPrice);

        // calcolo sconto per età
        if (age == "minorenne") {
            discount = ticketPrice * 0.2; 
            discountType = "Sconto Bronze";
        } else if (age =="over65") {
            discount = ticketPrice * 0.4;
            discountType = "Sconto Silver";
        } else {
            discount = 0;
            discountType = "Biglietto standard";
        }

        // calcolo prezzo finale
        var finalPrice = ticketPrice - discount;
        console.log("Prezzo dello sconto:", discount);
        console.log("Prezzo del biglietto finale:", finalPrice);
        console.log("Tipo di sconto:", discountType);

        // creazione dati biglietto in pagina
        document.getElementById("passenger").innerHTML = passengerName;
        document.getElementById("discount").innerHTML = discountType;
        document.getElementById("ticket-price").innerHTML = finalPrice + "€";

        var wagonNumber = Math.floor(Math.random() * 9) + 1;
        console.log("Creazione numero di carrozza:", wagonNumber);
        document.getElementById("wagon").innerHTML = wagonNumber;

        var cpCode = Math.floor(Math.random() * 10000) + 90000;
        console.log("Creazione numero CP:", cpCode);
        document.getElementById("cp-code").innerHTML = cpCode;
        
        // apparizione sezione ticket
        document.getElementById("ticket-section").className = "bottom show";
    }   
 
)

// evento al click del pulsante Annulla

var btnGenerate = document.getElementById("cancel");
btnGenerate.addEventListener("click",
    function () {
        // sparizione parametri ticket
        document.getElementById("name").value = "";
        document.getElementById("km").value = "";
        document.getElementById("age").value = "";

        document.getElementById("passenger").innerHTML = "";
        document.getElementById("discount").innerHTML = "";
        document.getElementById("ticket-price").innerHTML = "";
        document.getElementById("wagon").innerHTML = "";
        document.getElementById("cp-code").innerHTML = "";

        // sparizione sezione ticket
        document.getElementById("ticket-section").className = "bottom hidden";
    }

)