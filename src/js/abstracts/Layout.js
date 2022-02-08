
export default class Layout {
	get COMMONS (){
		return [

		];
	}
	get COMPONENTS_LIST(){
		return [
			'TestComponent',
			'TestBetaComponent'
		];
	}
	constructor() {
		this.layoutName = this.constructor.name;
	}
	init() {
		this.initCommonComponents();
		this.initFromListComponents();
	}

	setLayout(layoutName) {
		this.layoutName = layoutName;
	}

	initFromListComponents(){
		this.COMPONENTS_LIST.forEach( (component) =>{
			this.instanceComponent(component);
		});
	}

	initCommonComponents() {
		this.COMMONS.forEach(comp =>{
			this.importComponents(comp).then(({default:common})=> new common());
		});
	}


	instanceComponent(ComponentName){
		let selector = `[data-js-component="${ComponentName}"]`;
		let componentElements = document.querySelectorAll(selector);
		if(componentElements.length > 0){
			this.importComponents(ComponentName)
				.then(({ default:Component })=>{
					componentElements.forEach( (element) =>{
						let component = new Component(element);
						component.init();
					});
				})
				.catch((err) =>{
					console.warn(err, err.stack);
				});
		}
	}

	/* --------------------------------------------------------------------- */
	/* this method import a module and returns the import promise            */
	/* with this method we centralize the dynamic import                     */
	/* --------------------------------------------------------------------- */
	async importComponents(componentName) {
		return await import(/* webpackChunkName:`component-[request]` *//* webpackMode: "lazy" */`../components/${componentName}`);
	}
}
