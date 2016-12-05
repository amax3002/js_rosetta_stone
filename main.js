// 1. Assign "Hello World" to a variable message
var message1 = "Hello World!";
console.log(message1);

// 2. Assign a different string to a different variable
var message2 = "Different String Test";
console.log(message2);

// 3. Assign a number to a variable
var message3 = 2;
console.log(message3);

// 4. Use string concatenation to display the number in a string.
var age = 26;
var string1 = "Her age is ";
console.log(string1.concat(age));

// 5. Make an array of your favorite movies or books or bands. Have at least 4 values.
var array5 = ["Rescue Party","No Country for Old Men","The Stand","The Mummy","Catch-22"];
console.log(array5);



//////String Manipulation
// 1. Turn a sentence into an Array, and select the words that are six characters long.
var sentence = "Schlitz four dollar toast godard truffaut bespoke neutra artisan pop-up. Chia keytar single-origin coffee sustainable disrupt.";;
var sentenceArray = sentence.split(" ");

var greaterThanSixFinal = [];

sentenceArray.forEach(function longerThanSix (word) {
  if (word.length > 5){
    greaterThanSixFinal.push(word);
}});

console.log(greaterThanSixFinal);


//////Data Selects
// 1. Create an array of movies with budgets of less than 100 and another array of movies that starred Leonard DiCaprio.
var movies = [];
movies.push({
  title: "Forest Gump",
  budget: 55,
  stars: ["Tom Hanks"]
});
movies.push({
  title: "Star Wars",
  budget: 11,
  stars: ["Mark Hamill", "Harrison Ford"]
});
movies.push({
  title: "Batman Begins",
  budget: 150,
  stars: ["Christian Bale", "Liam Neeson", "Michael Caine"]
});
movies.push({
  title: "Titanic",
  budget: 200,
  stars: ["Kate Winslet", "Leonardo DiCaprio"]
});
movies.push({
  title: "Inception",
  budget: 160,
  stars: ["Leonardo DiCaprio", "JGL"]
});

// Movies with over a 100 million dolalr budget
var millionDollarMovies = [];
for (var key in movies) {
  var obj = movies[key];
    if(obj.budget > 99) {
      millionDollarMovies.push(obj);
  }
}
console.log(millionDollarMovies);

// Movies with Leonardo DiCaprio
var moviesWithLeonardDicaprio = [];
for (var key in movies) {
  var obj = movies[key];
    if(obj.stars.indexOf("Leonardo DiCaprio") > -1) {
      moviesWithLeonardDicaprio.push(obj);
  }
}
console.log(moviesWithLeonardDicaprio);
