'use strict';
module.exports = function(grunt) {
    grunt.initConfig({
        mocha: {
            all: ['test/index.html']
        },
        clean: ["package"],
        compress: {
            dist: {
                options: {
                    archive: 'package/gifd.zip'
                },
                files: [{
                    expand: true,
                    cwd: '',
                    src: ['**'],
                    dest: ''
                }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['mocha', 'clean', 'compress:dist']);
};
