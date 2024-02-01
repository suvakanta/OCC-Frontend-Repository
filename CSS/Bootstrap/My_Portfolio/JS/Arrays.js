// Introduction to Arrays

//Creating an array
let superhero = ['Spiderman','Sailor Moon', 'Scarlet Witch','Homelander','Batman'];

//Accessing Array elements
console.log('Hero 1:',superhero[0]);
console.log('Hero 2:',superhero[1]);
console.log('The last hero :',superhero[superhero.length-1]);

//Modifying array elements
superhero[3]='Iron man';
superhero.push('Captain Planet');
superhero.pop();

console.log(superhero);

//Array Iteration
for(let i =0; i<superhero.length; i++){
    console.log("the hero is ",superhero[i]);

}

//for each
superhero.forEach(function(hero){
    console.log("This hero is",hero);
})

//Array Methods

//length
console.log('Array length:',superhero.length)

//indexOf
console.log('Index of a value: ',superhero.indexOf('Sailor Moon'))

//inculdes
console.log('Inculdes a value:',superhero.includes('Scarlet Witch'))

//join
console.log('Jonied array:',superhero.join(' - '))

//slice
let slicedArray =superhero.slice(1,4);
console.log('Sliced Array:',slicedArray);
console.log(superhero);

//splice
let removedElements = superhero.splice(2,3);
console.log('removed elements:',removedElements);
console.log(superhero);