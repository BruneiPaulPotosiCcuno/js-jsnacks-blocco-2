/*- L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/

//Chiedo due parole al'usuario
//Se la prima parola e piu lunga stampo la seconda e poi la rpima

//Se la seconda parola e piu lunga stampo la prima e poi la seconda
//altrimenti stampo le parole uguali

const firstWord = prompt("La prima parola e:");
const secondWord = prompt("La seconda parola e:");
console.log(firstWord);
console.log(secondWord);

//diferenzio le parole la sua lunguezza

if (firstWord.length < secondWord.length) {
   // stampo la parola piu corta e poi la piu lunga
   console.log("Parola piu corta:", firstWord);
   console.log("Parola piu lunga:", secondWord);
} else {
   //stampa la parola piu lunga e poi la piu corta
   console.log("Parola piu lunga:", firstWord);
   console.log("Parola piu corta:", secondWord);
}