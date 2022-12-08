'use strict';
const chalk = require('chalk');
const chroma = require('chroma-js');
const ado = require('../index');
//const ado = require('../index'),

const colorLog = (color, msg) => {
	let cutSpace = msg.length;
	let width = 32;
	let padding = ' '.repeat((width - cutSpace) / 2);
	let filler = line => line ? ' '.repeat(width - line.length) : '';
	let colorLine = line => console.log(chalk.bgHex(color).hex(ado.accent(color)).bold(line + filler(line)));
	colorLine(' '.repeat(width));
	colorLine(padding + msg + padding);
	colorLine(' '.repeat(width));
};

const colorBlocks = (color) => {
	colorLog(color, 'Base Color: ' + color);
	colorLog(ado.accent(color), 'Accent Color');
	colorLog(color, 'Base Color');
	colorLog(ado.highlight(color), 'Highlight Color');
	console.log('\n');
};

const troubleColors = () => {
	colorBlocks('#810059')
	colorBlocks('#ffffff');
	colorBlocks('#000000');
	colorBlocks('#ff0000');
	colorBlocks('#00ff00');
	colorBlocks('#0000ff');
	colorBlocks('#fe4b4b');
	colorBlocks('#6b8de1');
	colorBlocks('#403c25');	
}

const randomColors = () => {
	for (let i = 10; i >= 0; i--) {
		colorBlocks(chroma.random());
	};
};

troubleColors();
randomColors();