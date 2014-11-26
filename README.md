2359's Angular Boilerplate
===================

Setup
-----
**1. Download Boilerplate**

`git clone https://github.com/colintoh/modular-angular`

**2. Install**

`npm install`

**3. Run**
`grunt` and point your browser to `http://localhost:8000/public`

Files Organization
--------------
`app` folder stores your angular modules. Each module folder should contain the template file, `*.tpl.html` and the module file, `*.js`.

`bower_components` stores your vendor files.

`node_modules` stores primarily grunt libraries.

`public` folder stores the compiled files.


Files
------
`index.html`

In the header, you will find a script for livereload:

	<script src="//localhost:35729/livereload.js"></script>

Grunt will compile the vendor's css:

	<link rel="stylesheet" href="stylesheets/vendor.css">

Grunt will compile the vendor's js:

	<script src="javascripts/vendor.js"></script>

Compile all the module's js and templates together in compiled-app.js

	<script src="javascripts/compiled-app.js"></script>

Todo
-----
- Compile and copy vendor javascripts
- CSS compilation

