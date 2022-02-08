# Wip chunks boilerplate
(Webpack 5 boilerplate with chunk-split system)

## FIRST THINGS FIRST, LAYOUT

Every component filename (without extention) goes into an array
into Layout abstract as follows:

Declare components into ___Layout abstract___:
```js

export default class Layout {
    
    get COMPONENTS_LIST() {
        return [
            //component for this example, 
            // see below at Component by example
            'TestComponent',
        ];
    }
    //.....
}
```

>Note: this part could be improved

So to get all this working go to your template file and declare at html root:

```html
<!doctype html>
<!-- To load layout declare it as data attribute [data-js-layout="NameLayout"]-->
<html lang="it" data-js-layout="IndexLayout">
    ...
</html>
```
the data-js-layout calls the layout file to be loaded, for instance, at prev example 
we have IndexLayout layout which we can find at root/layouts/IndexLayout.js

> NOTE:  js layouts generally are used to load relative layout styles 
> which are useful to overwrite component styles into page layout without touching
> components itself. More at [Layout By Example](#layout-by-example)

## Component by example

### Js Component 

FileName: TestComponent.js
```js
import Component from '../abstracts/Component';// abstract to inherit
// Our component styles. 
// ScssComponents is an alias to root/src/scss/components
// see below at Scss Component
import 'ScssComponents/c-test-component';

export default class TestComponent extends Component {
    //compEl will be the html element which wrap the entire component
	constructor(compEl) {
		super(compEl);//from now on you have access to your html component as this.$component 
	}

	init() {
		super.init();
	}
}
```
> ***PHP/WEB STORM TIP***:  That was the basic structure of new components so we suggest to make a template/snippet 
to the faster creation of components. Read:
> - [File Templates](https://www.jetbrains.com/help/phpstorm/using-file-and-code-templates.html)
> - [Live Templates](https://www.jetbrains.com/help/phpstorm/using-live-templates.html)

### Scss Component

> See previous point at Js Component where this file is imported

Filename: c-test-component.scss

```scss
//Components filename generally is the component main class
// as a convention, component has two parts [component-prefix]-[component-name]
.c-test-component{
    background: orange;
    //its suggested to make a wrapper into our main component to give it more flexibility
    //see below HTML Component
    .test-component{
        &__wrapper{
            background: red;
        }
    }
}
```
>NOTE: there are filenames ___prefixes___ into our structure and they would be:
> - ___u- = utility___ => functions/mixins which when compiled doesn't write a single line of code. Its just an utility to the rest of code
> - ___b- = basic___ => basic styles as buttons, icons, etc...
> - ___v- = vendors___ => vendor styles from modules or into vendors dir
> - ___c- = component___ => component styles
> - ___l- = layout___ => layout styles. This styles could overwrite component styles once imported at respective layout

### HTML Component

Filename: It depends on you and platform where templates are positioned. Generally if
it's a separated snippet we suggest to call snippet with strong reference to component itself, for instance
if you have an snippet for our TestComponent you can call:
- test-component.[html, php, blade.php, etc]

However the html structure would be: 

```html
<!--TEST COMPONENT-->
<!-- to async load component chunks js/css we need a reference 
to js Component as a data attribute [data-js-component="NameComponent"]
where NameComponent is the component filename to be loaded -->
<div class="c-test-component" data-js-component="TestComponent">
    <div class="test-component__wrapper">
        TEST COMPONENT
    </div>
</div>
```
>Note: There's not any snippet file for html component into this boilerplate
> so you can find this example into root/public/index.html 


## Layout by example

### Js Layout

It simply loads relative layout styles

IndexLayout.js
```js
import Layout from '../abstracts/Layout';
//Import the layout style as next line. 
// ScssLayouts is an alias to 'root/src/scss/layouts'
import 'ScssLayouts/l-index';
/*
* Layout classes are generally just to compile/load layout styles, we could improving this part of system
*/
export default class IndexLayout extends Layout{
	constructor(){
		super();
	}
}
```
So we are importing layout file to be compiled and when IndexLayout is
called, relative css will be request asynchronously and positioned
after any component css chunk requested. Details into [Dev notes](/dev-notes.md#layout-css-chunks);

### Scss Layout

as you can see at Js Layout section we are importing l-index scss file
from root/src/scss/layouts

l-index.scss
```scss
.l-index{
    background: gray;
    //overwrite of test component
    .c-test-component{
        background: purple;
    }
}
```


DOCUMENTATION IN PROGRESS...
