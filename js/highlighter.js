const newWordBtn = document.getElementById('add-word');
const highlightBtn = document.getElementById('highlight-btn');
const wordField = document.getElementById('word-to-add');
const error = document.getElementById('error');
const toHighlight = document.getElementById('highlight-me');
var wordArr = [];

newWordBtn.addEventListener('click', () => {
  if(wordField.value !== "") {
    wordArr.push(wordField.value);
    wordField.value = "";
  }

  for(let i = 0; i < wordArr.length; i++) {
    //console.log(wordArr[i]);
    var wordItem = document.createElement('li');
    wordItem.innerHTML = wordArr[i];
    var listOfWords = document.getElementById('words-list');
    listOfWords.append(wordItem);
  }
  wordArr.pop();
});

wordField.addEventListener('keydown', (e) => {
  if(e.code === "Enter") {
    e.preventDefault();
    if(wordField.value !== "") {
      wordArr.push(wordField.value);
      wordField.value = "";
    }
  }

  for(let i = 0; i < wordArr.length; i++) {
    //console.log(wordArr[i]);
    var wordItem = document.createElement('li');
    wordItem.innerHTML = wordArr[i];
    var listOfWords = document.getElementById('words-list');
    listOfWords.append(wordItem);
  }
  wordArr.pop();
})

highlightBtn.addEventListener('click', () => {
  var highlightThese = [];

  var words = document.getElementsByTagName('li');
  for(let wd = 0; wd < words.length; wd++) {
    //console.log(words[wd].innerHTML);
    highlightThese.push(words[wd].innerHTML);

    if(highlightThese.length >= 1) {
      error.style = "display: block; color: #20d037;";
      error.innerHTML = "Thank you for adding words to highlight.";
    } else {
      error.style = "display: block;";
    }
  }
  for(let hlWd = 0; hlWd < highlightThese.length; hlWd++) {
    //console.log(highlightThese[hlWd]);
    if(~toHighlight.innerHTML.indexOf(highlightThese[hlWd])) {
      console.log(highlightThese[hlWd].length);
      toHighlight.innerHTML.replace(highlightThese[hlWd], `<span class='highlight'>${highlightThese[hlWd]}</span>`);
      console.log(toHighlight.innerHTML);
    }
  }
});
