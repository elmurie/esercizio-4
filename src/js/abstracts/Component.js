import { customEvents } from '../utils/custom-events';
import { on, emit } from '../utils/events-actions';
import { isMobile} from '../utils/utils';
import DependencyInjector from '../utils/DependencyInjector';
import axios from 'axios';
import {Cookies} from '../utils/cookies-handler';

export default class Component{
	get VIEWPORTS() {
		return {
			sm: [0,767],
			md: [768,991],
			lg: [992,1279],
			xl: [1280,1599],
			xxl: [1600,9999]
		};
	}
	get CSS_CUSTOM_VARS() {
		return {
			jsHeightHeader: '--js-header-height',
			headerStripHeight: '--js-header-strip-height',
		};
	}
	get TOTAL_OFFSET_TOP (){
		return this.$calcParentsOffsetTop(this.$component) + this.$component.offsetTop;
	}

	get BASE_CLASSNAMES(){
		return {
			onViewComponent: 'on-view',
			outOfViewComponent: 'out-view',
			bodyBlocked: 'body-blocked',
		};
	}
	constructor(compEl){
		this.name = this.constructor.name;
		this.$moduleLoader = new DependencyInjector(); // Use this class to lazy load modules!!
		this.$on = on;
		this.$emit = emit;
		this.$getCookie = Cookies.getCookie;
		this.$setCookie = Cookies.setCookie;

		this.$events = customEvents;
		this.$isMobile = isMobile;
		//observer
		this.$observerOptions = {};
		this.observerCallback = this.observerCallback.bind(this);
		//our html component
		this.$component = compEl??null;

		this.$bodyRect = document.body.getBoundingClientRect();
		this.$compRect = this.$component.getBoundingClientRect();

		this.$axios = axios;

		this.hasLoadImages = false;
		this.collectDataSrcs = this.$component.querySelectorAll('[data-src]');
	}

	init(){
		console.log('Component:',this.name);
		this.checkIfObservable();
	}


	checkIfObservable(){
		if(this.$component){
			//            console.log('IntersectionObserver to: ', this.name, 'With options: ',this.$observerOptions)
			this.initObserver();
		}
		//        if(this.$component && this.$component.dataset.toObserve !== undefined){
		//            console.log('IntersectionObserver to: ', this.name, 'With options: ',this.$observerOptions)
		//            this.initObserver();
		//        }
	}

	initObserver(element=this.$component,callback=this.observerCallback, options=this.$observerOptions){
		let observer = new IntersectionObserver((entries)=>{
			entries.forEach( entry => callback(entry) );
		}, options);

		observer.observe(element);
	}

	observerCallback(entry){
		//        console.log('Observer callback fired at: ', this.name);
		if(entry.isIntersecting){
			//            console.warn('Intersected by',this.name);
			this.loadImages();
		}
	}
	loadImages(){
		if(this.hasLoadImages){
			return;
		}
		this.collectDataSrcs.forEach( element => {
			let src = element.dataset.src;
			switch (element.nodeName){
			case 'SOURCE':
				element.srcset = src;
				break;
			case 'IMG':
				element.src = src;
				break;
			}
		});
		this.hasLoadImages = true;
	}

	$blockBody(){
		document.querySelector('body').classList.add(this.BASE_CLASSNAMES.bodyBlocked);
	}
	$unblockBody(){
		document.querySelector('body').classList.remove(this.BASE_CLASSNAMES.bodyBlocked);
	}
	$onView(){
		this.$component.classList.add(this.BASE_CLASSNAMES.onViewComponent);
	}
	$outView(){
		this.$component.classList.remove(this.BASE_CLASSNAMES.onViewComponent);
	}

	/**
     *
     * @param dataset dataset object
     * @param dataName dataset name to find
     * @param returnValue true when need dataset value return
     * @returns {boolean|*}
     */
	$checkDataset(dataset, dataName,returnValue=false){
		let isValid = Object.prototype.hasOwnProperty.call(dataset,dataName) && dataset[dataName] !== '';
		if(isValid && returnValue){
			return dataset[dataName];
		}
		return isValid;
	}

	/**
     *
     * @param tag   HTML tag element
     * @param classNames single string or array of strings(classes)
     * @returns {*} HTML Element created
     */
	$createElement(tag,classNames=[]){
		if(!tag){
			throw 'Component.$createElement no element was created, declare args';
		}
		if(typeof classNames !=='string' && !Array.isArray(classNames)){
			throw 'Component.$createElement(tag,classNames) second  argument classNames got to be string or array of strings(classes)';
		}
		let el = document.createElement(tag);
		if(classNames.length>0){
			let isSingleClass = typeof classNames === 'string';
			let classToAdd = isSingleClass ? [classNames] : [...classNames];
			el.classList.add(...classToAdd);
		}
		return el;
	}

	$scrollTo(to, duration , callback) {
		//Because scrollIntoView || window.scrollTo behaviour smooth are not present at 'safari'
		// was found this cross-browser solution from : https://gist.github.com/james2doyle/5694700

		Math.easeInOutQuad = (t, b, c, d) => {
			t /= d/2;
			if (t < 1) {
				return c/2*t*t + b;
			}
			t--;
			return -c/2 * (t*(t-2) - 1) + b;
		};

		let move = (amount) => {
			document.documentElement.scrollTop = amount;
			document.body.parentNode.scrollTop = amount;
			document.body.scrollTop = amount;
		};
		let position = () => {
			return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
		};
		let start = position(),
			change = to - start,
			currentTime = 0,
			increment = 20;
		duration = (typeof(duration) === 'undefined') ? 500 : duration;
		let animateScroll = () => {
			// increment the time
			currentTime += increment;
			// find the value with the quadratic in-out easing function
			let val = Math.easeInOutQuad(currentTime, start, change, duration);
			// move the document.body
			move(val);
			// do the animation unless its over
			if (currentTime < duration) {
				window.requestAnimationFrame(animateScroll);
			} else {
				if (callback && typeof(callback) === 'function') {
					// the animation is done so lets callback
					callback();
				}
			}
		};
		animateScroll();
	}

	/**
     *
     * @param element HTML element reference
     * @returns {number} sum of all parents offsetTop found
     */
	$calcParentsOffsetTop(element){
		let sum = 0;
		let currentEl = element;
		while(currentEl.offsetParent){
			sum += currentEl.offsetParent.offsetTop;
			currentEl = currentEl.offsetParent;
		}
		return sum;
	}

	$mediaQuery(minMax, pixels) {
		return window.matchMedia(`(${minMax}-width:${pixels}px)`);
	}
}
