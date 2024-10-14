const isIncludWorkDay = function(startTimeWork, endTimeWork,startTimeMeet, durationMeet) {
  const TimeMinutes = function(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };
  startTimeWork = TimeMinutes(startTimeWork);
  endTimeWork = TimeMinutes(endTimeWork);
  startTimeMeet = TimeMinutes(startTimeMeet);
  const endTimeMeet = durationMeet + startTimeMeet;

  return startTimeMeet >= startTimeWork && endTimeMeet <= endTimeWork;
};
// console.log(isIncludWorkDay('08:00', '17:30', '14:00', 90)); //true
// console.log(isIncludWorkDay('8:0', '10:0', '8:0', 120)); //true
// console.log(isIncludWorkDay('08:00', '14:30', '14:00', 90)); //false
// console.log(isIncludWorkDay('14:00', '17:30', '08:0', 90)); //false

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

