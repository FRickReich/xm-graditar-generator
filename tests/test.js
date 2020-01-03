'use strict';

const graditarGenerator = require('./../index');

const graditar = graditarGenerator.getGraditar();
const randomColor = graditarGenerator.getRandomColor();

console.log(`Random color, for testing: ${randomColor}\nGenerated Graditar code: ${graditar}`);
