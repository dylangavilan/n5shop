
function reverseString(string) {
    const checkCharacter = (char) => {
        return /[^a-z0-9]/i.test(char)
    }
    const arrayFromString = string.split('');
    let helperArray = new Array(arrayFromString.length) // formo un array con la misma cantidad de posiciones para poder manipularlo
    let copy = new Array(...arrayFromString);
    copy = copy.reverse();

    for (let i = 0; i < arrayFromString.length; i++) {
        let character = arrayFromString[i]; // guardo el caracter para que sea mas legible
        if(checkCharacter(character)) {
              helperArray[i] = character;
        } else {
            while (checkCharacter(copy[0])) {
                copy.shift(); // voy eliminando los caracteres especiales
            }
            helperArray[i] = copy.shift(); //agrego el caracter alphanumerico y lo elimino para que no se repita
        }
    }
    return helperArray.join('');
}

export { reverseString };
