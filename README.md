# xm-graditar-generator

A graditar generator - a graditar is an avatar based on gradients and colors.

## How to install
Install the module with npm: 

```javascript
npm install xm-graditar-generator
```

## Usage

Import the module like this:

```javascript
const graditarGenerator = require('xm-username-generator');
```

When you then use it like this:

```javascript
const graditar = graditarGenerator.getGraditar();
```

it will return a set of css `background-image` value that you can put into your html code or pass to any object, like this:

```html
<div style="width: 250px; height: 250px; display: block; [GRADITAR_OUTPUT];"></div>
```

you can also pass it, for example, into a React-component.

## License

The original script was used at my old company Xeemio Inc., but since all rights to most of the code returned to me, i am releasing this under MIT license.

---

Copyright (c) 2020 F. Rick Reich. Licensed under the terms of the MIT license. http://frickreich.mit-license.org/