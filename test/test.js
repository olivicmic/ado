'use strict';
const chalk = require('chalk');
const chroma = require('chroma-js');
const ado = require('../index');

const colorLog = (color, msg, boost) => {
	let cutSpace = msg.length;
	let width = 32;
	let padding = ' '.repeat((width - cutSpace) / 2);
	let filler = line => line ? ' '.repeat(width - line.length) : '';
	let formatColor = (newCol, line) => chalk.bgHex(color).hex(newCol).bold(line + filler(line));
	let colorLine = line => console.log(formatColor(boost ? ado.boost(color, ado.accent(color)) : ado.accent(color), line));
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

const testCount = 8;

const colorArr = Array.from({ length: testCount }, (p,i) => chroma.random().hex());
const colorAvg = chroma.average(colorArr, 'lab');

const logLabel = msg => console.log('\n',chalk.bgWhite.black.bold(' ' + msg + ' '),'\n');

logLabel('Randomly made colors');
colorArr.map((color,i) => colorLog(color, color));

logLabel('Colors averaged');
colorLog(colorAvg,'average: ' + colorAvg);

logLabel('Colors sorted by distance from average');
ado.contrastSort(colorArr).map((color,i) => colorLog(color, color, true));

//console.log(adjust('#ffffff','#cccccc'),chroma('#ffffff').luminance(), chroma('#cccccc').luminance() );
logLabel('Accent adjusted for WCAG contrast');
colorLog(colorArr[testCount - 1],'thing');
colorLog(colorArr[testCount - 1],'thing', true);

//troubleColors();