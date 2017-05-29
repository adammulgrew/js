import 'es6-promise/auto';

const start = () => {
	console.log(`Hello world.`);
};

const init = () => {
	if(!Object.assign || !('classList' in document.createElement('_'))) 
		Load(`${PATHS.JS_ASYNC}/polyfills.min.js`)
			.then(() => { start(); });
	else start();
};

if('addEventListener' in window) window.addEventListener('DOMContentLoaded', init);