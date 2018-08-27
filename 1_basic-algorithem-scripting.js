//==============================================================//
//============ BASIC ALGORITHEM SCRIPTING ======================//
//==============================================================//


//======================== Sort array ==========================//
//My algorithem for sorting an array

function mySort(arr) {

  var i=0, j=arr.length-1;
  var lowestVal = arr[i];
  var currI, currJ, temp;

  while(i < j) {

    while( j > i) {
      currI = arr[i];
      currJ = arr[j];
      if(currI > currJ) {
        temp = currJ;
        arr[j] = arr[i];
        arr[i] = currJ;
      }
      j--;
    }
    
    i++;
    j = arr.length -1;
  }
  return arr;
}

//===================== Revesing a string: =====================//
function reverseString(str) {
  return str.split("").reverse().join("");
}

//===================== Factorial algorithem ===================//
function factorialize(num) {
  fact = 1;
  for(let i = 1; i <= num; i++) {
    fact *= i;
  }
  num = fact;
  return num;
}

//===================== Palidrom Algorithem ====================//
function palidrom(str) {
  str=str.replace(/[^a-z + 0-9]/gi, ' ');//deleting all non-alphanumeric
  str=str.replace(/\s/g,'');//deleting all whitespaces in string
  str=str.toLowerCase();// transforming all letters to lower case
  
  for(var i=0; i<str.length /2; i++) {
    if(str.charAt(i) != str.charAt(str.length-1-i))
      return false;
  }
  return true;
}

//================= Find longest length in string ===============//
function findLongestWord(str) {
			
	var strArr = str.split(" ");
	var longest = strArr[0].length;
  
	for(var i=1; i<strArr.length; i++) {
		if(strArr[i].length > longest)
			longest = strArr[i].length;
	}
	return longest;
}
//=========== All first letters in string to uppercase ==========//
function titleCase(str) {
	str = str.toLowerCase();
	var strArr = str.split(" ");
	var tempChar;
	
	for(var i=0; i<strArr.length; i++) {
    tempChar = strArr[i].substr(0, 1).toUpperCase();
    strArr[i] = tempChar + strArr[i].substr(1,strArr[i].length);
	}
	
	str = strArr.join(" ");
	return str;
}
//=========== Find the largest values in all sub arrays =========//
function largestOfFour(arr) {
	var largestArr = [];
	var largestVal = 0;
	for(var i=0; i<arr.length; i++){
    for(var j=0; j<arr[i].length; j++) {
	    if(arr[i][j] > largestVal)
		    largestVal = arr[i][j];
    }
    largestArr.push(largestVal);
    largestVal = 0;
	}
			  
	return largestArr;
}
//======================== Confirm the ending ===================//
//checks if target equal to str's ending
function confirmEnding(str, target) {
  var tempStr = str.substr(str.length-target.length, str.length);
  if(target == tempStr)
    return true;
  else
	  return false;
}
//======================== Repeat String =========================//
//repeats the string(str) multiple times (num)
function repeatStringNumTimes(str, num) {
  var repeatStr="";
  for(var i=0; i<num;i++) {
	repeatStr += str;
  }
  return repeatStr;
}
//====================== Truncate String =========================/
function truncateString(str, num) {
  if(str.length > num) {
    if(num >= 3)
      tempStr = str.substr(0, num-3).concat("...");
    else
      tempStr= str.substr(0, num).concat("...");
  }
  else {
    tempStr = str;
  }
  return tempStr;
}
//====================== Chunky Monkey=========================/
//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
  var length = arr.length;
  var partialArrayLength = arr.length / size;
  var chunked2DArr = new Array();
  var curVal = arr[0];
  var j = partialArrayLength;

  for(var i = 0; i < arr.length; ) {
      chunked2DArr.push(arr.slice(i, i+size));
      arr = arr.slice(i+size, arr.length);
    }
  return chunked2DArr;
}
//====================== Array Slash =========================/
//remove the first elements in the array depending on howMany param
function slasher(arr, howMany) {
  for(var i=0; i<howMany; i++) {
    arr.shift();
  }
  return arr;
}
//======================= Mutations ==========================/
//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
  var charFound = false;
  var a, b;
  for(var i=0; i<arr[1].length; i++) {
    b = arr[1][i].toLowerCase();
    for(var j=0; j<arr[0].length && !charFound; j++) {
      a = arr[0][j].toLowerCase();
      if(a==b)
        charFound = true;
    }
    if(charFound === false)
      return false;
    charFound = false;
  }
  return true;
}
//===================== Falsy Bouncer ========================/
//Remove all falsy values from an array.
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN
function bouncer(arr) {
  var cleanArr = new Array();
  var firstVal, secondVal;

  for(var i=0, j=0; i<arr.length; i++) {
    firstVal = arr[i];
    secondVal = cleanArr[j];
    if( arr[i])  {
      cleanArr[j] = arr[i];
      j++;
    }
  }
  return cleanArr;
}
//==================== Seek and destroy ======================/
//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr) {
  var destroyedArr = new Array();
  var currentVal = arr[0], destroyerVal=arguments[1];
  var needToBeDestroyed;

  for(var i=0; i<arr.length; i++) {

    needToBeDestroyed = false;
    currentVal = arr[i];

    for(var j=1; j<arguments.length && !needToBeDestroyed; j++) {

      destroyerVal = arguments[j];
      if(currentVal == destroyerVal) {
        needToBeDestroyed = true;
      }

    }

    if (!needToBeDestroyed) {
      destroyedArr.push(currentVal);
    }

  }

  console.log(arguments.length);
  return destroyedArr;
}
//==================== Where do i belong ======================/
//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number
function getIndexToIns(arr, num) {
  arr = mySort(arr);//sorting the array with mySort algorithem at the top of the code here
  var curVal;
  for(var i=0; i<arr.length; i++) {
    curVal = arr[i];
    //if num smaller them curVal
    if(num < curVal)
      if(i === 0)
        return 0;
      else
        return i - 1;
    //if num equal to curVal
    if(num == curVal) {
      return i;
    }
    //if num bigger then curVal
    if(num > curVal)
      if(i == arr.length-1 || num < arr[i+1])
        return i + 1;
  }
}
//==================== Ceaser chiper ======================/
/* One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on. */
function plus13(char) {
  switch(char) {
    case 'A': char = 'N';
    break;
    case 'B': char = 'O';
    break;
    case 'C': char = 'P';
    break;
    case 'D': char = 'Q';
    break;
    case 'E': char = 'R';
    break;
    case 'G': char = 'T';
    break;
    case 'H': char = 'U';
    break;
    case 'I': char = 'V';
    break;
    case 'J': char = 'W';
    break;
    case 'K': char = 'X';
    break;
    case 'L': char = 'Y';
    break;
    case 'M': char = 'Z';
    break;
    case 'N': char = 'A';
    break;
    case 'O': char = 'B';
    break;
    case 'P': char = 'C';
    break;
    case 'Q': char = 'D';
    break;
    case 'R': char = 'E';
    break;
    case 'S': char = 'F';
    break;
    case 'T': char = 'G';
    break;
    case 'U': char = 'H';
    break;
    case 'V': char = 'I';
    break;
    case 'W': char = 'J';
    break;
    case 'X': char = 'K';
    break;
    case 'Y': char = 'L';
    break;
    case 'Z': char = 'M';
    break;
  }
  return char;
}

function rot13(str) { 
  var c = str.charAt(i);
  var tempStr="";
  for(var i=0; i<str.length; i++) {
    c = str.charAt(i);
    c = plus13(c);
    tempStr += c;
  }
  return tempStr;
}




