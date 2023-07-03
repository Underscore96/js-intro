// console.log('ciaoo');

//HIGH ORDER FUNCTIONS---------------------------------
// MAP ---------------------------------

// con questa funzione generica 'map' puoi evitare di scrivere il ciclo for tutte 
// le volte per le varie funzioni.

// function map(array, transFunc){
    
//     let tempArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array [i];

//         const newElement = transFunc(element);

//         tempArray.push(newElement);
//     }
//     return tempArray;

// }




// function addOne(element){
//     const newElement = element + 1;
//     return newElement;

// }


// console.log(map([7, 10, 34], addOne));



// const testArray = [12, 34, 5, 0, -23];

// function multiplyBy2(element){;
// const newElement = element * 2;
// return newElement;
// }

// console.log(testArray.map(multiplyBy2));

// //javascript ha la funzione map incorporata, non c'è bisogno di scriverla tutte le volte
// // basta dare all'array un ''.map''

// // se vuoi semplificare il tutto senza scrivere una funzione banale * 2, cambia elemento.
// console.log(testArray.map((element) => element * 2));

// // oppure la lunghezza di un array in una lambda. ecco un esempio

// // console.log(testArray2.map((element) => element.length));

// // non sei obbligato a sciverlo in una lambda ma puoi scrivere la funzione, per esemnpio per array length.
// // scrivi questo

// const testArray2 = ['ciao','domani','qui'];

// function getStringLength(element){
//     const length = element.length;
//     return length;
// }

// console.log(testArray2.map(getStringLength));

// ///

// function multiplyByIndex(element, i, originalArray){
    
//     const newElement = element * i;
//     return newElement;

// }

// console.log(testArray.map(multiplyByIndex));
// console.log(testArray.map((e,i) => e*i)); //versione lambda abbreviata




// questa è una funzione filtering, per rimuovere i segni negativi
// function removeNegative(array){
//         let tempArray = [];
    
//         for (let i = 0; i < array.length; i++) {
//             const element = array[i];
            
//             if(element >=  0){
//                 tempArray.push(element);
//             }
            
//         }
    
//         return tempArray;
// }
 
// console.log(removeNegative([0, 3, 5, -2, -5, 8]))



// // costruisci una funzione filter, che può essere transformata ed applicata




// function filter(array, filterFunc){
//     let tempArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
        
//         if(filterFunc(element)){
//             tempArray.push(element);
//         }
        
//     }

//     return tempArray;
// }


// function isPositive(element){
//     if (element >= 0) {
//         return true;
        
//     } else {
//         return false;
//     }
// }


// console.log(filter([0, 3, 5, -2, -5, 8], isPositive));





// const testArray3  = [3, 5, 4, 8, 20, 21];

// function isEven(element){
//     if (element % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(testArray3.filter(isEven));
// console.log(testArray3.filter((element) => element % 2 === 0));



// function isIndexEven(element, index, originalArray){
//     if(index % 2 === 0){
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(testArray3.filter(isIndexEven));
// console.log(testArray3.filter((element, index) => index % 2 === 0));

    

// // ---------------------------------------------------------



// function sumAll(array){
//     let accumulator = 0;

//     for (let i = 0; i < array.length; i++) {
//         const current = array[i];
        
//         accumulator = accumulator + current;
//     }

//     return accumulator;
// }

// console.log(sumAll([23, 4, 4, 6, 3]));


// function reduce(array, reduceFunc, startingValue){
//     let accumulator = startingValue;

//     for (let i = 0; i < array.length; i++) {
//         const current = array[i];
        
//         accumulator = reduceFunc(accumulator, current);
//     }

//     return accumulator;

// }

// function sum(accumulator, current){
//     const newAccumulator = accumulator + current;
//     return newAccumulator;
// }


// console.log(reduce([23, 4, 4, 6, 3], sum, 0));


// const testArray4 = [4, 3, 2, 1];

// function multiply(acc, curr){
//     const newAcc = acc * curr;
//     return newAcc;
// }

// console.log(testArray4.reduce(multiply, 1));
// console.log(testArray4.reduce ((acc,curr) => acc * curr, 1));


// function sumOnlyOddIndex(acc, curr, index, originalArray){
//     if(index % 2 !== 0){
//         const newAcc = acc + curr;
//         return newAcc;
//     } else {
//         return acc;
//     }
// }

// console.log(testArray4.reduce(sumOnlyOddIndex, 0));


// function sumAll2(array){
//     let accumulator = array[0];

//     for (let i = 1; i < array.length; i++) {
//         const current = array[i];
        
//         accumulator = accumulator + current;
//     }

//     return accumulator;
// }


// console.log(sumAll2([2, 3, 4]));
// console.log(sumAll([2, 3, 4]));



// console.log(testArray4.reduce(sum))
// console.log(testArray4.reduce(sum, 0))



// function sumAll2(accumulator, current){
//     console.log('accumulator', accumulator);
//     console.log('current',current);
//     const newAccumulator = accumulator + current;
//     return newAccumulator;
// }


// FUNZIONI CHE RESTITUISCONO FUNZIONI

// function multiplyBy2(number){
//   const result = number * 2;
//   return result;
// }

// function multiplyBy4(number){
//     const result = number * 4;
//     return result;
//   }

//   console.log(multiplyBy2(3));
//   console.log(multiplyBy4(3));


//   function multiplyGenerator(multiplicator){
      
//     const multiplyFunction = function(number){
//         const result = number * multiplicator;
//         return result;
//     }

//     return multiplyFunction;
//   }


//   const multiplyBy5 = multiplyGenerator(5);

//   console.log(multiplyBy5(3));

//   const multiplyBy10 = multiplyGenerator(10);

//   console.log(multiplyBy10(3));

//   console.log(multiplyGenerator(100)(3));




//   function prefix(prefixStr){
//     const prefixFunction = (str) => prefixStr + '' + str;
//     return prefixFunction;
//     // return (str) => prefixStr + ' ' + str;
//   }

// const itaPrefix = prefix('+39')

// console.log(itaPrefix('3339917218'));

// const frPrefix = prefix ('+33');

// console.log(frPreFix('+3339917218'));







// // function sumLenghtIfLast3(acc, curr, index, originalArray){
// //   if (index >= originalArray.length -3){
// //     return acc + curr.length;
// //   }
// //   return acc; 
// // }


// // console.log(stringArray.reduce(sumLengthIfLast3,0))


// //SORTING ---------------------


// const numberArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2];
// const stringsArray = [ '23', 'PIPPO', 'pluto', 'la CASA blu', 'Osvaldo', '','porchetta'];

// // stringsArray.sort();

// // console.log(stringsArray);


// // numberArray.sort();
// // console.log(numberArray);

// // const numberArray = numbersArray.map( e => e + 1);

// // const newArray = numberArray.map(e => e + 1);

// // console.log(newArray);
// // console.log(numberArray);


// // const newArray = numberArray.sort();
// // console.log ('new', newArray);
// // console.log ('numbers', numbersArray

// function compareAscendingNumbers(n1, n2){
//   if (n1 < n2){
//     return -1;
//   } else if (n1 > n2) {
//     return +1;
//   } else {
//     return 0;
//   }
// }


// function compareAscendingNumbers2(n1, n2){
//   return n1 - n2;
// }


// function compareDescendingNumbers(n1, n2){
//   if (n1 < n2){
//     return +1;
//   } else if ( n1> n2){
//     return -1;
//   } else {
//     return 0;
//   }
// }



// function compareDescendingNumbers2(n1, n2){
//   return n2 - n1;
// }


// //lambda 
// numberArray.sort((n1, n2) => n1 - n2)





// numberArray.sort(compareAscendingNumbers)

// console.log(numberArray);



// // stringsArray.sort((s1, s2) => s1.localeCompare(s2)) SE vuoi una lambda ascending

// // stringsArray.sort((s1, s2) => -s1.localeCompare(s2)) se vuoi una lambda descending


// // console.log(stringsArray)

// const student1 = {
//   name: 'manuela',
//   yob: 1988,
//   marks: [10, 8, 7, 5],
// }

// const student2 = {
//   name: 'damiano',
//   yob: 1993,
//   marks: [9, 8, 7, 10],
// }

// const student3 = {
//   name: 'cesare',
//   yob: 2003,
//   marks: [7, 8, 7, 6],
// }

// const student4 = {
//   name: 'isabella',
//   yob: 1996,
//   marks: [10, 9, 9, 10],
// }


// const student5 = {
//   name: 'stefania',
//   yob: 1996,
//   marks: [10, 4, 7, 6],
// }

// const student6 = {
//   name: 'ares',
//   yob: 1993,
//   marks: [10, 10, 10, 10],
// }

// const student7 = {
//   name: 'stefania',
//   yob: 2000,
//   marks: [10, 10, 10, 10],
// }

// const student8 = {
//   name: 'cesare',
//   yob: 2003,
//   marks: [9, 9, 9, 9],
// }



// const students = [student1, student2, student3, student4, student5, student6, student7, student8];

// // console.log(students);

// function compareStudentsByNameAscending(s1, s2){
//   return s1.name.localeCompare(s2.name);

// }


// function compareStudentsByYobDesc(s1, s2){
//   return s2.yob -s1.yob;
// }


// function compareStudentByNameAndYear(s1, s2){
//   if (s1.name.localeCompare(s2.name) === 0){

//   } else {
//     return s1.name.localeCompare(s2.name);
//   }
// }


// // se voglio lo studente piu giovane su un onominia, allora usero questa logica


// function compareStudentsByNameAndYear(s1, s2){
//   if (s1.name.localeCompare(s2.name) === 0){
//     return s2.yob -s1.yob;

//   } else {
//     return s1.name.localeCompare(s2.name);
//   }
// }


// function calculateMean(arrayOfNumber){
//   const sumOfArray = arrayOfNumber.reduce((a, c)=> a + c);
//   const mean = sumOfArray / arrayOfNumber.length;
//   return mean;
// }



// function compareByStudentMarksMeanDescending(s1, s2){
//  return calculateMean(s1.marks) - calculateMean(s2.marks);

// }


// function compareStudentsByNameYearAndMean(s1, s2){
//   if (s1.name.localeCompare(s2.name) === 0){
//     if(s2.yob -s1.yob === 0){

//       return calculateMean(s2.marks) - calculateMean(s1.marks);
//     } else {
//       return s2.yob -s1.yob
//     }

//   } else {
//     return s1.name.localeCompare(s2.name);
//   }
// }



// students.sort(compareStudentsByNameYearAndMean);

// // students.sort(compareByStudentMarksMeanDescending)

// // students.sort(compareStudentsByYobDesc);

// // students.log(compareStudentsByNameAndYear);

// // students.sort(compareStudentsByNameAscending);

// console.log(students);


// FIND -----------------------------------------------------------------

// const stringsArray = [ '23', 'PIPPO', 'pluto', 'la CASA blu', 'Osvaldo', '','porchetta'];

// function isGreaterThan3Chars(element){
  
//   if (element.length > 3) {
//     return true;
//   }
//   return false;
// }

// console.log(stringsArray.filter(isGreaterThan3Chars));
// console.log(stringsArray.find(isGreaterThan3Chars));


// function containsCASA(element){
//   if (element.includes('CASA')) {
//     return true;
//   }
//   return false;
// }

// console.log(stringsArray.filter(containsCASA));

// console.log(stringsArray.find(containsCASA));


// //SOME ------------------------------------------------------------------------------------------------------------------------------------------------------


// function isGreaterThan30Chars(element){
  
//   if (element.length > 30) {
//     return true;
//   }
//   return false;
// }

// console.log(stringsArray.some(isGreaterThan3Chars));
// console.log(stringsArray.some(isGreaterThan30Chars));











// ---------------------------------------------------------------------------------------------------------------------------------------------------

function acc(array) {
    let accumulator = "";

    for (let i = 0; i < array.length; i++) {
        const char = array[i];

        for (let j = 0; j < i + 1; j++) {
            if (j === 0) {
                accumulator +=  char.toUpperCase();
            } else {
                accumulator += char.toLowerCase();
            }
        }
        if (i < array.length - 1) {
           accumulator += "-";
        }
    }
    return accumulator;
}

const string1 = "abcd"; // -> A - Bb - Ccc - Dddd
const string2 = "RqaEzty";
const string3 = "cWaT";
console.log(acc(string1));
console.log(acc(string2));
console.log(acc(string3));


  
// --------------------------------------------------------------------------------------------------------------------------------------------



function squaresum (acc,curr){

    return  acc + curr * curr;
    
}

const numberArray = [1,2,2]

console.log('---------------',numberArray.reduce(squaresum,0));


console.log(numberArray.reduce ((acc,curr) => acc + curr*curr, 0));

function acc(numbers) {
    let accumulator = 0;

    for (number of numbers) {
        accumulator += number*number;

    }
    return accumulator;
}

console.log('---------------',acc([1,2,2]));


