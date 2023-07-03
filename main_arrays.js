// console.log ('array');

// ------------------  ARRAY------------------------


//const pippo = ['pane', 'pasta', 'latte', 'caffè'];

// console.log(pippo);

// console.log(pippo.length);


// AGGIUNGERE E TOGLIERE ELEMENTI ------------------------------

// pippo.push('acqua'); // aggiungere in coda

// pippo.unshift('biscotti')

// console.log(pippo); 


// const elementoCoda = pippo.pop();

// console.log(elementoCoda);

// const elementoTesta = pippo.shift(); //togliere in testa

// console.log(elementoTesta);

// console.log(pippo);



//CICLI ED ARRAY-----------------------------


// const pluto = [1, 2, 23, -4, 345, 0];

// console.log(pluto[0]);

// console.log(pluto[pluto.length -1]);

// for (let i = 0; i < pluto.length; i++) {
//     const element = pluto[i];
//     console.log(element);
// }

// for (const element of pluto) {
//     console.log(element);
    
// }

// let i = 0;

// while (i < pluto.length) {
//     const element = pluto[i];
//     console.log(element);
//     i++;
// }



// for (let i = pluto.length -1; i >= 0; i--) {
//     const element = pluto[i];
//     console.log(element);
    
// }



// ---------------- TRASFORMAZIONI DI ARRAY

// MAPPING

// const paperino = [2, 5, -4, 2000, 7, 34];

// function ArrayBy2(selectedArray){

//     const newArray = [];
    
//     for (let i = 0; i < selectedArray.length; i++) {
//         const element = selectedArray[i];
//         const newElement = element * 2;
//         newArray.push(newElement);
        
//     }

//     return newArray;
// }


// function divideBy2ifEven(selectedArray){
    
//     const newArray = [];
    
//     for (let i = 0; i < selectedArray.length; i++) {
//         const element = selectedArray[i];
       
//         let newElement;
//         if (element % 2 === 0){
//             newElement = element / 2;
//         } else {
//             newElement = element;
//         }

//         newArray.push(newElement);
        
//     }

//     return newArray;
// }

// console.log('divide by 2 if even', divideBy2ifEven(paperino));

// console.log('multiply by 2', ArrayBy2(paperino));


// // -----------------------------------------------------------


// const paperone = ['qui', 'quo', 'qua']

// function upperCaseAll(selectedArray){
    

//         const newArray = [];
        
//         for (let i = 0; i < selectedArray.length; i++) {
//             const element = selectedArray[i];
//             const newElement = element.toUpperCase();
//             newArray.push(newElement);
            
//         }
    
//         return newArray;
//     }

//     console.log('upperCaseAll', upperCaseAll(paperone));




//FILTERING

// const paperoga = [3, 5, 6, 9, 8, 111, -3, -8, 0];

// function removeEven(selectedArray){
//     const newArray = [];

//     for (let i = 0; i < selectedArray.length; i++) {
//         const element = selectedArray[i];
        
//         if(element % 2 !== 0){
    
//             newArray.push(element);
//         }
        
//     }

//     return newArray;
// }

// console.log('removeEven', removeEven(paperoga));






// function removeNegative(selectedArray){
//         const newArray =[];

//         for (let i = 0; i < selectedArray.length; i++) {
//             const element = selectedArray [i];
            
//             if(element >= 0){
//             newArray.push(element);
//         }
//     }
//     return newArray;

// }

// console.log('remove negative', removeNegative(paperoga));







// ---------------rivederlo, errore syntax

// const qui = [3, 5, 6, 9, 111, -8, -9];

// function removeNegativeAndMultiplyBy2(selectedArray){
//     const arrayWithoutNegative = removeNegative(selectedArray);
//     const arrayMultiplied = multiplyArrayBy2(arrayWithoutNegative);

//     return multiplyArrayBy2(removeNegative(selectedArray));

// }

// console.log(removeNegativeAndMultiplyBy2(qui));









//ESERCIZI ----------------------------------------------------

// const numberArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2];
// const stringsArray = ['23', 'PIPPO', 'pluto', 'la CASA blu', 'Osvaldo', '', 'porchetta'];



//1) mapping function che prende in input un array di numeri
// e restituisce un array con tutti i numeri diminuiti di uno.

//2) mapping function che prende in input un array di numeri
// e restituisce un array con il valore assoluto dei numeri

// 3) mapping function che prende in input un array di numeri 
// e restituisce un array di stringhe con scritto 'PARI' se il numero
// corrispondente è pari o 'DISPARI' se il mumero corrispondete è  dispari.

// 4) mapping function che prende in input un array di stringhe
// e le restituisce tutte minuscole


//5)  mapping function che prende in input un array di stringhe
// e restituisce un array di numeri con le lunghezze delle stringhe.


//6)  mapping function che prende in input un array di stringhe
// e restituisce le stringhe in formato camelCase

//7)  filter function che prende in input un array di stringhe
// e restituiscono solo quelle più lunghe di tre caratteri.


//8)  filter function che prende in input un array di stringhe
// e restituiscono solo quelle che contegono la lettera 'p'.

// 9) filter function che prende in input un array di numeri
// e restituiscono i positivi divisibili per 3.



// 10) fare una copia della home del sito di AXIA FORMAZIONE.

























