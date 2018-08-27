//=================================================/
//========== Sum All Numbers in a Range ===========/
//=================================================/
/*We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.*/

//the classinc way
const sumAll = (arr) => {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);
  let count = min;

  while(min < max) {
    count += min + 1;
    min++;
  }
  return count;
}
//=================================================/
//=============== Diff two arrays =================/
//=================================================/
/*Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.*/

function diffArray(arr1, arr2) {
  var newArr =arr1.concat(arr2);
  newArr = newArr.filter(function(val, index, array){
    var a1 = array.indexOf(val);
    var a2 = array.lastIndexOf(val);
    return a1 === a2; //Return true only if index of value equals to lastIndexOf value, meanning that only if value found at one place inside the array, if found in two places - will return false and will be filltered;
    });
    return newArr;
}

/* Second way to solve it
function diffArray(arr1, arr2){
  return arr1.concat(arr2).filter(function(v){
    var val1 = arr1.indexOf(v);
    var val2 = arr2.indexOf(v);
    return val1<0 || val2.indexOf(v)<0;
  });
}
*/

//=================================================/
//======= Convert number to romean numrals ========/
//=================================================/
function convertToRoman (num) {
  console.log("convertToRoman");
  var numArr = num.toString().split("");
  var romeanVal = [];
  for(var i = 0; i < numArr.length; i++) {
    romeanVal.unshift(digitToRom(numArr[numArr.length -1 -i] , i));
  }
  romeanVal = romeanVal.join('');
  return romeanVal;
}

/**
 * convert a single value into roman symbol
 * @param val - the value to convert
 * @param index - the index of the current val (If its unity, dozens, hundreds and so)
 */

function digitToRom(val, index) {
  switch (index) {
    //single
    case 0: return singleToRome(val);
      break;
    //Tens
    case 1: return tensToRome(val);
      break;
    //Hundreds
    case 2: return hundredsToRome(val);
      break;
    //Thousands
    case 3: return thousandsToRome(val);
  }
}

//Turning singles to roman digits
function singleToRome(val) {
  var romanVal = "";
  //if value == 0, return empty string
  if (val == 0)
    return romanVal;
  //if value is greater then 0
  for(var i = 1; i <= val; i++) {
    if(i == 4)
      romanVal = "IV";
    else if(i == 5)
      romanVal = "V";
    else if(i == 9)
      romanVal = "IX";

    else
      romanVal += "I";
  }
  return romanVal;
}

//Turning tens to roman digits
function tensToRome(val) {
  var romanVal = "";
  //if value == 0, return empty string
  if (val == 0)
    return romanVal;
  //if value is greater then 0
  for(var i = 1; i <= val; i++) {
    if(i == 4)
      romanVal = "XL";
    else if(i == 5)
      romanVal = "L";
    else if(i == 9)
      romanVal = "XC";
    else
      romanVal += "X";
  }
  return romanVal;
}

//Turning hundreds to roman digits
function hundredsToRome(val) {
  var romanVal = "";
  //if value == 0, return empty string
  if (val == 0)
    return romanVal;
  //if value is greater then 0
  for(var i = 1; i <= val; i++) {
    if(i == 4)
      romanVal = "CD";
    else if(i == 5)
      romanVal = "D";
    else if(i == 9)
      romanVal = "CM";
    else
      romanVal += "C";
  }
  return romanVal;
}

//Turning thousands to roman digits (4000 max)
function thousandsToRome(val) {
  var romanVal = "";
  //if value == 0, return empty string
  if (val == 0)
    return romanVal;
  //if value is greater then 0
  for(var i = 1; i <= val; i++) {
    romanVal += "M";
  }
  return romanVal;
}

//=================================================/
//============== Wherefore art thou ===============/
//=================================================/
/*Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.*/

function whatIsInAName(collection, source) {
  var arr = [];
  var arrOfCollection = Object.keys(collection);
  var arrOfSource = Object.keys(source);
  var collectionVal;//The current value of collection

  for(var i = 0; i < arrOfCollection.length; i++) {
    collectionVal = collection[i];
    if(compareObj(collectionVal, source))
      arr.push(collectionVal);
  }
  return arr;
}

function compareObj(obj1, obj2) {
  var obj1ToArr = Object.keys(obj1);
  var obj2ToArr = Object.keys(obj2);
  var val1, val2;
  for(var i = 0; i < obj2ToArr.length; i++) {
    var val2 = obj2ToArr[i];
    if(obj1.hasOwnProperty(val2)) {
      if(obj1[val2] === obj2[val2]) {
        if (i === obj2ToArr.length - 1)
          return true;
      }
      else
        return false;
    }
    else
      return false;
  }
}

//=================================================/
//============== Search And Replace ===============/
//=================================================/
/*Perform a search and replace on the sentence using the arguments provided and return the new sentence.
 NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

function myReplace(str, before, after) {
  //checking if first char of 'before' is upperCase
  //first letter of after to upperCase
  if(before.charAt(0) == before.charAt(0).toUpperCase()) {
    after = after.split ('');
    after[0] = after[0].toUpperCase ();
    after = after.join ('');
  }

  //replacing str
  str = str.replace(before, after);
  return str;
}

//=================================================/
//================== Pig Latin ====================/
//=================================================/
//Changig the word to "Pig Latin" word (read in wikipaedia)

function translatePigLatin(str) {
  var arrStr = str.split('');
  var partialStr;

  //begin with vowel sound
  if(isVowel(str[0])) {
    str += "way";
  }
  //word don't begin with vowel sound
  else {
    //word begin with consonant clusters
    if(consonantClusters(str[1])) {
      partialStr = str.substr(0 ,2);
      str = str.substr(2, str.length -1) + partialStr + "ay";
    }
    // word don't begin with consonant sound
    else {
        if(isVowel(str[1])) {
          partialStr = str.substr(0 ,1);
          str = str.substr(1, str.length -1) + partialStr + "ay";
        }
        //if two first letters create  consonant sound
        else {
          partialStr = str.substr(0 ,2);
          str = str.substr(2, str.length -1) + partialStr + "ay";
        }
    }
  }
  return str;
}
//checking if word starts with vowel sound
function isVowel(str) {
  switch(str) {
    case "a":
    case "o":
    case "u":
    case "i":
    case "e":
      return true;
    default: return false;
  }
}
//checking if word begin with consonant clusters
function consonantClusters(str) {
  if(str === "h")
    return true;
  return false;
}

//=================================================/
//================= DNA Pairing ===================/
//=================================================/
/*The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.*/

function pairElement(str) {
  var arr = [];
  str = str.split("");
  for(var i = 0; i < str.length; i++) {
    arr.push([str[i], pairChar(str[i])]);
  }

  return arr;
}

function pairChar(char) {
  switch(char) {
    case "A":
      char = "T";
      break;
    case "T":
      char = "A";
      break;
    case "C":
      char = "G";
      break;
    case "G":
      char = "C";
      break;
  }
  return char;
}

//=================================================/
//================ Missing Letters ================/
//=================================================/
/*Find the missing letter in the passed letter range and return it.
 If all letters are present in the range, return undefined..*/

function fearNotLetter(str) {
  var missingChar;
  for(var i = 0; i < str.length -1; i++) {
    var val1 = str.charCodeAt(i);
    var val2 = str.charCodeAt(i + 1);
    if(val1 + 1 !== val2) {
      missingChar = String.fromCharCode(val1 + 1);
      return missingChar;
    }

  }
  return missingChar;
}

//=================================================/
//=================== Boo Who =====================/
//=================================================/
/*Check if a value is classified as a boolean primitive. Return true or false.*/

function booWho(bool) {
  return (bool === true || bool === false)
}

/* Second Way:
return typeof bool = "boolean";
   Third way:
return bool === Boolean(bool);
 */

//=================================================/
//================ Sorted Union ===================/
//=================================================/
/*
 Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays..*/

function uniteUnique(arr) {
  var tempArr = arguments[0];
  var val1, val2;
  for(var i = 1; i < arguments.length; i++) {
    val1 = arguments[i];
    for(var j = 0; j < val1.length; j++) {
      val2 = val1[j];
      if(tempArr.find(function(item) {
        var _item = item;
        return item === val2;
      }) === undefined) {
        tempArr.push(val1[j]);
      }
    }
  }
  return tempArr;
}

//=================================================/
//============  Convert HTML Entities =============/
//=================================================/
/*
 Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  str = str.replace(/&/g, '&amp;');
  str = str.replace(/</g, '&lt;');
  str = str.replace(/>/g, '&gt;');
  str = str.replace(/"/g, '&quot;');
  str = str.replace(/'/g, '&​apos;');
  return str;
}

//=================================================/
//==============  Spinal Tap Case =================/
//=================================================/
/*
 Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 */

function spinalCase(str) {
  var part1,part2, part3;
  var num = num = str.search(/[A-Z]/g);

  if(num === 0) {
    part1 = str.substring(0, 1).toLowerCase();
    part2 = str.substring(1);
    str = part1 + part2;
    num = num = str.search(/[A-Z]/g);
  }

  while(num != -1) {
    if(num != -1) {
      part1 = str.substring(0, num);
      if(part1.charAt(part1.length -1) === " " || part1.charAt(part1.length -1) === "_")
        part1 = part1.substring(0, part1.length - 1);

      part2 = str.substring(num, num + 1).toLowerCase();
      part3 = str.substring(num+1);
      str = part1+ "-"+part2 +part3;
    }
    num = str.search(/[A-Z]/g);
  }
  return str.replace(/\s/g, "-");
}

//=================================================/
//========= Sum All Odd Fibonacci Numbers =========/
//=================================================/
/*
 Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

 The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
 */

function sumFibs(num) {
  var countArr = doFibs(num); //Calling doFibs
  var countOddNums = sumOddNumbers(countArr, num);// calling countOdNums
  return countOddNums;
}

/**
 * @param num: the maximum value of fibonacci
 * @returns {[number,number]} an array of fibonacci series
 */
function doFibs(num) {
  var val1 = 1, val2 = 1, count = 0, countArr = [1, 1];
  if(num === 1 || num ===2) {
    countArr = (num === 1)?  [1] :  [1,1];
    return countArr;
  }
  while(count < num) {
    count = val1 + val2;
    countArr.push(count);
    val1 = val2;
    val2 = count;
    console.log(countArr);
  }
  console.log(countArr);
  return countArr;
}
/**
 * summing up all odd numbers in current fibonacci series
 * @param arr - the fibonacci series
 * @param num - the maximum wanted value of the series
 * @returns {number} - the sum of all odd values
 */
function sumOddNumbers(arr, num) {
  var count =0;
  arr.forEach(function(item) {
    if (item <= num && item % 2 === 1)
      count += item;
  });
  return count;
}

//=================================================/
//================= Sum All Primes ================/
//=================================================/
/*
 Sum all the prime numbers up to and including the provided number.
 A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
 The provided number may not be a prime.
 */

let sumPrimes = (num) => {
  let primesArr = [1];

  for(let i = 0; i <= num; i++) {
    if(isPrime(i))
      primesArr.push(i);
  }
  return sumArr(primesArr);
}

let isPrime = (num) => {
  var isPrime = true, i = 2;
  do {
    if(num % i == 0) {
      isPrime = false;
      break;
    }
    i++;
  } while (i < Math.ceil(num / 2));
  return isPrime;
}

let sumArr = (arr) => {
  let count = 0;
  arr.forEach( (item, index) => {
    count += item;
    console.log(item, index); //for debugging
  })
  return count;
}

//=================================================/
//============Smallest Common Multiple ============/
//=================================================/
/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
*/

const smallestCommons = (arr) => {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);

  let smallestCommon = min * max;

  let doneCalc = 0;

  while (doneCalc === 0) {
    for (let i = min; i <= max; i++) {
      if (smallestCommon % i !== 0) {
        smallestCommon += max;
        doneCalc = 0;
        break;
      }
      else {
        doneCalc = 1;
      }
    }
  }

  return smallestCommon;
};


//=================================================/
//================ Finders Keepers ================/
//=================================================/
/*
 Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument)
*/

function findElement(arr, func) {
  var num;
  for(let i = 0; i < arr.length; i++) {
    if(func(arr[i])) {
      num = arr[i];
      return num;
    }
  }
  return num;
}

//=================================================/
//==================== Drop it ====================/
//=================================================/
/*
 Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
 The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.
 Return the rest of the array, otherwise return an empty array.
*/

const dropElements = (arr, func) => {
  let tempArr = arr;
  let i = 0;

  while (!func (arr[i])) {
    if (!func (arr[i]))
      tempArr = arr.slice (i + 1, arr.length);
    i++;
  }

  return tempArr;

};

//=================================================/
//================== Steamroller ==================/
//=================================================/
/*
 Flatten a nested array. You must account for varying levels of nesting.
*/

function streamrollArray(arr) {
  var tempArr =  streamrollArray2(arr, [] , 0);
  return tempArr;
}

function streamrollArray2(arr, tempArr, index) {
  let curVal = arr[index];

  //Edge point: if reached the end of the array
  if(index === arr.length) {
    return tempArr;
  }

  //if value isn't an array
  if (!Array.isArray (curVal)) {
    tempArr.push(curVal); //push the final value to tempArr
  }

  //if value is an array
  if (Array.isArray (curVal)) {
    streamrollArray2(curVal, tempArr, 0); //Recursive call for the inner Array
  }

  return streamrollArray2(arr, tempArr, ++index); //Recursive call for the outer Array
}

//=================================================/
//================= Binary Agents =================/
//=================================================/
/*
 Return an English translated sentence of the passed binary string.
 The binary string will be space separated.
*/

const binaryAgent = (str) => {
	let count = 0 ,strArr = str.split(" "), currBin, tempStr = "";
	for(let i = 0; i < strArr.length; i++) {
		currBin = strArr[i];
		tempStr += String.fromCharCode(decToBin(currBin));
	}
	return tempStr;
};

//convets a decimal number to binary number
const decToBin = (num) => {
	let count = 0, currDigit, _num = num;
	for(let i = 0; i < num.length; i++) {
		currDigit = num[i];
		count += currDigit * Math.pow(2, num.length -1 -i);
	}
	return count;
};

//=================================================/
//============== Everything Be True ===============/
//=================================================/
/*
 Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
 Remember, you can access object properties through either dot notation or [] notation.
*/

const truthCheck = (collection, pre) => {
	let curCollection;
	let _pre = pre;
	let _collection = collection;
	for(let i = 0; i < collection.length; i++) {
		curCollection = collection[i];
		if(!isTrue(curCollection, pre))
			return false;
	}
	return true;
};

const isTrue = (obj, pre) => {
	let tempBool = Boolean(obj[pre]);
	if(tempBool)
		return true;
	else
		return false;
};

//=================================================/
//============== Arguments Optional ===============/
//=================================================/
/*
 Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
 For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
 Calling this returned function with a single argument will then return the sum:
 var sumTwoAnd = addTogether(2);
 sumTwoAnd(3) returns 5.
 If either argument isn't a valid number, return undefined.
 */

function addTogether(a, b) {
	//if arguments aren't null
	if (arguments.length === 2) {
		//if one argument isn't a number
		if (typeof(a) !== "number" || typeof(b) !== "number")
			return undefined;
		//if both arguments are numbers
		else
			return a + b;
	}
	//if b is null
	else {
		// if a is a number
		if(typeof(a) === "number") {
			return function (n) {
				if (typeof(n) === "number")
					return a + n;
				else
					return undefined;
			}
		}
		// if a isn't a number
		else
			return undefined;
	}
}





