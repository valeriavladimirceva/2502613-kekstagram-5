function checkLenght (str, maxLenght) {
  if (str.length <= maxLenght) {
    return true;
  } else{
    return false;
  }
}
checkLenght('ajdkerlkm', 20);
function checkPolydrome (text){
  const normalizeStr = text.replaceAll(' ', '').toLowerCase();
  let invertedLine = '';
  for (let i = normalizeStr.length - 1; i >= 0; i--) {
    invertedLine += normalizeStr[i];
  }
  if (normalizeStr === invertedLine) {
    return true;
  } else{
    return false;
  }
}
checkPolydrome('Лёша на полке клопа нашёл ');
function returnNumbers (text) {
  let numbers = '';
  for(let i = 0; i <= text.length; i++){
    if (!isNaN(text[i])) {
      numbers += text[i];
    }
  }
  return parseInt(numbers, 10);
}
returnNumbers('2023 год');
returnNumbers('а я томат');
