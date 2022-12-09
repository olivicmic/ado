const chroma = require('chroma-js');

module.exports = (arr, config = {}) => {
	let avg = config.base || chroma.average(arr, 'lab');
	let method = x => config.wcag ? chroma.contrast(avg, x) : chroma.distance(avg, x,'lab');
	return arr.sort((a,b) => method(a) - method(b));
};