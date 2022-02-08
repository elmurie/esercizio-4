export function debounce(delay, fn) {
	let timerId;
	return function (...args) {
		if (timerId) {
			clearTimeout(timerId);
		}
		timerId = setTimeout(() => {
			fn(...args);
			timerId = null;
		}, delay);
	};
}

export function debounceImmediate(delay, fn) {
	let fired = false;
	return function (...args) {
		if (!fired) {
			fn(...args);
			fired = true;
			setTimeout(() => fired = false, delay);
		}
	};
}

export function isMobile() {
	try{ document.createEvent('TouchEvent'); return true; }
	catch(e){ return false; }
}
