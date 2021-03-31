// Creo una funzione che avvi il mio script tramite pulsante "calculate"
// 
// Salvo in una variabile l'elemento "button-calculate" presente nel HTML tramite il suo id.
var calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", function() {
    // Salvo in una variabile il nome dell'hamburger inserito dall'utente.
    var burgerNameElement = document.getElementById("user_burger_name");
    var burgerName = burgerNameElement.value;

    var hiddenElement = document.getElementById("alert_message");

    if(burgerName === "") {
        hiddenElement.className = "alert_msg " + "alert_msg:after";
        console.log(hiddenElement)
    } else {
        hiddenElement.className = "alert_msg_hidden";
        // Imposto una serie di azioni che verranno avviate dopo il "click" del button.

        
        
        // Creo un ciclo "for" che leggerà le classi delle checkbox, cosi da poterle manipolare
        // in un unico comando.
        // 
        // Inizio impostando una variabile per il prezzo base dell'hamburger.
        var burgerPrice = 50;
        // Salvo in una variabile l'elemento checkbox presente nell'HTML.
        var addonCheckBoxes = document.getElementsByClassName("addon");
        // Inizializzo il ciclo for per "leggere" se una checkbox è attiva o meno.
        for(var i = 0; i < addonCheckBoxes.length; i++) {
            var checkBoxOn = addonCheckBoxes[i];
            // Imposto una conzione che verifica se la check box è selezionata, e trasformo
            // il suo valore in un intero.
            if(checkBoxOn.checked == true) {
                var addOnPrice = parseFloat(checkBoxOn.value);
                // Calcolo il prezzo dell'hamburger con quello dell'aggiunta selezionata.
                burgerPrice += addOnPrice;
            }
        }
        // Imposto una variabile che mi dia il numero intero con due decimali.
        var finalAddOnPrice = burgerPrice.toFixed(2);
        console.log(finalAddOnPrice)
        
        // Creo una lista di codici "coupon" tramite un array.
        // 
        // Salvo in una variabile la lista di array.
        var couponList = [""]
    }
});
