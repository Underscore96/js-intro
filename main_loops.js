
// CICLO WHILE------------------------------


// let indice = 0;

// while (indice < 10) {

//     console.log('sono un\'istruzione che deve essere ripetuta')

//     // indice = indice + 1;
// indice += 1;
//     indice ++;
    
// }


// let indice = 0;

// while (indice < 100) {
//     if (indice % 2 === 0) {
//         console.log(indice);
//     }
//     indice++;
// }



// while (true) {
//     const input = prompt('scrivi una frase o scrivi FINE per terminare');
    
//     if (input === 'FINE') {
//         alert('programma terminato')
//         break;
        
//     } else {
//         // alert('la lunghezza della frase inserita è' + input.length + 'caratteri');
        
//         alert('la lunghezza della frase inserita è' ${input.length} 'caratteri')
//     }
    
// }



// ciclo do while -----------------------------------------


// let indce= 0

// do {
//     console.log('sono un\'istruzione che deve essere ripetuta')

//     idnice++
// } while (indice < 10);



// ciclo for------------------------------------------------

// let indice = 0;
// while (indice < 10) {
//     console.log('sono un\'istruzione che deve essere ripetuta');
//     indice++;
// }


// for (let pippo = 0; pippo < 10; pippo++) {
//     console.log('sono un\'istruzione che deve essere ripetuta')
// }

// for (let index = 0; index < 100; index+=2) {
//     console.log('sono un numero pari e sono:' + index)
// }

// for (let index = 0; index < 100; index++) {
//    if (index < 50) {
//     const risultato = index * 2;
//     console.log(risultato);
//    } else {
//     const risultato2 = index /2;
//     console.log(risultato2);
//    }


//    }



//    for (let index = 100; index >= 0; index -- ){
//        console.log(index);

//    }
    

// for (let i = 100; i >= 0; i--) {
//    if (i % 2 ===0) {
//     console.log ('pari', i)

//    } else {
//     console.log('dispari', i)
//    }
    
// }




// const paperone = 'stringa di prova';

// for (let index = 0; i < paperone.length; index++) {
    
//     const char = paperone[i];
//     console.log(char);
    
// // }

// for (var i = 1; i < 101; i++) {
//     if (i % 15 === 0) console.log("FizzBuzz");
//     else if (i % 3 === 0) console.log("Fizz");
//     else if (i % 5 === 0) console.log("Buzz");
//     else console.log(i);
// }

var size = 8; //this is the variable setting

var board = "";//this is the empty string we're going to add either ' ' , '#' or newline

for (var y = 0; y < size; y++) {   /*in the outer loop we add newline to seperate rows*/
  for (var x = 0; x < size; x++) {/*every inner loop rappresents a line, and alternatively it's adding either ' ' or '#' to the string that's being populated*/
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);

// ---------------------------------------
// let startingString2 ='#';
// while(startingString2.length < 8){
//      console.log(startingString2);
//      startingString2 = startingString2 + '#';


// }




// Versione easy --------------

// let chessboard= '';

// for (let i=0; i<8; i++){
     
//     if (i % 2 === 0) {
//         chessboard = chessboard + '# # # #\n'

//     } else {
//         chessboard = chessboard + '# # # #\n'
//     }



// }

// console.log(chessboard);



// versione meno easy

const size = 4;

let chessboard = '';

for (let i = 0; i < size; i++) {
    for (let j=0; j< size; j++) {
        // se i pari {
            // se j è pari {
                // aggiungo a chessboard uno spazio
            //} altrimenti {
                //aggiungo a chessboard un cancelletto
            //}
            altrimenti se j è pari {
                // aggiungo a chessboard un cancelletto
            // //} altrimenti {
            //     aggiungo a chessboard uno spazio
            // }

            //aggiungo a chessboard uno \n




    }
    const element = array[i];
    console.log (chessboard);





















