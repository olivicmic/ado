const chroma = require('chroma-js');
const average = require('./average');

module.exports = (color) => {
	let rgb = chroma(color).rgb();
	let value = average(rgb);
	let valAdjust = 255 - value;
	let baseSat = chroma(color).get('hsl.h');
	let final = chroma(rgb).brighten(valAdjust/150).set('hsl.h',baseSat).hex();
	//console.log(baseSat);
	return final;
};