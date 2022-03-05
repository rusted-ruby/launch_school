//process some movie release data. generate an array of objects that only contain the id
//and the title as key value pairs. you can assume that id is a positive integer and title
//is a string. 

//only keep releases that have both an id and title
//keep only the id and title for each release. 

let newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

//first, filter the array to only movies that have the data we're interested in.
//then, use map on each array element. use Object.entries and Object.fromEntries to 
//create the pared down versions of the movie objects. 

function processReleaseData(data) {
  //get an array that ONLY has the movies with data we want. 
  let fullMovies = data.filter((element) => {
    if (element.id !== undefined && element.title !== undefined) {
      return true
    }
  })
  //return a new array containing only the data we want
  return fullMovies.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
    }
  })
}

console.log(processReleaseData(newReleases));

// should return:
//[{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];