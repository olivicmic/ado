const chroma = require('chroma-js');

//const quad = x => 1 - (1 - x) * (1 - x);
const quad = x => x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
const expo = x => x === 0 ? 0 : Math.pow(2, 10 * x - 10);

module.exports = (color) => {
	let rgb = chroma(color).rgb();
	let value = chroma(color).get('hsl.l');
	let valLimit = x => 2.15 + (quad(x));
	let baseHue = chroma(color).get('hsl.h');

	return (value < .65) ? chroma(rgb).brighten(valLimit(value/.65)).set('hsl.h',baseHue).hex() : chroma(rgb).darken(valLimit((value - .35) / .65)).set('hsl.h',baseHue).hex();
};