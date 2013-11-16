'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    mocha: {
      all: ['test/index.html']
    }
  });
  grunt.loadNpmTasks('grunt-mocha');
  grunt.registerTask('default', ['mocha']);
};
