const newWordBtn = document.getElementById('add-word');
const highlightBtn = document.getElementById('highlight-btn');
const wordField = document.getElementById('word-to-add');
const error = document.getElementById('error');
const toHighlight = document.getElementById('highlight-me');
const listOfWords = document.getElementById('words-list');
var wordArr = [];

//Add event handler to the button to add a word to the list
newWordBtn.addEventListener('click', () => {
  if(wordField.value !== "") {
    wordArr.push(wordField.value);
    wordField.value = "";
  }
  //Loop over the word array and create a list item to append the word to
  for(let i = 0; i < wordArr.length; i++) {
    var wordItem = document.createElement('li');
    wordItem.innerHTML = wordArr[i];
    listOfWords.append(wordItem);
  }
  wordArr.pop();
});

//Add event handler to the word field so that you can press enter instead of clicking the button
wordField.addEventListener('keydown', (e) => {
  if(e.code === "Enter") {
    e.preventDefault();
    if(wordField.value !== "") {
      wordArr.push(wordField.value);
      wordField.value = "";
    }
  }
  //Loop over the word array and create a list item to append the word to
  for(let i = 0; i < wordArr.length; i++) {
    var wordItem = document.createElement('li');
    wordItem.innerHTML = wordArr[i];
    listOfWords.append(wordItem);
  }
  wordArr.pop();
})
/*Loop over the li elements and get a words array, with which an error/success class is added
depending on what happens (doesn't currently display the red colour if array is empty)*/
highlightBtn.addEventListener('click', () => {
  var highlightThese = [];

  var words = document.getElementsByTagName('li');
  for(let wd = 0; wd < words.length; wd++) {
    highlightThese.push(words[wd].innerHTML);

    if(highlightThese.length >= 1) {
      error.style = "display: block; color: #20d037;";
      error.innerHTML = "Thank you for adding words to highlight.";
    } else {
      error.style = "display: block;";
    }
  }
  //Loop over the array of words and add a highlight class for each reoccurrence of the same word.
  for(let hlWd = 0; hlWd < highlightThese.length; hlWd++) {
    if(~toHighlight.innerHTML.indexOf(highlightThese[hlWd])) {
      let str = toHighlight.innerHTML;
      str = str.split(highlightThese[hlWd]).join(`<span class="highlight">${highlightThese[hlWd]}</span>`);
      toHighlight.innerHTML = str;
    }
  }
});

listOfWords.addEventListener('click', () => {
  deleteWord();
});

const deleteWord = () => {
  //Grab the list of words so that delete buttons can be added to each
  var wordList = document.getElementsByTagName('li');
  var toDelete = [];
  for(var i = 0; i < wordList.length; i++) {
    toDelete.push(wordList[i]);
    wordList[i].onclick = (e) => {
      var index = toDelete.indexOf(e.target);
      var el = document.querySelector('.words-list');
      el.removeChild(e.target);
    }
  }
}
