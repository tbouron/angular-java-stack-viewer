# angular-java-stack-viewer
Modern Java stack traces viewer for Angular 1.x. 

You can checkout this [the working demo](https://codepen.io/tbouron/pen/KgLpWB) to see how it looks like.

| Branch | Build | Test coverage |
| --- | --- | --- |
| `master` | [![Travis](https://img.shields.io/travis/tbouron/angular-java-stack-viewer/master.svg)](https://travis-ci.org/tbouron/angular-java-stack-viewer/branches) | [![Codacy](https://img.shields.io/codacy/coverage/8a2c7136efee4433b21c32f872c98c0d/master.svg)](https://www.codacy.com/app/tbouron/java-stack-parser/files?bid=3852866) |
| `develop` | [![Travis](https://img.shields.io/travis/tbouron/angular-java-stack-viewer/develop.svg)](https://travis-ci.org/tbouron/angular-java-stack-viewer/branches) | [![Codacy](https://img.shields.io/codacy/coverage/8a2c7136efee4433b21c32f872c98c0d/develop.svg)](https://www.codacy.com/app/tbouron/java-stack-parser/files?bid=3852865) |

*The library has been developed to use [Bootstrap](http://getbootstrap.com/) as CSS framework. However, you can use your own CSS and template if you want to, see `Usage` section.*

## Install

You can install this package either with `npm`, `yarn` or `bower`.

### npm / yarn

For npm:
```sh
~$ npm install angular-java-stack-viewer
```

For yarn:
```sh
~$ yarn add angular-java-stack-viewer
```

### bower

```sh
~$ bower install angular-java-stack-viewer
```

## Usage

The library is package as an angular *module* that contains the CSS and the bootstrap template via `$templateCache` service. This means you have the full control over what you include in your application for CSS and template.

### Full-blown module

First, you need to add the angular module to your app:
```js
// -----------------------------
// ES6 syntax
// -----------------------------
import stackViewer from 'angular-java-stack-viewer';
angular.module('myApp', [stackViewer]);
...

// -----------------------------
// ES5 syntax
// -----------------------------
var stackViewer = require('angular-java-stack-viewer');
angular.module('myApp', [stackViewer]);
...

// -----------------------------
// Classic syntax
// -----------------------------
angular.module('myApp', ['tb.stack-viewer']);
...
```

*Note that if you use the classic syntax, you need to load first the library in the browser directly:*
```html
<script src="/bower_components/angular-java-stack-viewer/lib/angular-java-stack-viewer.min.js"></script>
```

Then, you can use the directive like so:
```html
<div tb-stack-viewer></div>

<!-- or -->
<tb-stack-viewer></stack-viewer>
```

### CSS-free module

Maybe the built-in CSS is not to your taste? Not a problem, you can use the `-nocss` version which won't inline the built-in style:
```js
// -----------------------------
// ES6 syntax
// -----------------------------
import stackViewer from 'angular-java-stack-viewer/lib/angular-java-stack-viewer-nocss.js';
angular.module('myApp', [stackViewer]);
...

// -----------------------------
// ES5 syntax
// -----------------------------
var stackViewer = require('angular-java-stack-viewer/lib/angular-java-stack-viewer-nocss.js');
angular.module('myApp', [stackViewer]);
...

// -----------------------------
// Classic syntax
// -----------------------------
angular.module('myApp', ['tb.stack-viewer']);
...
```

*Note that if you use the classic syntax, you need to load first the library in the browser directly:*
```html
<script src="/bower_components/angular-java-stack-viewer/lib/angular-java-stack-viewer-nocss.min.js"></script>
```

### Custom template

The module uses `$templateCache` to serve the template. It means that you just need to override `templates/stack-viewer.html` to use your own:
```html
<script type="text/ng-template" id="templates/stack-viewer.html">
    <!-- My template -->
</script>
```

## Documentation

The library provide the `tb.stack-viewer` module with the following components

### `tb-stack-viewer` directive

| Param | Type | Description |
| --- | --- | --- |
| `trace` | `string` | A string representing a Java stack trace |
| `vendors` | `object` | An object representing the vendors packages. Vendor packages are a way of grouping stack lines together per packages. For example, you probably want all Java, Sun and Oracle stack under one package. You can do that by specify the vendor package name as key, and the start of package aliases to match: `{ "Java/Sun/Oracle": ["java", "javax", "sun", "sunw", "com.sun", "com.oracle"] }` |

## Development

To build the library, simply do:
```sh
~$ npm run build
```

You can pass an envvar to build the production version: `NODE_ENV=production`.

You can run tests and check the coverage with the following commands:
```sh
~$ npm test
```

## License

This library is released under [Apache 2.0 license](LICENSE)
