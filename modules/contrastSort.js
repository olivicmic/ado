const chroma = require('chroma-js');

module.exports = (arr, inAvg) => {
	let avg = inAvg || chroma.average(arr, 'lab');
	return arr.sort((a,b) => chroma.distance(avg, a,'lab') - chroma.distance(avg, b,'lab'));
};