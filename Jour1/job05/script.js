function afficherJoursSemaines() {
    var joursSemaine = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    for (var i = 0; i < joursSemaine.length; i++) {
        console.log(joursSemaine[i]);
    }
}
window.onload = function() {
    afficherJoursSemaines();
}