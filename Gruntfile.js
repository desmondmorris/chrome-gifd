'use strict';
module.exports = function(grunt) {
    grunt.initConfig({
        mocha: {
            all: ['test/index.html']
        },
        clean: [
            "dist",
            "package"
        ],
        copy: {
          dist: {
            files: [
              // includes files within path
              {expand: true, src: ['src/*'], dest: 'dist/', filter: 'isFile'},
              {expand: true, src: ['components/**'], dest: 'dist/', filter: 'isFile'},
              {expand: true, src: ['manifest.json'], dest: 'dist/', filter: 'isFile'},
              {expand: true, src: ['icon*.png'], dest: 'dist/', filter: 'isFile'}
            ]
          }
        },
        compress: {
            dist: {
                options: {
                    archive: 'package/gifd.zip'
                },
                files: [{src: ['dist/**'], dest: ''}]
            }
        }
    });
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['mocha', 'clean', 'copy', 'compress']);
};
