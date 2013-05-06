function truncateMiddle(fullString, maxLength) {
  if (fullString.length <= maxLength) return fullString;

  var separator = '...',
    charsToShow = maxLength - separator.length,
    frontChars = Math.ceil(charsToShow/2),
    backChars = Math.floor(charsToShow/2);

  return fullString.substr(0, frontChars) + 
    separator + 
    fullString.substr(fullString.length - backChars);
}

function truncateEnd(fullString, maxLength){
  if(fullString.length <= maxLength) return fullString;
  var separator = '...',
    usableStringLength = maxLength - separator.length;
  return fullString.substr(0,usableStringLength)+(fullString.length > usableStringLength?'...':'');
}

function truncateFront(fullString, maxLength){
  if(fullString.length <= maxLength) return fullString;
  var separator = '...',
    usableStringLength = maxLength - separator.length;
  return (fullString.length>usableStringLength?'...':'') + fullString.substr(fullString.length - usableStringLength, fullString.length-1);
}