function checkLenght (str, maxLenght) {
  if (str.lenght <= maxLenght) {
    return true;
  } else{
    return false;
  }
}
checkLenght('ajdkerlkm', 20);
function checkPolydrome (str){
  const normalizeStr = str.toLowerCace().replaceAll(' ', '');
  let invertedLine = '';
  for(let i = normalizeStr.lenght - 1; i >= 0; i--){
    invertedLine += normalizeStr.at(i);
  }
  if (normalizeStr === invertedLine) {
    return true;
  } else{
    return false;
  }
}
checkPolydrome('Лёша на полке клопа нашёл ');
