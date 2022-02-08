import 'regenerator-runtime/runtime';
import '../scss/main.scss';
/* eslint-disable-next-line */
__webpack_public_path__ = window.__webpack_public_path__

export default class App {
	init() {
		console.log('app starts');
		this.importLayout();
	}


	//TODO: import labstract/layout and not indexLayout if no data-js-layout is filled
	importLayout() {
		let htmlTag = document.querySelector('html');
		let layout = (htmlTag.dataset.jsLayout && htmlTag.dataset.jsLayout.length >0)
			? htmlTag.dataset.jsLayout
			: this.importCommonLayout();
		import( /* webpackChunkName:`layout-[request]` */ /* webpackMode: "lazy" */ `./layouts/${layout}` )
			.then( ({ default: layout }) => {
				let newLayout = new layout();
				newLayout.init();
			})
			.catch(error => {
				console.error('Failed to load layout, check data-js-layout at root if correct');
				console.dir(error, error.stack);
			});
	}

	importCommonLayout(){
		this.importLayout('IndexLayout');
	}

}

let app = new App();
app.init();
