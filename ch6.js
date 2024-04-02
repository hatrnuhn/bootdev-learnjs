/*
Complete the missing sections of the for-loop so that it logs the numbers 0-99 to the console.

for (let i = 0; i < 100; i++) {
  console.log(i);
}
======
Write a for-loop from scratch that logs the numbers 0-199 to the console.

for (let i = 0; i < 200; i++){
    console.log(i);
}
======
Edit the for-loop to print the numbers 5-15, inclusive.

for (let i = 5; i <= 15; i++) {
  console.log(i)
}
=======
Complete the movieExists function. It should loop over the entire movies array and print: Looking at: movie

Where "movie" is the movie title in the movies array.

Once it finds the movie title that matches the given title argument, it should also print: Found: movie

Where "movie" is the found movie title.
Then it should break from the loop and not print anything else.

const movieExists = (movies, title) => {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i] === title) {
      console.log(`Found: ${movies[i]}`)
      break;
    }
    console.log(`Looking at: ${movies[i]}`);
  }
}

// don't touch below this line

movieExists([ 'Incredibles', 'Tangled', 'Frozen' ], 'Frozen')
console.log('---')
movieExists([ 'The Quick and the Dead', 'The Magnificent 7', 'Frozen' ], 'The Magnificent 7')
console.log('---')
movieExists([ 'Dead', 'Alive', 'Flight', 'Rocky' ], 'Flight')
console.log('---')
movieExists([ 'Dead', 'Alive', 'Flight', 'Rocky' ], 'None')
console.log('---')
=======
Complete the printCleanReviews function. It should loop over the entire reviews array and print: Clean review: review

Where review is the review text. But it should only do so if the review does not contain the given badWord.

Do not use an else-statement!!! Use the continue keyword instead to accomplish the same thing.
const printCleanReviews = (reviews, badWord) => {
  // ?
  for (let i = 0; i < reviews.length; i++) {
    if (reviews[i].includes(badWord)) {
      continue;
    }
    console.log(`Clean review: ${reviews[i]}`);
  }
}

// don't touch below this line

printCleanReviews([ 'The movie sucks', 'I love it', 'What garbage', 'so sucky' ], 'suck')
console.log('---')
printCleanReviews([ 'The movie sucks', 'I love it', 'What darn crap', 'darn, so sucky' ], 'darn')
console.log('---')
=========
We need to render all the "star rating" options to our MovieStarz users. They are allowed to give ratings between 1 and 10.
Write a for-loop using the "decrement" operator (--) instead of the "increment" (++) operator to print:
10 stars
9 stars
...
1 star
Notice that 1 star is not plural.

function printStar(numOfStars) {
  let stars = '';
  for (let i = numOfStars; i > 0; i--) {
    stars+= '*';
  }
  
  stars.length === 1 ? stars+= ' star': stars += ' stars';

  console.log(stars);
}

const main = () => {
  for (let i = 10; i > 0; i--) {
    printStar(i);
  }
}

main();
=============
Let's rewrite our printCleanReviews function from earlier using a for-of loop.

The function should loop over the entire reviews array and print:
Clean review: review
Where review is the review text. But it should only do so if the review does not contain the given badWord.

const printCleanReviews = (reviews, badWord) => {
  // ?
  for (let review of reviews) {
    if (review.includes(badWord)) {
      continue;
    }

    console.log(`Clean review: ${review}`)
  }
}

// don't touch below this line

printCleanReviews([ 'The movie sucks', 'I love it', 'What garbage', 'so sucky' ], 'suck')
console.log('---')
printCleanReviews([ 'The movie sucks', 'I love it', 'What darn crap', 'darn, so sucky' ], 'darn')
console.log('---')
==========