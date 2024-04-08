function tri(numbers, order) {
    if (order === "asc") {
        // Tri ascendant
        numbers.sort(function(a, b) {
            return a - b;
        });
    } else if (order === "desc") {
        // Tri descendant
        numbers.sort(function(a, b) {
            return b - a;
        });
    } else {
        console.log("Paramètre 'order' invalide. Utilisez 'asc' ou 'desc'.");
        return null;
    }
    return numbers;
}

// Exemples d'utilisation de la fonction
var tableauAscendant = [3, 1, 5, 2, 4];
var tableauDescendant = [3, 1, 5, 2, 4];
console.log("Tableau avant tri ascendant :", tableauAscendant);
console.log("Tableau après tri ascendant :", tri(tableauAscendant, "asc"));

console.log("Tableau avant tri descendant :", tableauDescendant);
console.log("Tableau après tri descendant :", tri(tableauDescendant, "desc"));