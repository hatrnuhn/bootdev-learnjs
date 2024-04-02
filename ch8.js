/*
One of the calls to getMovieRecord is throwing a movie id not found error. Change the code to safely make the function calls within a try-catch block. If an error is raised, print the error message to the console as a string.

function main() {
    try {
        logObject(getMovieRecord(1))
        logObject(getMovieRecord(2))
        logObject(getMovieRecord(3))
        logObject(getMovieRecord(4))      
    } catch (err) {
        console.log(`error: ${err.message}`);
    }
}

// Don't edit below this line

function getMovieRecord(movieId) {
  if (movieId === 1) {
    return { name: 'Apollo 13', duration: 128 }
  }
  if (movieId === 2) {
    return { name: '2001: A Space Odyssey', duration: 300 }
  }
  if (movieId === 3) {
    return { name: 'Interstellar', duration: 4000 }
  }
  throw new Error('movie id not found')
}

function logObject(obj) {
  for (const key in obj) {
    console.log(` - ${key}: ${obj[key]}`)
  }
  console.log('---')
}

main()
=========
Let's write the "throwing side" of the getMovieRecord function now! If the movieId passed into our function doesn't match one of the 3 expected ids, just throw an error object with the message: movie id not found.

function getMovieRecord(movieId) {
  if (movieId === 1) {
    return { name: 'Apollo 13', duration: 128 }
  }
  if (movieId === 2) {
    return { name: '2001: A Space Odyssey', duration: 300 }
  }
  if (movieId === 3) {
    return { name: 'Interstellar', duration: 4000 }
  }
  throw new Error('movie id is not found');
}

// Don't edit below this line

function main() {
  try {
    logObject(getMovieRecord(1))
    logObject(getMovieRecord(2))
    logObject(getMovieRecord(3))
    logObject(getMovieRecord(4))
  } catch (err) {
    console.log(err.message)
  }
}

function logObject(obj) {
  for (const key in obj) {
    console.log(` - ${key}: ${obj[key]}`)
  }
  console.log('---')
}

main()
*/