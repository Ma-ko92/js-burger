// Creo una funzione che avvi il mio script tramite pulsante "calculate"
// 
// Salvo in una variabile l'elemento "button-calculate" presente nel HTML tramite il suo id.
var calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", function() {
    // Salvo in una variabile il nome dell'hamburger inserito dall'utente.
    var burgerNameElement = document.getElementById("user_burger_name");
    var burgerName = burgerNameElement.value;

    // Imposto una condizione che: se il campo con il nome dell'hamburger è vuoto farà
    // apparari un messaggio Popup, altrimenti proseguirà con il resto delle azioni.
    // 
    // Salvo in una variabile l'Id dell'elemento presente nella pagina HTML.
    var hiddenElement = document.getElementById("alert_message");

    if(burgerName === "") {
        hiddenElement.className = "alert_msg " + "alert_msg:after";
        console.log(hiddenElement)
    } else {
        hiddenElement.className = "alert_msg_hidden";

        // Imposto una serie di azioni che verranno avviate dopo il "click" del button
        // e la verifica del nome dell'Hamburger.

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
        var couponList = ["a34ft6ol99","bb783rg1l9","boolean","tt567gbn00","90rdf32kj5"]

        // Salvo in una variabile il valore dell'input dei coupon.
        var couponElement = document.getElementById("coupon");
        var coupon = couponElement.value;
        
        // Creo delle condizioni che verifichino ogni singolo coupon della lista con quello  
        // inserito dall'utente, se presente applico lo sconto dedicato.
        var hiddenCouponElement = document.getElementById("coupon_message");

        if(coupon === couponList[0]) {
            hiddenCouponElement.className = "coupon_msg " + "coupon_msg:after"
        } else if(coupon === couponList[1]) {
            finalAddOnPrice = (finalAddOnPrice - (finalAddOnPrice * 5 / 100)).toFixed(2);
            hiddenCouponElement.className = "coupon_msg_hidden";
        } else if(coupon === couponList[2]) {
            finalAddOnPrice = (finalAddOnPrice - (finalAddOnPrice * 75 / 100)).toFixed(2);
            hiddenCouponElement.className = "coupon_msg_hidden";
        } else if(coupon === couponList[3]) {
            finalAddOnPrice = (finalAddOnPrice - (finalAddOnPrice * 10 / 100)).toFixed(2);
            hiddenCouponElement.className = "coupon_msg_hidden";
        } else if(coupon === couponList[4]) {
            finalAddOnPrice = (finalAddOnPrice - (finalAddOnPrice * 15 / 100)).toFixed(2);
            hiddenCouponElement.className = "coupon_msg_hidden";
        } 
        // Stampo sulla pagina html il prezzo finale.
        document.getElementById("test").innerHTML = "$ " + burgerPrice;
        document.getElementById("test").innerHTML = "$ " + finalAddOnPrice;
    }
    

});
