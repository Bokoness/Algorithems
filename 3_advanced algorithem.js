//=================================================/
//========= Validate US Telephone Numbers =========/
//=================================================/
/**
 * Return true if the passed string is a valid US phone number.
 The user may fill out the form field any way they choose as long as it is a valid US number.
 * For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
 */

function telephoneCheck(str) {
	if( firstPat(str) || secondPat(str) || thirdPat(str) || fourthPat(str) || fifthPat(str) )
		return true;

	return false;
}

/**
 * Searched for characters in the pattern
 * @param pattern: the phone number
 * @returns {boolean}: true if there are no other symbols then numbers or ( or ) or -, false if there are other symbools
 */
const symboolValidate = (str) => {
	let chars = "";
	//if all string is numeric only
	if( !(/\D/.test(str)) )
		return true;
	//string has other symbols too
	else {
		chars = str.match(/\D/g);// chars = none numeric
		for(let i = 0; i < chars.length; i++) {
			//if(none numeric value isn't "()-" return false
			if( !(/(\x2D|\x28|\x29)/g.test(chars)) )
				return false;
		}
		return true; //if all none-numeric values are "()-" return true
	}
};

//555-555-5555
const firstPat = (str) => {
	if( (str.length === 12 && /[0-9]{3}-[0-9]{3}-[0-9]{4}/g.test(str)) || (str.length === 14 && /1\s[0-9]{3}-[0-9]{3}-[0-9]{4}/g.test(str)))
		return true;
	return false;
};

//(555)555-5555
const secondPat = (str) => {
	if((str.length === 13 && /\x28[0-9]{3}\x29[0-9]{3}-[0-9]{4}/g.test(str)) || str.length === 14 && /1\x28[0-9]{3}\x29[0-9]{3}-[0-9]{4}/g.test(str) )
		return true;
	return false;
};

//(555) 555-5555
const thirdPat = (str) => {
	if((str.length === 14 && /\x28[0-9]{3}\x29\s[0-9]{3}-[0-9]{4}/g.test(str)) || (str.length === 16 && /1\s\x28[0-9]{3}\x29\s[0-9]{3}-[0-9]{4}/g.test(str)))
		return true;
	return false;
};

//555 555 5555
const fourthPat = (str) => {
	if((str.length === 12 && /[0-9]{3}\s[0-9]{3}\s[0-9]{4}/g.test(str)) || (str.length === 14 && /1\s[0-9]{3}\s[0-9]{3}\s[0-9]{4}/g.test(str)) )
		return true;
	return false;
};

//5555555555
const fifthPat = (str) => {
	if((str.length === 10 && /[0-9]{10}/g.test(str)) || (str.length === 11 && /1[0-9]{10}/g.test(str)) )
		return true;
	return false;
};


//=================================================/
//=============== Record Collection ===============/
//=================================================/
/**
 *You are given a JSON object representing a part of your musical album collection. Each album has several properties and a unique id number as its key. Not all albums have complete information.

 *Write a function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"), and a value (like "Addicted to Love") to modify the data in this collection.

 *If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.

 *Your function must always return the entire collection object.
 */

// Setup
var collection = {
	"2548": {
		"album": "Slippery When Wet",
		"artist": "Bon Jovi",
		"tracks": [
			"Let It Rock",
			"You Give Love a Bad Name"
		]
	},
	"2468": {
		"album": "1999",
		"artist": "Prince",
		"tracks": [
			"1999",
			"Little Red Corvette"
		]
	},
	"1245": {
		"artist": "Robert Palmer",
		"tracks": [ ]
	},
	"5439": {
		"album": "ABBA Gold"
	}
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
	//adding complete data
	if(prop !== "tracks" && value != "")
		collection[id][prop] = value;

	//adding incomplete data
	//if prop is tracks
	else if(prop === "tracks") {
		//if collection don't have tracks prop
		if(!collection[id].hasOwnProperty("tracks"))
			collection[id][prop] =[];
		// if value isn't empty - push it to tracks
		if(value !== "")
			collection[id][prop].push(value);
		// if value is empty
	}
	if(value === "")
		delete collection[id][prop];

			/*
			collectionCopy1[id].push(value);
		else if(value === "")
			;*/

	return collection;
}

//=================================================/
//============== Symmetric Difference =============/
//=================================================/
/**
 Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

 Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
 */

/*const sym = (...args) => {
	let symArr = args[0];
	let curVal;
	for(let i = 0; i < args.length - 1; i++) {
		symArr = symDiffArray(symArr, args[i+1]);
	}
	return symArr;
};

//takes two arrays and concats them to one symmetric difference array
const symDiffArray = (arr1, arr2) => {
	let symArr = [], curVal;
	for(let i = 0; i < arr1.length; i++) {
		curVal = arr1[i];
		if(!searchVal(curVal, arr2) && !searchVal(curVal, symArr))//if val isn't found inside arr2 or inside symArr
			symArr.push(curVal);
	}
	for(let i = 0; i < arr2.length; i++) {
		curVal = arr2[i];
		if(!searchVal(curVal, arr1) && !searchVal(curVal, symArr))//if curVal isn't found inside arr1 or inside symArr
			symArr.push(curVal);
	}
	return symArr;
};

//return true if value found inside the array
const searchVal = (val, array) => {
	let curVal;
	//checking if val doesn't exists in other arrays
	for(let i = 0; i < array.length; i++ ) {
		curVal = array[i];
		if(curVal === val)
			return true;
	}
	return false;
};
*/

//shorter way:
const sym = (...args) => {
	return args.reduce(symDiffArray);
};

//takes two arrays and concats them to one symmetric difference array
const symDiffArray = (arr1, arr2) => {
	let symArr = [], curVal;
	for(let i = 0; i < arr1.length; i++) {
		curVal = arr1[i];
		if(!arr2.includes(curVal) && !symArr.includes(curVal))//if val isn't found inside arr2 or inside symArr
			symArr.push(curVal);
	}
	for(let i = 0; i < arr2.length; i++) {
		curVal = arr2[i];
		if(!arr1.includes(curVal) && !symArr.includes(curVal))//if curVal isn't found inside arr1 or inside symArr
			symArr.push(curVal);
	}
	return symArr;
};

sym([1,2,3],[4,5,6],[1,2,4,5,6,7,8]);

//=================================================/
//================== Exact Change =================/
//=================================================/
/**
 Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
 cid is a 2D array listing available currency.

 1. Return the string "Insufficient Funds" if cash-in-drawer is less than the change due.
 2. Return the string "Closed" if cash-in-drawer is equal to the change due.
 3. Otherwise, return change in coin and bills, sorted in highest to lowest order.

 */

const checkCashRegister = (price, cash, cid) => {
	//initializes change
	let change = [["PENNY", 0.00], ["NICKEL", 0.00], ["DIME",0.00], ["QUARTER", 0.00], ["ONE", 0.00], ["FIVE", 0.00], ["TEN", 0.00], ["TWENTY", 0.00], ["ONE HUNDRED", 0.00]], wantedChange = cash - price;

	//2. if cash in drawer is equal or less then change due
	if(isClosed(cid, wantedChange))
		return "Closed";
	// if cash in drawer is higher then change due
	else {
		change = returnChange(wantedChange, change, cid);
		change = Array.isArray(change) ? change.filter((item) => item[1] !== 0).reverse() : change;

		return change;
	}
};

const returnChange = (wantedChange ,change, cid) => {
	switch (true) {
		//edge points:
		case wantedChange <= 0:
			return change;
			break;

		//100 ONE HUNDRED
		case wantedChange >= 100 && cid[8][1] >= 100:
			cid[8][1] -= 100 ;
			change[8][1] += 100;
			return returnChange(wantedChange -= 100, change, cid);
			break;

		//20 TWENTY
		case wantedChange >= 20 && cid[7][1] >= 20 :
			cid[7][1] -= 20;
			change[7][1] += 20;
			return returnChange(wantedChange -= 20,  change,cid);
			break;

		//10 TEN
		case wantedChange >= 10 && cid[6][1] >= 10:
			cid[6][1] -= 10;
			change[6][1] += 10;
			return returnChange(wantedChange -= 10,  change,cid);
			break;

		//5 FIVE
		case wantedChange >= 5 && cid[5][1] >= 5:
			cid[5][1] -= 5;
			change[5][1] += 5;
			return returnChange(wantedChange -= 5,  change ,cid);
			break;

		//1 ONE
		case wantedChange >= 1 && cid[4][1] >= 1:
			cid[4][1] -= 1;
			change[4][1] += 1;
			return returnChange(wantedChange -= 1,  change ,cid);
			break;

		//0.25 QUARTER
		case wantedChange >= 0.25 && cid[3][1] >= 0.25:
			cid[3][1] -= 0.25;
			change[3][1] += 0.25;
			return returnChange(wantedChange -= 0.25, change, cid);
			break;

		//0.10 DIME
		case wantedChange >= 0.10 && cid[2][1] >= 0.10:
			cid[2][1] -= 0.10;
			change[2][1] += 0.10;
			return returnChange(wantedChange -= 0.10, change, cid);
			break;

		//0.5 NICKEL
		case wantedChange >= 0.5 && cid[1][1] >= 0.5:
			cid[1][1] -= 0.5;
			change[1][1] += 0.5;
			return returnChange(wantedChange -= 0.5, change, cid);
			break;

		//0.1 PENNY
		case wantedChange > 0 && cid[0][1] >= 0.01 :
			cid[0][1] -= 0.01;
			change[0][1] += 0.01;
			return returnChange(wantedChange -= 0.01, change, cid);
			break;

		//Insufficient Funds
		default:
			return "Insufficient Funds";
			break;
	}
};

//checks if cash in drawer equals or less then 0
const isClosed = (cid, wantedChange) => {
	return (sum(cid) - wantedChange) === 0;
};

const sum = (arr) => {
	let count = 0;
	arr.forEach((item) => {
		count += item[1];
	});
	return count;
};

//=================================================/
//================ Inventory Update================/
//=================================================/
/**
 Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
 Update the current existing inventory item quantities (in arr1).
 If an item cannot be found, add the new item and quantity into the inventory array.
 The returned inventory array should be in alphabetical order by item.
 */

const updateInventory = (arr1, arr2) => {
	for(let i = 0; i < arr2.length; i++)
		arr1 = addToInentoryCategory(arr2[i], arr1);
	arr1 = alphabeticalOrder(arr1);
	return arr1;
};

//adds items of specific category to inventory
const addToInentoryCategory = (categoryItems, arr1) => {
	let categoryItemFound = false;
	for(let i = 0; i < arr1.length; i++) {
		if(arr1[i][1] === categoryItems[1]) {
			arr1[i][0] += categoryItems[0];
			categoryItemFound = true;
		}
	}
	if (!categoryItemFound)
		arr1.push(categoryItems);

	return arr1;
};

//sort the array by alphabetical order
const alphabeticalOrder = (arr) => {
	let val1, val2, tempVal;
	for(let i = 0; i < arr.length; i++) {
		val1 = arr[i][1];
		for(let j = i + 1; j < arr.length; j++) {
			val2 = arr[j][1];
			if(higherString(val1, val2) === 1) {
				tempVal = arr[i];
				arr[i] = arr[j];
				arr[j] = tempVal;
			}
		}
	}
	return arr;
};
//Return the higher value string
const higherString = (str1, str2) => {
	str1 = str1.toLowerCase();
	str2 = str2.toLowerCase();
	for(let i = 0; i < str1.length; i++ ) {
		if(str1[i] > str2[i])
			return 1;
		else if(str2[i] > str1[i])
			return 2;
	}
};
// Example inventory lists
var curInv = [
	[21, "Bowling Ball"],
	[2, "Dirty Sock"],
	[1, "Hair Pin"],
	[5, "Microphone"]
];

var newInv = [
	[2, "Hair Pin"],
	[3, "Half-Eaten Apple"],
	[67, "Bowling Ball"],
	[7, "Toothpaste"]
];

addToInentoryCategory(newInv[2], curInv);


//=================================================/
//=============== No repeats please ===============/
//=================================================/
/**
 Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.
 For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
 */

const permAlone = (num) => {
  let arr = (num + '').split(''),
  count = 0;

  const swap = (a, b) => {
    var tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  };

  //checks that there are no following letters
  const isFollowingLetters = (arr) => {
	  for(let i = 0; i < arr.length; i++) {
		  if(arr[i] === arr[i+1])
		  	return true;
	  }
	  return false;
  };

  const generate = (n) => {
    if (n == 1) {
      //Insert a method call that checks there are not following letters
	  if(!isFollowingLetters(arr))
	  	count++;
    }
    else {
      for (var i = 0; i != n; ++i) {
        generate(n - 1);
        swap(n % 2 ? 0 : i, n - 1);
      }
    }
  };

  generate(arr.length);
  return count;
};

console.log(
permAlone("aba")
);

//=================================================/
//================= Make a Person =================/
//=================================================/
/**
Fill in the object constructor with the following methods below:
    getFirstName()
    getLastName()
    getFullName()
    setFirstName(first)
    setLastName(last)
    setFullName(firstAndLast)
Run the tests to see the expected output for each method.
The methods that take an argument must accept only one argument and it has to be a string.
These methods must be the only available means of interacting with the object.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/
  let Person = function(person) {
 	let firstName = person.split(" ")[0];
	let lastName = person.split(" ")[1];
	let fullName = person;

	//----------- Methods ------------------
	//getters
	this.getFirstName = () =>firstName;
	this.getLastName = () => lastName;
	this.getFullName = () => fullName;
	//setters
	this.setFirstName = (name) => {
		firstName = name;
		fullName = firstName + " " + lastName;
	};
	this.setLastName = (last) => {
		lastName = last;
		fullName = firstName + " " + lastName;
	};
	this.setFullName = (full) => {
		fullName = full;
		firstName = fullName.split(" ")[0];
		lastName = fullName.split(" ")[1];
	};
};

//=================================================/
//================= Map the Debris ================/
//=================================================/
/**
Return a new array that transforms the element's average altitude into their orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/

/*avgAlt is the distance between an object and the earth surface, and you need the distance from the object to the earth center, so...
You need to add something to get semiMajor, guess what that is, it's one of the data you already have there
Also note you should use Pi in the formula
semiMajor is avgAlt + earthRadius
*/
const orbitalPeriod = (arr) => {
	let tempArr = [];
	for(let i = 0; i < arr.length; i++) {
		tempArr.push(findOrbitalPeriod(arr[i]));
	}
	return tempArr;
};

const findOrbitalPeriod = (val) => {
	let GM = 398600.4418;
	let earthRadius = 6367.4447;
	let semiMajor = earthRadius + val.avgAlt;
	let t = Math.round((2 * Math.PI) * Math.pow(Math.pow(semiMajor, 3) / GM, 0.5));
	return {name: val.name, orbitalPeriod: t};
};

//=================================================/
//================= Map the Debris ================/
//=================================================/
/**
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.
Index	0	1	2	3	4
Value	7	9	11	13	15

Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6
*/

const pairwise = (arr, arg) => {
	let count = 0, secondPair;
	for( let i = 0; i < arr.length; i++) {
		for(let j = i + 1; j < arr.length; j++) {
			if(arr[i] + arr[j] === arg) {
				count = count > 0 ? count : i + j;
				secondPair = findSecondPair(arr, arg, i, j);
				if(Array.isArray(secondPair))
					return count + secondPair[0] + secondPair[1];
			}
		}
	}
	return count;
};

const findSecondPair = (arr, arg, idx1, idx2) => {
	let secondPair = [];
	for( let i = 0; i < arr.length; i++) {
		if(i === idx1 || i === idx2)
			continue;
		for(let j = i + 1; j < arr.length; j++) {
			if(j === idx1 || j === idx2)
				continue;
			if(arr[i] + arr[j] === arg)
				return [i, j];
		}
	}
};
console.log(
pairwise([1, 4, 2, 3, 0, 5], 7)
);
