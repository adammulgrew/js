import 'es6-promise/auto';
import riseOn from './require/rise-on';

const start = () => {
	riseOn.init('.js-rise-on', {
		offset: 500,
		onClassName: 'is--on'
	});
};

const init = () => {
	if(!Object.assign || !('classList' in document.createElement('_'))) 
		Load(`${PATHS.JS_ASYNC}/polyfills.min.js`)
			.then(() => { start(); });
	else start();
};

if('addEventListener' in window) window.addEventListener('DOMContentLoaded', init);