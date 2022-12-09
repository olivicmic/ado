const chroma = require('chroma-js');

const boost = (base, second, amt = 0) => {
	let ratio = chroma.contrast(base, second);

	if (amt >= 10 || second === '#ffffff' || second === '#000000' || ratio >= 4.5) {
		return second;
	} else if (chroma(base).luminance() > chroma(second).luminance()) {
		return boost(base, chroma(second).darken(.125 * (1 + amt)).hex(), amt + 1);
	} else {
		return boost(base, chroma(second).brighten(.125 * (1 + amt)).hex(), amt + 1);
	}
};

module.exports = boost;