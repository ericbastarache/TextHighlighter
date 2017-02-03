const newWordBtn = document.getElementById('add-word');
const highlightBtn = document.getElementById('highlight-btn');
const wordField = document.getElementById('word-to-add');
var wordArr = [];

newWordBtn.addEventListener('click', () => {
  wordArr.push(wordField.value);
  wordField.value = "";

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
  var words = document.getElementsByTagName('li');
  var highlightThese = [];
  for(let wd = 0; wd < words.length; wd++) {
    //console.log(words[wd].innerHTML);
    highlightThese.push(words[wd].innerHTML);
    console.log(highlightThese);
  }
});
