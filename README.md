# [gulp](https://github.com/wearefractal/gulp)-spawn

> Launch a new process


## Install

Install with [npm](https://npmjs.org/package/gulp-zip)

```
npm install --save-dev gulp-spawn
```


## Example

```js
var gulp = require('gulp');
var spawn = require('gulp-spawn');

gulp.task('start', function () {
	spawn('node', ['--debug', 'app.js']);
});
```


## API

### spawn(command, args, options)

Please see [child_process.spawn](http://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options) for more details.


## License

MIT
