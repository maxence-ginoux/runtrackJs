function sommeNombresPremiers(nombre1, nombre2) {
    // Vérifier si un nombre est premier
    function estPremier(nombre) {
        if (nombre <= 1) {
            return false;
        }
        for (var i = 2; i <= Math.sqrt(nombre); i++) {
            if (nombre % i === 0) {
                return false;
            }
        }
        return true;
    }

    // Vérifier si les deux nombres sont premiers et retourner leur somme si c'est le cas
    var estPremier1 = true;
    for (var i = 2; i <= Math.sqrt(nombre1); i++) {
        if (nombre1 % i === 0) {
            estPremier1 = false;
            break;
        }
    }
    var estPremier2 = true;
    for (var i = 2; i <= Math.sqrt(nombre2); i++) {
        if (nombre2 % i === 0) {
            estPremier2 = false;
            break;
        }
    }

    if (estPremier1 && estPremier2) {
        return nombre1 + nombre2;
    } else {
        return false;
    }
}

var nombre1 = 7;
var nombre2 = 11;
var somme = sommeNombresPremiers(nombre1, nombre2);
if (somme !== false) {
    console.log("La somme des nombres premiers est : " + somme);
} else {
    console.log("Au moins l'un des nombres n'est pas premier.");
}