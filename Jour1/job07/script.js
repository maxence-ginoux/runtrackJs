function jourTravaille(date) {
    var jour = date.getDate();
    var mois = date.getMonth() + 1; // +1 car Les mois commencent toujours à 0 en JS (convention)
    var annee = date.getFullYear();

    var joursFeries = [
        "01/01", // Nouvel An
        "01/05", // Fête du Travail
        "08/05", // Victoire 1945
        "14/07", // Fête Nationale
        "15/08", // Assomption
        "01/11", // Toussaint
        "11/11", // Armistice 1918
        "25/12"  // Noël
    ];

    var dateStr = ("0" + jour).slice(-2) + "/" + ("0" + mois).slice(-2); // Format JJ/MM

    if (joursFeries.includes(dateStr)) {
        console.log("Le " + jour + " " + mois + " " + annee + " est un jour férié.");
    } else if (date.getDay() === 6 || date.getDay() === 0) { // Samedi (6) ou Dimanche (0)
        console.log("Non, le " + jour + " " + mois + " " + annee + " n'est pas un jour travaillé, ça tombe un week-end.");
    } else {
        console.log("Oui, le " + jour + " " + mois + " " + annee + " est un jour travaillé.");
    }
}

var dateTest = new Date(2024, 0, 1);
jourTravaille(dateTest);
var dateTest = new Date(2024, 8, 29);
jourTravaille(dateTest);
var dateTest = new Date(2024, 6, 14);
jourTravaille(dateTest);
var dateTest = new Date(2024, 0, 28);
jourTravaille(dateTest);