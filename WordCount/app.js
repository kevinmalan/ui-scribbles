const wordsTextArea = document.getElementById("words");
const wordsCountHeader = document.getElementById("wordsCount");

wordsTextArea.addEventListener('input', () => {
    const wordsValue = wordsTextArea.value;
    const wordsArr = wordsValue.trim().split(' ').filter(x => x);
    
    wordsCountHeader.innerHTML = `${wordsArr.length} words`;
});
