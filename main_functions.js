

// function square ( specialNumber ) {
//     const result = specialNumber * specialNumber;
//     return result;
// }

// function logUppercase(stringToLog){
// const uppercaseString = stringToLog.toUpperCase()
// console.log (uppercaseString);
// }

// function gentleAllert(){
//     alert('caro amico, non vorrei farmi gli affari tuoi, ma sarà il caso che ti metti a studiare!')
// }

// function logMultipleTimes(stringToLog, times){
//     for (let i =0; i < times; i++) {
//         console.log(stringToLog);
        
//     }
// }

// function isEven(number){
//     if (number % 2=== 0) {
//         return true;
//     } else{
//         return false;
//     }

// }

// function pow(base, exponent){
//     const result = base ** exponent;
//     return result;
// }


// function lastCharUppercase(selectedString){
//     const char = selectedString[selectedString.length -1];
//     const lastCharUpperCase = char.toUpperCase();
//     return lastCharUppercase;
// }

// //pippo l=5
// //01234


// const pippo= square(16);
// console.log(pippo);
 
// logUppercase('viva le funzioni')

// gentleAllert();

// logMultipleTimes('pizza',100)

// const paperino = pow(2,10);
// console.log(paperino);


// const pluto = isEven(27);
// console.log(pluto);


// //SINTASSI ALTERNATIVE


// // piu utilizzata
// function square(number) {
//     // const result = number * number
//     // return result;
//     return number * number;
// }

// console.log(square(3));

// const square2 = function(number)
// const result = number * number;
// return result;

// console.log(square2(10));

// const square3 = (number) => {
//     const result = number * number;
//     return result;
// } //lamba function (arrow function);



// console.log(square3(4));

// const square4 = number => number * number;
// // doppio asterisco per elevare alla potenza


// const pow = (base, exponent) => base ** exponent; 

// console.log(square4(8));
// console.log(pow(4,3));



// PARAMETRI ----------------------------------

// function logParameters(parameter1, parameter2){
//     console.log('parametro 1', parameter1);
//     console.log('parametro 2', parameter2);
// }

// logParameters('pippo',5);

// logParameters(27);

// logParameters();

// function pow(base, exponent){
    
//     if (exponent !== undefined) {
//         const result = base ** exponent;
//         return result;
        
//     } else {
//         const result2 = base ** 2;
//         return result2;
//     }
// }


// const pippo = pow(4, 4);

// console.log (pippo);

// const pluto = pow(4);

// console.log(pluto);

// const paperino = pow();

// console.log(paperino);

// VALORI DI DEFAULT --------------------

// function pow(base, exponent = 2) {
//     const result = base ** exponent;
//     return result;
    
// }


// console.log(pow(5,3));

// // console.log(pow(5));

// const startingString = '11';

// // console.log(startingString * 2);

// const startingNumber = parseInt(startingString, 2);

// console.log(startingString, typeof startingString);

// console.log(startingNumber, typeof startingNumber);


// ---------------------------------------------------------------------------------------


// es1 -definire una funzione 'pow' che non faccia uso dell'operatore ' **'
// ne della libreria math

function pow(base, exponent){
    let result = base
    for (let i = 1; i < exponent; i++){
        result = result * base
    } 
    return result
    
}
const topolino = pow(5,3)
console.log(topolino)









// ---------------------------------------------

// // secondo esercizio 
// definire una funzione 'correctCase' che prende in input una stringa
// e la restituisce transformando la prima lettera in maiuscolo

// 'la casa blue' => 'La casa blu'

//3) definire una funzione 'min' che dati due numeri
// restituisca il minore

// 4) definire una funzione chiamata 'clamp' che prende come parametri 
// tre numeri: valore, massimo e minimo.
// se valore è minore di minimo, restituisce minimo
// se valore è maggiore di massimo, restituisce massimo
// altrimenti restituisce valore.


//12,20, 100 =>

//5 definire una funzione chessboard che prende come parametro 
// 'size' e stampa la scacchiera.

//6) definire una funzione  'ellipse' che prende come parametro una stringa
// se la stringa è minore di 20 caratteri la ritorna non modificata 
// altrimenti la taglia a 20 caratteri e aggiunge 3 puntini.


//7) definire una funzione reverseString che data 
// la restituisca al contario  

///'casa rosa' => 'asor asac'

//8) 







