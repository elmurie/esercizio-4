import Layout from '../abstracts/Layout';
//Import the layout style as next line. ScssLayouts is an alias to 'root/src/scss/layouts'
import 'ScssLayouts/l-index';

/*
* Layout classes are generally just to compile/load layout styles, we're improving this part of system
*/

export default class IndexLayout extends Layout{
	constructor(){
		super();
	}
}
