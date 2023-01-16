'use strict';
const chalk = require('chalk');
const chroma = require('chroma-js');
const ado = require('../index');

const hd = [...'0123456789abcdef'];

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

logLabel('Sorted by WCAG contrast ratio with average');
ado.contrastSort(colorArr, { wcag: true }).map((color,i) => colorLog(color, color, true));

//console.log(adjust('#ffffff','#cccccc'),chroma('#ffffff').luminance(), chroma('#cccccc').luminance() );
logLabel('Accent adjusted for WCAG contrast');
colorLog(colorArr[testCount - 1],'thing');
colorLog(colorArr[testCount - 1],'thing', true);

logLabel('Accent adjusted for WCAG contrast');
colorLog('#000','thing');
colorLog('#111','thing');
colorLog('#222','thing');
colorLog('#333','thing');
colorLog('#444','thing');
colorLog('#555','thing');
colorLog('#666','thing');
colorLog('#777','thing');
colorLog('#888','thing');
colorLog('#999','thing');
colorLog('#aaa','thing');
colorLog('#bbb','thing');
colorLog('#ccc','thing');
colorLog('#ddd','thing');
colorLog('#eee','thing');
colorLog('#fff','thing');



//troubleColors();