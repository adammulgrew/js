import throttle from 'lodash.throttle';

const defaults = {
	offset: 500,
	onClassName: 'is--on'
};

const init = (sel, config) => {
	const element = document.querySelector(sel);

	if(!element) return;
	
	const settings = Object.assign({}, defaults, config);

	//console.log(`Hello world.`);
	//debugger;

	// Select component and assign to a variable
	let scrollRef = 0;
	const isScrollingDown = (current, previous) => current > previous;
	const maybeStick = pos => {if(pos > settings.offset &&  !element.classList.contains(settings.onClassName)) element.classList.add(settings.onClassName); }
	const dontStick = pos => {if(pos > settings.offset &&  element.classList.contains(settings.onClassName)) element.classList.remove(settings.onClassName); }
	const scrollHandler = throttle(() => {
			let scrollPos = window.scrollY - 10;
			//console.log('Scrolling...');
			//pageOffsetY instead of pageY??

			if(isScrollingDown(scrollPos, scrollRef)) maybeStick(scrollPos);
			if(!isScrollingDown(scrollPos, scrollRef)) dontStick(scrollPos);
			scrollRef = scrollPos;
		}, 16);

	// When user starts to scroll back up, component disappears off-screen again


	// Add event listener to the window that checks scroll position,
	//if user scrolls to eg. 50% down the page, class name added to component
	window.addEventListener('scroll', scrollHandler);

	element.addEventListener('click', e => {
		element.classList.remove(settings.onClassName);
		window.removeEventListener('scroll', scrollHandler);
	})

};

export default { init };