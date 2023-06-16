// the getRandomNumber function allows you to get a random number in a given range.
function getRandomNumber() {
  return Math.random() * 10;
}

// The combine2Words function combines two words into one line
function combine2Words(word1, word2, word3) {
  return word1 + "" + word2 + "" + word3;
}

function concatenate(firstWord, secondWord, thirdWord) {
  return firstWord + " " + secondWord + " " + String(thirdWord);
  // // I use the String() function to explicitly convert the numeric value of thirdWord to a string before concatenating. The function concatenate with this three words into one line
}

/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====

There are some Tests in this file that will help you work out if your code is working.

To run the tests for just this one file, type `npm test -- --testPathPattern 3-function-output` into your terminal
(Reminder: You must have run `npm install` one time before this will work!)
==================================
*/

test("concatenate example #1", () => {
  expect(concatenate("code", "your", "future")).toEqual("code your future");
});

test("concatenate example #2", () => {
  expect(concatenate("I", "like", "pizza")).toEqual("I like pizza");
});

test("concatenate doesn't only accept strings", () => {
  expect(concatenate("I", "am", 13)).toEqual("I am 13");
});
