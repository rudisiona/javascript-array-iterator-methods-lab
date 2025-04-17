const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
  ];
  

  const people = [
    'Becker, Carl',
    'Beckett, Samuel',
    'Beddoes, Mick',
    'Beecher, Henry',
    'Beethoven, Ludwig',
    'Begin, Menachem',
    'Belloc, Hilaire',
    'Bellow, Saul',
    'Benchley, Robert',
    'Benenson, Peter',
    'Ben-Gurion, David',
    'Benjamin, Walter',
    'Benn, Tony',
    'Bennington, Chester',
    'Benson, Leana',
    'Bent, Silas',
    'Bentsen, Lloyd',
    'Berger, Ric',
    'Bergman, Ingmar',
    'Berio, Luciano',
    'Berle, Milton',
    'Berlin, Irving',
    'Berne, Eric',
    'Bernhard, Sandra',
    'Berra, Yogi',
    'Berry, Halle',
    'Berry, Wendell',
    'Bethea, Erin',
    'Bevan, Aneurin',
    'Bevel, Ken',
    'Biden, Joseph',
    'Bierce, Ambrose',
    'Biko, Steve',
    'Billings, Josh',
    'Biondo, Frank',
    'Birrell, Augustine',
    'Black, Elk',
    'Blair, Robert',
    'Blair, Tony',
    'Blake, William',
  ];
  

  const travelMethods = [
    'car',
    'car',
    'truck',
    'truck',
    'bike',
    'walk',
    'car',
    'van',
    'bike',
    'walk',
    'car',
    'van',
    'car',
    'truck',
  ];


  const devs = [
    { name: 'Alex', year: 1988 },
    { name: 'Dani', year: 1986 },
    { name: 'Matt', year: 1970 },
    { name: 'Wes', year: 2015 },
  ];
              
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 },
  ];
  

// Exercise 1: Array.prototype.filter()

let veryOldInventors = inventors.filter((inventor) => {
    return inventor.year >= 1500 && inventor.year < 1600;
  });
    


// Exercise 2: Array.prototype.map()

const inventorNames = inventors.map(inventor => {
    return {
        first: inventor.first,
        last: inventor.last
    }
})



// Exercise 3: Array.prototype.sort()

let sortedByBirthYear = inventors.sort((a, b) => a.year - b.year);

// Check your work:
console.log('Exercise 3 my result: ', sortedByBirthYear);
console.log('Exercise 3 correct result: ', [
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
]);



// Exercise 4: Array.prototype.find()

let inventorNamedAda = inventors.find((inventor) => {
  return inventor.first === 'Ada';
}); 

// // Check your work:
console.log('Exercise 4 my result: ', inventorNamedAda);
console.log('Exercise 4 correct result: ', {
  first: 'Ada',
  last: 'Lovelace',
  year: 1815,
  passed: 1852,
});



// Exercise 5: Array.prototype.map()

let firstLast = people.map(name => {
  const [last, first] = name.split(', ');
  return`${first} ${last}`
})

// Check your work:
console.log('Exercise 5 my result: ', firstLast);
// console.log('Exercise 5 correct result: ', [
//   'Carl Becker',
//   'Samuel Beckett',
//   'Mick Beddoes',
//   'Henry Beecher',
//   'Ludwig Beethoven',
//   'Menachem Begin',
//   'Hilaire Belloc',
//   'Saul Bellow',
//   'Robert Benchley',
//   'Peter Benenson',
//   'David Ben-Gurion',
//   'Walter Benjamin',
//   'Tony Benn',
//   'Chester Bennington',
//   'Leana Benson',
//   'Silas Bent',
//   'Lloyd Bentsen',
//   'Ric Berger',
//   'Ingmar Bergman',
//   'Luciano Berio',
//   'Milton Berle',
//   'Irving Berlin',
//   'Eric Berne',
//   'Sandra Bernhard',
//   'Yogi Berra',
//   'Halle Berry',
//   'Wendell Berry',
//   'Erin Bethea',
//   'Aneurin Bevan',
//   'Ken Bevel',
//   'Joseph Biden',
//   'Ambrose Bierce',
//   'Steve Biko',
//   'Josh Billings',
//   'Frank Biondo',
//   'Augustine Birrell',
//   'Elk Black',
//   'Robert Blair',
//   'Tony Blair',
//   'William Blake',
// ]);



// Exercise 6: Array.prototype.some()

let isAdultPresent = devs.some((dev) => {
  return dev.year <= 2007
 })  

// Check your work:
console.log('Exercise 6 my result: ', isAdultPresent);
console.log('Exercise 6 correct result: ', true);



// Exercise 7: Array.prototype.every()

let isEveryone19OrOlder = devs.every((dev) => {
  return dev.year <= 2006
});

// Check your work:
console.log('Exercise 7 my result: ', isEveryone19OrOlder);
console.log('Exercise 7 correct result: ', false);



// Exercise 8: Array.prototype.find()

let commentById = comments.find(comment => comment.id === 823423);

// Check your work:
console.log('Exercise 8 my result: ', commentById);
console.log('Exercise 8 correct result: ', { text: 'Super good', id: 823423 });



// Exercise 9: Array.prototype.findIndex()

let idx = comments.findIndex((comment) => {
  return comment.id === 123523
})


// Check your work:
console.log('Exercise 9 my result: ', idx);
console.log('Exercise 9 correct result: ', 3);
