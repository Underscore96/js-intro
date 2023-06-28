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


const testArray4 = [4, 3, 2, 1];

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

function multiplyBy2(number){
  const result = number * 2;
  return result;
}

function multiplyBy4(number){
    const result = number * 4;
    return result;
  }

  console.log(multiplyBy2(3));
  console.log(multiplyBy4(3));


  function multiplyGenerator(multiplicator){
      
    const multiplyFunction = function(number){
        const result = number * multiplicator;
        return result;
    }

    return multiplyFunction;
  }


  const multiplyBy5 = multiplyGenerator(5);

  console.log(multiplyBy5(3));

  const multiplyBy10 = multiplyGenerator(10);

  console.log(multiplyBy10(3));

  console.log(multiplyGenerator(100)(3));




  function prefix(prefixStr){
    const prefixFunction = (str) => prefixStr + '' + str;
    return prefixFunction;
    // return (str) => prefixStr + ' ' + str;
  }

const itaPrefix = prefix('+39')

console.log(itaPrefix('3339917218'));

const frPrefix = prefix ('+33');

console.log(frPreFix('+3339917218'));
