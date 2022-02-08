export const on = (event, cb, element) => {
	let target = element?element : window;
	return target.addEventListener(event, (e) => {
		cb(e, e.detail);
	});
};

export const emit = (event, payload, element) => {
	let target = element ? element : window;
	let createdEvent = new CustomEvent(event,{ detail: payload});
	return target.dispatchEvent(createdEvent);
};