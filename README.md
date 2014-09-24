# Project template for [gulp.js](http://gulpjs.com/)
<img width="114px" height="257px" align="right" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png"/>

### What it does
* [Jade](http://jade-lang.com) files to HTML
* [Stylus](http://learnboost.github.io/stylus) files to CSS
* [CoffeeScript](http://coffeescript.org/) files to Javascript through [browserify](http://browserify.org/)
    * You are able to use 'require' in your client-side code
* Serves your static files to localhost:9001
* Reloads your browser with LiveReload when files change

## Getting things up and running
- Install [Node.js](http://nodejs.org)

```
 git clone git@github.com:leonidas/gulp-project-template.git <your project name>
 cd <your project name>
 npm install
 npm start
 open http://localhost:9001 in your browser
````
## CLI Commands
* npm install
    * Installs server-side dependencies from NPM and client-side dependencies from Bower
* npm start
    * Compiles your files, starts watching files for changes, serves static files to port 9001
* npm run build
    * Builds everything

Minification, uglification and other tasks you're expected to run before deploying your product can be made by running the build command with env variable NODE_ENV set to "production"

    NODE_ENV=production npm run build

## Development guidelines
* **public** - directory should be dedicated only to compiled/copied files from **src** - directory.
  It should be possible to delete directory completely and after **npm start** or **npm run build** everything should be as they were before the deletion.
* All backend dependencies should be installed with **npm**. Browser dependencies should be installed with **bower** or with **npm**.

### Adding 3rd party libraries
**Note**: If the package you are looking for can be found in NPM it's much easier to install it from there. After installing packages from NPM they can be required without any of the following instructions.

    bower install jquery --save

Now your should be able to require jQuery in your coffee files

    $ = require 'jquery'

If this does not work, you may need to add the pakcage manually and shim it, like

    ...

    "browser": {
      "tunkki": "./bower_components/tunkki/dist/tunkki.js"
    },
    "browserify-shim": {
      "tunkki": "tunkki"
    }
    ...

Read more about it [here](https://github.com/thlorenz/browserify-shim).

### Using JavaScript instead of CoffeeScript
Remove coffeeify transform from package.json file (browserify.transform field)
``````
"browserify": {
  "transform": ["browserify-shim"]
}
``````

and change the ".coffee" extension to ".js" from gulpfile.coffee
``````
paths =
  scripts:
    source: './src/coffee/main.js'
`````

You also can change the directory name to scripts or what ever.

### Enable LiveReload
Install [LiveReload for Chrome](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en)
