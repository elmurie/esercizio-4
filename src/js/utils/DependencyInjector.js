const loadedDependency = {};

const existingDependency = name => {
	return name in loadedDependency ? loadedDependency[name] : false;
};

const saveDependency = (name, lib) => {
	return new Promise((resolve, reject) => {
		try {
			if (!existingDependency(name)) {
				loadedDependency[name] = lib;
				resolve(false);
			} else {
				resolve(true);
			}
		} catch (e) {
			reject(e);
		}
	});
};

/**
 * This utility class is injected in all components that extends Component
 * and is used to lazy load third-part libraries
 */
export default class DependencyInjector {

	static defaultCatchPromise(error) {
		console.error('Failed to inject dependency', error.stack);
	}

	/**
   * Log utility
   * @param logStr
   */
	log(logStr = '') {
		if (logStr !== '') {
			let myName = this.constructor.name;
			console.debug(`[${myName}] ${logStr}`);
		}
	}


	loadGlideAndExecute(thenPromise, catchPromise) {
		console.log('Loading Glide Carousel');
		if (existingDependency('glide')) {
			return thenPromise(existingDependency('glide'));
		}
		import(/* webpackChunkName: `glide` */ '@glidejs/glide/dist/glide.min')
			.then(res => {
				saveDependency('glide', res);
				thenPromise(res);
			})
			.catch(catchPromise);
	}


	loadFlatpickrLocale(locale, thenPromise, catchPromise) {
		import(/* webpackChunkName: `flatpickr-locale` */ `flatpickr/dist/l10n/${locale}.js`)
			.then(thenPromise)
			.catch(catchPromise);
	}

	loadFlatpickr(thenPromise, catchPromise) {
		this.log('Loading Flatpickr');

		import(/* webpackChunkName: `flatpickr` */ 'flatpickr')
			.then(thenPromise)
			.catch(catchPromise); // js library
	}

	loadSimpleBarAndExecute(thenPromise, catchPromise) {
		this.log('Loading SimpleBar');
		if (existingDependency('simplebar'))
			return thenPromise(existingDependency('simplebar'));
		import(/* webpackChunkName: `simplebar` */ 'simplebar')
			.then(res => {
				saveDependency('simplebar', res);
				thenPromise(res);
			})
			.catch(catchPromise);
	}

	loadExternalScript(url) {
		return new Promise((resolve, reject) => {
			let script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = url;
			script.addEventListener('load', () => resolve(script), false);
			script.addEventListener('error', () => reject(script), false);
			document.body.appendChild(script);
		});
	}
}
