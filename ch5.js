/*
Create an empty array called 'movies'
Push the dark knight to your array of movies
Print the array using logArray()
Push the notebook to your array of movies
Print the array using logArray()
Print the item at index 0 of your movies array

// ?

const movies = [];
movies.push('the dark knight');
logArray(movies);

movies.push('the notebook');
logArray(movies);

console.log(movies[0]);

// don't touch below this line

function logArray(arr) {
    console.log('logging array...')
    for (const a of arr) {
      console.log(` - ${a}`)
    }
    console.log('---')
}
======
Complete the getMostRecentUser function. If the usernames array is empty, it should return null. Otherwise, it should return the last username in the array.

const getMostRecentUser = usernames => {
  // ?
    return (usernames.length != 0) ? (usernames[usernames.length - 1]) : null;
}

// don't touch below this line

console.log(`Most recent user: ${getMostRecentUser(
  []
)}`)

console.log(`Most recent user: ${getMostRecentUser(
  [
    'johndoe123',
    'billyrae456'
  ]
)}`)

console.log(`Most recent user: ${getMostRecentUser(
  [
    'wagslane',
    'jimmyjohn',
    'bopeep',
    'strightkilla',
    'reddyman'
  ]
)}`)
======
Complete the uploadNewMovies function. It accepts the oldMovies array, which is the database of movies already in the MovieStarz system, and a newMovies array, which are the new movies we need to add to the system.

It should return a new array containing all the movies from both arrays. First the old, then the new.

const uploadNewMovies = (oldMovies, newMovies) => {
  // ?
  return [...oldMovies, ...newMovies];
}

// don't touch below this line

const oldMovies = [ 'Once Upon a Time', 'Django Unchained', 'The Hateful 8' ]
const newMovies = [ 'Inglorious Basterds', 'Dune' ]
const allMovies = uploadNewMovies(oldMovies, newMovies)

console.log('All movies database:')
logArray(allMovies)


function logArray(arr) {
  for (const a of arr) {
    console.log(` - ${a}`)
  }
  console.log('---')
}
=====
Complete the getCleanRank function. It takes an array of words. Return the ranking. If a word contains punctuation, it should escape detection in our naive algorithm for now.

clean: No bad words
dirty: 1 bad word
filthy: 2 or more different bad words

dang
shoot
heck

function getCleanRank(reviewWords) {
  // ?
  let counter = 0;
  reviewWords.includes('dang') ? counter++ : counter;
  reviewWords.includes('shoot') ? counter++ : counter;
  reviewWords.includes('heck') ? counter++ : counter;
  if (counter === 1) {
    return 'dirty';
  } else if (counter >= 2) {
    return 'filthy';
  }

  return 'clean';
}


// Don't edit below this line

function test(reviewWords) {
  const cleanRank = getCleanRank(reviewWords)
  console.log(`'${reviewWords}' has rank: ${cleanRank}`)
}

test([ 'avril', 'lavigne', 'has', 'best', 'dang', 'tour' ])
test([ 'what', 'a', 'bad', 'film' ])
test([ 'oh', 'my', 'heck', 'I', 'hated', 'it' ])
test([ 'ripoff' ])
test([ 'That', 'was', 'a', 'pleasure' ])
test([ 'shoot!', 'I', 'cant', 'say', 'I', 'liked', 'the', 'dang', 'thing' ])
test([ 'shoot', 'dang', 'heck' ])
======
First, print a slice of the movies array that starts with the third item in the array and goes to the end.
Next, print a slice of the movies array that starts at the first item and ends with the third to last item in the array.
Use logArray() for printing the arrays.

const movies = [
  'oh brother where art thou',
  'oceans eleven',
  'fight club',
  'the island',
  'shutter island',
  'the magnificent seven'
]

function logArray(arr) {
  for (const a of arr) {
    console.log(` - ${a}`)
  }
  console.log('---')
}

// don't touch above this line

// ?
logArray(movies.slice(2));
logArray(movies.slice(0, -2));
========
*/