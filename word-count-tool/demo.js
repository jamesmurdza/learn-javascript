// Inspiraton: https://jsfiddle.net/tfzshhq9/15/

// 👉 First, let's set up some useful "pointers" to reference elements in the webpage
// ℹ️ const means we will not change it again
// ℹ️ querySelector() is a useful way to reference webpage elements
const textArea = document.querySelector("#textArea");
const wordCount = document.querySelector("#wordCount");

// 👉 Here we define countWords(), a function which takes a string as input and returns the number of words in the string.
// ℹ️ .trim() removes any extra whitespace from the beginning or the end of the string
// ℹ️ .split(" ") converts the string into an array of words
// ℹ️ .length gives the length of the array, of course!
// ⚠️ There are still a couple of bugs in this function, due to its simplicity. Can you find them? And fix them?
function countWords(aString) {
      return aString.trim().split(" ").length;
}

// 👉 Here we define update(), a function which we want to be called to "refresh" the count any time that the text changes.
// ℹ️ .trim() removes any extra whitespace from the beginning or the end of the string
function update() {
      wordCount.innerText = "Words: " + countWords(textArea.value);
}

// 👉 Now we set up the event so that the update() function gets the memo.
textArea.addEventListener("input", update);

// 👉 Run update() so the number is correct when the page loads.
update();
