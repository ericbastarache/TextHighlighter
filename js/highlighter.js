const newWordBtn = document.getElementById('add-word');
const highlightBtn = document.getElementById('highlight-btn');
const wordField = document.getElementById('word-to-add');
const error = document.getElementById('error');
const toHighlight = document.getElementById('highlight-me');
const listOfWords = document.getElementById('words-list');
const customTextBtn = document.getElementById('add-custom');
const customField = document.getElementById('custom-text');
const customPreview = document.querySelector('.preview');

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

//Event listener for the words list to determine which element is clicked
listOfWords.addEventListener('click', () => {
  deleteWord();
});

const deleteWord = () => {
  //Grab the list of words so that delete buttons can be added to each
  var wordList = document.getElementsByTagName('li');
  var toDelete = [];
  //Loop over the elements in the array and push them to the delete array
  for(var i = 0; i < wordList.length; i++) {
    toDelete.push(wordList[i].innerHTML);
    //Find the item that got clicked and get the index to delete the correct element
    wordList[i].onclick = (e) => {
      var pText = document.getElementById('highlight-me');
      //Remove the highlighting on whichever words element was clicked
      for(var dl = 0; dl < toDelete.length; dl++) {
        if(~pText.innerHTML.indexOf(`<span class="highlight">${toDelete[dl]}</span>`)) {
          let str = pText.innerHTML;
          str = str.split(`<span class="highlight">${toDelete[dl]}</span>`).join(toDelete[dl]);
          pText.innerHTML = str;
        }
      }
      var el = document.querySelector('.words-list');
      el.removeChild(e.target);
      reHighlight();
    }
  }
}

const reHighlight = () => {
  var highlightThese = [];

  var words = document.getElementsByTagName('li');
  for(let wd = 0; wd < words.length; wd++) {
    highlightThese.push(words[wd].innerHTML);
  }
  //Loop over the array of words and add a highlight class for each reoccurrence of the same word.
  for(let hlWd = 0; hlWd < highlightThese.length; hlWd++) {
    if(~toHighlight.innerHTML.indexOf(highlightThese[hlWd])) {
      let str = toHighlight.innerHTML;
      str = str.split(highlightThese[hlWd]).join(`<span class="highlight">${highlightThese[hlWd]}</span>`);
      toHighlight.innerHTML = str;
    }
  }
}

customField.addEventListener('input', (txtVal) => {
  customPreview.innerHTML = txtVal.target.value;
});

customTextBtn.addEventListener('click', () => {
  if(customPreview.innerHTML !== "") {
    toHighlight.innerHTML = customPreview.innerHTML;
    customField.value = "";
    customPreview.innerHTML = "";
    while(listOfWords.firstChild) {
      listOfWords.removeChild(listOfWords.firstChild);
    }
  }
});
