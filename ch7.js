/*
Complete the getMovieRecord function. It takes a movie's title, the number of stars, and the username of the person who gave the star rating. It should return an object with 4 properties in this order:
title
stars
username
id
Where the id is the title and the username concatenated together with a hyphen for uniqueness. For example, toy story and hanks123 would make the id toy story-hanks123.

function getMovieRecord(title, stars, username) {
  // ?
  return {
    title: title,
    stars: stars,
    username: username,
    id: `${title}-${username}`,
  };
}

// Don't touch below this line

logObject(getMovieRecord('oh brother where art thou', 3, 'wagslane'))
logObject(getMovieRecord('frozen', 5.5, 'elonmusk'))
logObject(getMovieRecord('toy story', 4, 'prince'))

function logObject(obj) {
  for (const key in obj) {
    console.log(` - ${key}: ${obj[key]}`)
  }
  console.log('---')
}
=========
As it turns out, we have a bunch of old movie records in our MovieStarz database that never had an ID assigned in the first place! Write the addID function. It takes an existing movie record object and calculates the id:
id = title-username
Where title is the movie record's title property and username is the movie records username property.
Add the id to the id property of the movie record and return the new movie record object.

function addID(movieRecord) {
  // ?
  movieRecord.id = `${movieRecord.title}-${movieRecord.username}`;
  return movieRecord;
}

// Don't touch below this line

function getMovieRecord(title, stars, username) {
  return {
    title,
    stars,
    username
  }
}

function logObject(obj) {
  for (const key in obj) {
    console.log(` - ${key}: ${obj[key]}`)
  }
  console.log('---')
}

const record = getMovieRecord('Frozen', 8.5, 'Elsa')
console.log('Printing movie...')
logObject(record)
console.log('Adding ID...')
const idRecord = addID(record)
logObject(idRecord)
=============
In most systems, "entities" are stored as objects. For example, "users", "reviews", and "actors" might all be different "entities" within the MovieStarz system.
We store movie reviews as nested JavaScript objects! Print the given review's author's first name by using the . operator.

const review = {
  text: 'This movie was awful',
  stars: 2,
  author: {
    firstName: 'Johnny',
    lastName: 'Comelately',
    createdAt: '2022-08-17T15:41:25+00:00'
  }
}

// don't touch above this line

// ?
console.log(review.author.firstName);
===============
Our MovieStarz database is pretty smart - it will only save a value if the value is "truthy" in JavaScript. If it's "falsy", it will just ignore it without errors.
Complete the getState function. It takes a review as input and returns the state string if the review has one. Otherwise, it returns undefined (a falsy value).
You should be able to do this in 1 line with the optional chaining operator. Take a look at the test cases to see the shape of the reviews objects.

function getState(review) {
  return review.author?.location?.state;
}

// don't touch below this line

function test(review) {
  const state = getState(review)
  if (state) {
    console.log(`Adding ${state} to the database...`)
  } else {
    console.log('No state found...')
  }
}

test({
  text: 'This movie was awful',
  stars: 2,
  author: {
    firstName: 'Johnny',
    lastName: 'Comelately',
    createdAt: '2022-08-17T15:41:25+00:00',
    location: {
      state: 'Utah'
    }
  }
})

test({
  text: 'This movie was okay...',
  stars: 5
})

test({
  text: 'This movie was awful',
  stars: 2,
  author: {
    firstName: 'Jill',
    lastName: 'Comelately',
    createdAt: '2022-08-17T15:41:25+00:00',
    location: {
      state: 'Nevada'
    }
  }
})

test({
  text: 'This movie was awful',
  stars: 2,
  author: {
    firstName: 'George',
    lastName: 'Jimenez',
    createdAt: '2022-08-17T15:41:25+00:00'
  }
})
===========
Complete the getFirstReview() method. The method should return the first review in the user's review array.

const user = {
  getFirstReview() {
    // ?
    return this.reviews[0];
  },
  reviews: [ 'I hate Ice Age', 'I didn\'t enjoy it at all', 'What a fabulous film' ],
  name: 'Bob Doogle'
}

// don't touch below this line

console.log(`${user.name}'s first review is: ${user.getFirstReview()}`)
================
Complete the submitReview() method on the author object. It should simply increment that author's numReviews counter by 1.

const author = {
  name: 'Simon Garfunkle',
  numReviews: 8,
  submitReview() {
    // ?
    this.numReviews++;
  }
}

// don't touch below this line

console.log(`${author.name} has submitted ${author.numReviews} reviews`)

console.log(`${author.name} is submitting a review...`)
author.submitReview()
console.log(`${author.name} has submitted ${author.numReviews} reviews`)

console.log(`${author.name} is submitting a review...`)
author.submitReview()
console.log(`${author.name} has submitted ${author.numReviews} reviews`)

console.log(`${author.name} is submitting a review...`)
author.submitReview()
console.log(`${author.name} has submitted ${author.numReviews} reviews`)

console.log(`${author.name} is submitting a review...`)
author.submitReview()
console.log(`${author.name} has submitted ${author.numReviews} reviews`)
==========
We need to keep track of the number of reviews we've captured for all the movies in our database. Complete the getCountsByTitle function. It should return an object where each key is the title of a movie, and the value is how many times that movie appeared in the movies parameter.

const getCountsByTitle = (movies) => {
  // ?
  const moviesCounts = {};
  for (const movie of movies) {
    if (!moviesCounts[movie]) {
        moviesCounts[movie] = 0;
    }
    moviesCounts[movie]++;
  }

  return moviesCounts;
}

// don't touch below this line

function test(movies) {
  const counts = getCountsByTitle(movies)
  for (const [ movie, count ] of Object.entries(counts)) {
    console.log(`'${movie}' has ${count} reviews`)
  }
  console.log('---')
}

test([
  'Ice Age',
  'The Forgotten',
  'The Northman',
  'American Psycho',
  'Ice Age',
  'Ice Age',
  'American Psycho'
])

test([
  'Big Daddy',
  'Big Daddy',
  'The Big Short',
  'The Big Short',
  'The Big Short'
])
========
The server logs that print when the MovieStarz program starts aren't working. Fix the bug.

const server = {
    port: 8080,
    name: 'MovieStarz',
    getLogs: function () {
      return `Starting ${this.name} server on ${this.port}`
    }
}
  
// don't touch below this line

const logs = server.getLogs()
console.log(logs)
*/