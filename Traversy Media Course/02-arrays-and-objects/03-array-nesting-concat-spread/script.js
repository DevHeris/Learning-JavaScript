let x;

const tvShow = ['Stranger Things', 'Game of Thrones', 'Money Heist'];
const anime = ['One Piece', 'Bleach', 'Naruto', tvShow];

/* anime.push(tvShow); */ //Or use this method to nest tvshow

x = anime[3][2];//Money Heist

const allMovies = [tvShow, anime]

x = allMovies;

// Try accessing one piece

x = allMovies[1][0]; //one piece

// Concatenating an array is removing items from an array and putting them into a different array
x = tvShow.concat(anime); //This is like garshing them together into one array without any seperation whatsoever


// Spread Operator (...) //Similar effect to concat

// Can be used with arrays and objects
x = [...anime, ...tvShow];

console.log(x);

// Flattening nested arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat(); //Returns a new array with all sub-array elements concatenated into it


// Static Methods on Array Objects
x = Array.isArray(tvShow); //true

x = Array.from('12345');

x = Array.of(a, b, c)
console.log(x);