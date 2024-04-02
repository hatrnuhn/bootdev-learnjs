/*
Change the operators (and only the operators) in the code so that each statement evaluates to true if it doesn't already.
console.log(5 > 6)
console.log(5 === 6)
console.log(5 === '5')
console.log(6 >= 6)

console.log(5 < 6)
console.log(5 < 6)
console.log(5 == '5')
console.log(6 >= 6)


Use the provided values and the comparison operators to calculate the following:

encantoBetterThanFrozen
tangledBetterThanFrozen
toyStoryBetterThanTangled

const frozenStars = 5
const tangledStars = 10
const toyStoryStars = 7
const encantoStars = 6

// don't edit above this line

const encantoBetterThanFrozen = encantoStars > frozenStars
const tangledBetterThanFrozen = tangledStars > frozenStars
const toyStoryBetterThanTangled = toyStoryStars > tangledStars

// don't edit below this line

console.log(`encantoBetterThanFrozen is a ${typeof encantoBetterThanFrozen}`)
console.log(`Encanto is better than Frozen: ${encantoBetterThanFrozen}`)

console.log(`tangledBetterThanFrozen is a ${typeof tangledBetterThanFrozen}`)
console.log(`Tangled is better than Frozen: ${tangledBetterThanFrozen}`)

console.log(`toyStoryBetterThanTangled is a ${typeof toyStoryBetterThanTangled}`)
console.log(`Toy Story is better than Tangled: ${toyStoryBetterThanTangled}`)

const bobbyAge = 17;
const jillAge = 19;

// don't touch above this line
let isOrIsnot = null;
if (bobbyAge >= 18) {
    isOrIsNot = 'is';
} else {
    isOrIsnot = 'is not';
}

console.log(`Bobby ${isOrIsnot} old enough`);

if (jillAge >= 18) {
    isOrIsnot = 'is';
} else {
    isOrIsnot = 'is not';
}

console.log(`Jill ${isOrIsnot} old enough`);

On line 6 create a variable called message and use a ternary operator to set the value of that variable to either

'Bobby is older'
or
'Jill is older'
Use the ternary operator and an inequality operator to dynamically determine which string to set as the value of message based on the bobbyAge and jillAge variables.

const bobbyAge = 17;
const jillAge = 19;

// don't touch above this line

// ?
const message = bobbyAge > jillAge ? 'Bobby is older' : 'Jill is older';

// don't touch below this line

console.log(message);