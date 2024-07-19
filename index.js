
const tutorials = [
  "what does the this keyword mean?",
  "What Is The Constructor OO Pattern?",
   "Implementing Blockchain Web API" ,
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "What Is JSONP?",
];

function titleCased() {
  return tutorials.map(title => {
    let words = title.split(' ');
    let capitalizedWords = words.map(word => {
      if (word === 'NAN') {
        return 'NaN'
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    });
    return capitalizedWords.join(' ');
  });
}

