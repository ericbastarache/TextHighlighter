const newWordBtn = document.getElementById('add-word');
const wordField = document.getElementById('word-to-add');
var wordArr = [];
newWordBtn.addEventListener('click', () => {
  wordArr.push(wordField.value);
  wordField.value = "";

  for(var i = 0; i < wordArr.length; i++) {
    console.log(wordArr[i]);
    var wordItem = document.createElement('li');
    wordItem.innerHTML = wordArr[i];
    var listOfWords = document.getElementById('words-list');
    listOfWords.append(wordItem);
  }
  wordArr.pop();
  console.log(wordArr);
});
