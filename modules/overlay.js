const chroma = require('chroma-js');

const blend = (color, shade) => chroma.blend(color, shade,'overlay').hex();

module.exports = (color) => (chroma(color).get('hsl.l') < .65) ? blend(color, '#ffffff') : blend(color, '#000000');