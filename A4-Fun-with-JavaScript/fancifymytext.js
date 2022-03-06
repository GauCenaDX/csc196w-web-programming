// PX to PT converter:
// -------------------
//
// 1inch = 96px, 1inch = 72pt
//   -> 96px = 72pt
//   -> 1px = 72pt / 96
//   -> 1pt = 96px / 72

const biggerbtn = document.getElementById('bigger-btn');
const textarea = document.getElementById('textarea');
const fancyradio = document.getElementById('fancy-radio');
const boringradio = document.getElementById('boring-radio');

const changeTextSize = () => {
  console.log('Bigger button is clicked.');
  textarea.style.fontSize = "32px";  //-- 24pt
}

const setFancyText = () => {
  console.log('Fancy radio is selected.');
  textarea.style.fontWeight = "bold";
  textarea.style.color = "blue";
  textarea.style.textDecoration = "underline";
}

const setBoringText = () => {
  console.log('Boring radio is selected.');
  textarea.style.fontWeight = "normal";
  textarea.style.color = "black";
  textarea.style.textDecoration = "none";
}

const mooText = () => {
  console.log('Moo button is clicked.');
  console.log('Text area value is:', textarea.value);
  
  textarea.style.textTransform = "uppercase";
  
  let textareaValue = textarea.value;
  const sentences = textareaValue.split(".");
  textareaValue = sentences.join("Moo.");
  textarea.value = textareaValue;
}