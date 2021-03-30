// Creo una funzione che avvi il mio script tramite pulsante "calculate"
// 
// Salvo in una variabile l'elemento "button-calculate" presente nel HTML tramite il suo id.
var calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", function() {
    // Imposto una serie di azioni che verranno avviate dopo il "click" del button.

    // Salvo in una variabile il nome dell'hamburger inserito dall'utente.
    var burgerNameElement = document.getElementById("user_burger_name");
    var burgerName = burgerNameElement.value;
    console.log(burgerName);
});
