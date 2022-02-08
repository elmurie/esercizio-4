
### Layout css Chunks

At webpack.config.js you can find at plugins, into MiniCssExtractPlugin options,
the following setup:
```js
    new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[name].[contenthash:4].css',
        attributes:{
            'data-css': '',
        },
        insert: function (linkTag){
            /*READ: dev-notes.md at 'layout css chunks' */
            let regex = /component-\w+/g;
            let title = linkTag.href.match(regex);
            let reference = document.querySelector('#dynamic-css-ref');
            if(title){
                linkTag.dataset.css = title.length>0 && title[0];
                document.head.insertBefore(linkTag, reference);
            }else{
                linkTag.dataset.css = 'after-meta-ref';
                document.head.appendChild(linkTag);
            }
        },
    })

```
This aims to load layout chunks after component chunks, to get this setup work as
expected put into head tag the following meta tag as follows:

```html
<!-- META REF TO DIVIDE COMPONENTS & LAYOUT STYLES -->
<meta id="dynamic-css-ref">
```
