console.log('hello world!')

// Tipi di base----------------------------



// // tipi di dati che puoi utilizzare su JS--------------------------

// 'feefe' // string

// 34 56.6 -23 // number

// true false // boolean 


// Tipi strani:

// NaN Not a Number



//variabili con let-------------------------------------

// let pippo = 5;

// console.log(typeof pippo);

// pippo = 'viva il caffè!'

// console.log(typeof pippo);

// console.log(pippo)



//variabili con const---------------------------------

// const pluto = 12;

// pluto = 23;

// console.log(pluto);

// variabili con var----------------------------------

var paperino = true;

console.log(paperino);

paperino = -123;

console.log(paperino);

//differenza con let

// topolino = 5;

// let topolino;

// minnie = 5;

// var minnie;

// console.log(minnie);


let qui = (5 + 9);
let qua = (5 * 9);
let quo = (5 / 9);
let paperone = 5 ** 3; // elevamento a potenza

let basettoni = 6 % 5; //modulo

console.log(qui);
console.log(qua);
console.log(quo);

console.log(paperone);

console.log(basettoni);


let gambaDiLegno = 8 % 2;

console.log(gambaDiLegno);


let ilNumeroPiuPiccolo = -Infinity;

let ilNumeroPiuGrande = Infinity;


const paperoga = Math.sqrt(16); // libreria Math per tutte



console.log(paperoga);

const rocker = 'pippo' / 3;

console.log(rocker);


// Boolean -----------------------------------------------------------------------

const etabeta = true;
console.log(etabeta);

// ! (not) !true => false;
//     !false => true;

console.log(!etabeta);

// && (and) true && true  => true
//    true && false => false
//   false && true => false
//  false && false =>


const gastone = false;

console.log(etabeta && gastone);
console.log(etabeta && !gastone);

// // || (or) true || true => true
//         true  || false => true
//         false || true => true
//         false || false => false

// console.log(etabeta || gastone);
// console.log(!etabeta || gastone);



// console.log ( (etabeta || gastone) && etabeta );

//string --------------------------------------------------

// const orazio = 'io adoro javascript';

// console.log(orazio[0])
// console.log(orazio[9])

// const clarabella = 'perchè non sono sano di mente'

// console.log(orazio + ' ' + clarabella);

// const aladin = 27;

// console.log(orazio + 27);

// console.log(clarabella.length)

// console.log(clarabella.toLocaleUpperCase())

// undefined and null-------------------------------

// const macchiaNera = 5;

// let paperinik;
// console.log(paperinik); // undefined => scatola vuota

// paperinik = 12;

// console.log(paperinik);

// paperinik = undefined; // no, non va bene

// console.log(paperinik);

// paperinik = null;

// console.log(paperinik);

// const PI_GRECO = 3.14

// // operatori di confronto ---------------------------

// const nonnaPapera = 12;

// const ciccio =24;

// const joseCarioca = '12';

// // <(minore)
// // >= (maggiore o uguale)
// // <= (minore o uguale)


// console.log(ciccio >= nonnaPapera);
// // != (diverso) (noooo)
// // !== (diverso)

// console.log(ciccio !== nonnaPapera);

// // == (uguale con cast)
// // === (uguale stretto)


// console.log(nonnaPapera == joseCarioca); //mai usare questo qui!!
// console.log(nonnaPapera === joseCarioca);



//corto circuito degli operatori-------------------

// let biancaNeve 

// let ariel = 'ciao';

// let cenerentola = biancaNeve || ariel;

// console.log(biancaNeve || ariel);


//alert e prompt-------------------


// const mulan = prompt('dimmi un numero');


// if ((mulan % 2)) {
//     alert('hai inserito un numero pari')
// } else { 
//   alert('hai inserito un numero dispari')
// }
  
//  console.log('fine del programma')


const jasmine = prompt('dimmi un numero');

const isJasmineDivisibleBy3 = jasmine % 3 === 0;

const isJasmineDivisibleBy5 = jasmine % 5 === 0;

if (isJasmineDivisibleBy3 && isJasmineDivisibleBy5) {
    alert ('FIZZBUZZ');
    
} else if (isJasmineDivisibleBy3){
    alert('FIZZ');
} else if (isJasmineDivisibleBy5){
    alert('BUZZ');
} else {
    alert(jasmine);
}
    
