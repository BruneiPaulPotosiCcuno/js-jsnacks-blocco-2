/* Create una sottocartella per ogni snack.
- L'utente inserisce un numero nel prompt, se è pari stampa il numero,
se è dispari stampa il numero successivo */

// L'utente inserisce un numero nel prompt
const numbers = parseInt(prompt('Inserisce un numero'))
    // se è pari stampa il numero
    
    if (numbers % 2 === 0) {
        console.log(numbers);
    // se è dispari stampa il numero successivo 
    } else {
        console.log(parseInt(numbers) + 1);
    }