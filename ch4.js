/*
Complete the getLabel function. It takes the number of stars a movie received in its reviews and returns a string label describing how good the movie was.

8 - 10 stars: great
4 - 7 stars: okay
less than or equal to 3 stars: awful

function getLabel(numStars) {
    // ?
    if (numStars > 7) {
        return 'great';
    } else if (numStars > 3 && numStars <= 7) {
        return 'okay';
    }

    return 'awfull';
  }
  
  // don't touch below this line
  
function test(numStars) {
console.log(`Stars=${numStars}, The movie was ${getLabel(numStars)}`)
}
  
  test(10)
  test(9)
  test(8)
  test(7)
  test(6)
  test(5)
  test(4)
  test(3)
  test(2)
  test(1)
  test(0)
======
Fix the bug in the function! It should return false if dang, shoot, or heck are present in the text, and true otherwise.

function isClean(review) {
    let clean = true;
    if (review.includes('dang')) {
      clean = false;
    }
    if (review.includes('shoot')) {
      clean = false;
    }
    if (review.includes('heck')) {
      clean = false;
    }
    return clean;
  }
  
  
  // Don't edit below this line

function test(review) {
    const clean = isClean(review);
    console.log(`'${review}' is clean: ${clean}`);
}
  
test('avril lavigne has best dang tour');
test('what a bad film');
test('oh my heck I hated it');
test('ripoff');
test('That was a pleasure');
test('shoot! I cant say I liked it');
=====
Complete the onReview and main functions.

function onReview(reviewText, callbackFunction) {
  console.log(`Review: ${reviewText}`);
  callbackFunction(reviewText);
}

function main() {
  const ohBrotherWhereArtThouReview = 'Stellar movie!';
  const twentyTwelveIceAgeReview = 'Not my favorite';
  onReview(ohBrotherWhereArtThouReview, saveToDatabase);
  onReview(twentyTwelveIceAgeReview, saveToDatabase);
}

// Don't edit below this line

function saveToDatabase(reviewText) {
  console.log(`Saving '${reviewText}' to database...`);
}

main()
===========
isMovieValid should check if the movie title's length is greater than 2 and return the result. Use the movieLength function to get the length of a movie title and fix the scoping bug.

function isMovieValid(title) {
  function movieLength(title) {
    const len = title.length
    return len
  }

  // don't touch above this line

  const len = movieLength(title)
  return len > 2
}

// don't touch below this line

function test(title) {
  const valid = isMovieValid(title)
  console.log(`'${title}' is valid: ${valid}`)
}

test('The League of Extraordinary Gentlemen')
test('Hunt for Red October')
test('007')
test('')
test('12')
==========
Fix the scoping bug and simplify the getIsPowerUser function. It should return true if user has submitted more than 10 reviews to MovieStarz or false otherwise.

Try to make it a 1-line function body if you can.

function getIsPowerUser(numReviews) {
  return (numReviews > 10) ? true : false;
}

// don't touch below this line

function test(numReviews) {
  const isPowerUser = getIsPowerUser(numReviews)
  console.log(`Number of reviews: ${numReviews}, is power user: ${isPowerUser}`)
}

test(100)
test(50)
test(10)
test(5)
test(2)
======
Convert isSuperReview to the fat arrow function syntax. Don't change its internal behavior.
const isSuperReview = (authorAccountAge, authorReputation) => (authorAccountAge > 2) ? false : (authorReputation > 100);

// don't touch below this line

function isFunctionType(f) {
  // eslint-disable-next-line no-prototype-builtins
  return f.hasOwnProperty('prototype')
}

if (isFunctionType(isSuperReview)) {
  console.log('isSuperReview is a classic function')
} else {
  console.log('isSuperReview is a fat arrow function')
}

const isSuper = isSuperReview(50, 200)
console.log(`The review is super: ${isSuper}`)

const isSuper2 = isSuperReview(1, 200)
console.log(`The review is super: ${isSuper2}`)
*/