/*!
 * xm-graditar-generator <https://github.com/FRickReich/xm-graditar-generator>
 *
 * Copyright (c) 2020, F. Rick Reich.
 * Licensed under the MIT license.
 */

'use strict';

const amount = Math.floor(Math.random() * (9 - 2 + 1)) + 2,
	orientation = Math.floor(Math.random() * (360 - 1 + 1)) + 1 + 'deg',
	hspace = Math.floor(Math.random() * (100 - -100 + 1)) + -100 + '%',
	vspace = Math.floor(Math.random() * (100 - -100 + 1)) + -100 + '%';

const randomColor = () => {
	const letters = '0123456789ABCDEF'.split('');

	let color = '#';

	for (var i = 0; i < 6; i++) {
		color += letters[Math.round(Math.random() * 15)];
	}

	return color;
};

const randomPin = (from, to) => {
	return Math.floor(Math.random() * (to - from + 1)) + from;
};

const generateGraditar = () => {
	let colorlist = '';

	// create colorlist according to set amount

	const percent = 100;
	const part = percent / amount;

	const cycles = amount % percent;

	for (let i = 0; i < cycles; i++) {
		const firstPercentage = Math.floor(part * i);
		const secondPercentage = Math.floor(part * (i + 1));

		colorlist += `${randomColor()} ${randomPin(firstPercentage, secondPercentage)}%${i + 1 === cycles ? '' : ', '}`;
	}

	// create icon for every browser
	const style = 'background-image: ' + 'linear-gradient(' + orientation + ', ' + colorlist + ');';

	// parse the icon
	return style;
};

exports.getGraditar = () => {
	return generateGraditar();
};

exports.getRandomColor = () => {
	return randomColor();
};
