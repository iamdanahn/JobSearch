// HackerRank Challenge - Addepar Internship

// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

/*
 * Complete the 'maxValue' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY rounds
 */

function maxValue(n, rounds) {
	// Write your code here
	const investments = new Array(n).fill(0);

	// rounds[i] is equal to # of rounds in the investment
	// rounds[5] === 5 elements in rounds array
	// rounds[i][3] === 3 elements per round, always (start, end, investment)
	// rounds sample = [ [1,2,100], [2,5,100], [3,4, 100] ]

	rounds.forEach((round) => {
		const investment = round[2]; //investment quantity
		const startIdx = round[0] - 1; // subtract 1 bc, 1 based index
		const endIdx = round[1] - 1;

		for (let i = startIdx; i <= endIdx; i++) {
			investments[i] += investment;
		}
	});

	return Math.max(...Object.values(investments));
}

function selectStock(saving, currentValue, futureValue) {
	// Write your code here
	// always >=1 stocks available
	// always 1+ savings
	// stocks will always be 0-300

	// check profit for each stock
	// find max profits and see if savings can purchase it

	// hash stocks that make a profit
	// key = start value, values = profit
	// sort by values, so we can see what has the highest margins
	// iterate down by margin with whats affordable
	const profitMargins = {};

	for (let idx = 0; idx < currentValue.length; idx++) {
		const profit = futureValue[idx] - currentValue[idx];

		if (profit >= 0 && currentValue[idx] <= saving) {
			profitMargins[currentValue[idx]] = profit;
		}
	}
	// now we have all the positive profit margins
	// check which investments can be purchased from savings

	//if (Math.sum(Object.keys(profitMargins))) { return Math.sum(Object.values(profitMargins))}
}
