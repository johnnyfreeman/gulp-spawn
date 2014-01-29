'use strict';
var spawn = require('child_process').spawn;
var gutil = require('gulp-util');

module.exports = function (command, args, options) {
  var child = spawn(command, args, options);

  child.stdout.setEncoding('utf8');

  child.stdout.on('data', function (data) {
      gutil.log(data);
  });

  child.stderr.setEncoding('utf8');
  
  child.stderr.on('data', function (data) {
      gutil.log(gutil.colors.red(data));
      gutil.beep();
  });

  child.on('close', function(code) {
      gutil.log("Exiting with code: ", code);
  });
  
  return child;
};
