module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            all: ['public/js**/*.js',
                  'public/js/*.js']
        },
        uglify: {
            build: {
                files: {
                    'public/dist/js/app.min.js': [
                        'public/libs/jquery/dist/jquery.js',
                        'public/libs/bootstrap/dist/js/bootstrap.js"',
                        'public/libs/angular/angular.js',
                        'public/lib/angular-rout/angular-route.js',
                        'public/js/**/*.js',
                        'public/js/*.js']
                }
            }
        },
        less: {
            build: {
                files: {
                    'public/dist/css/style.css': [
                        'public/css/**/*.less',
                        'public/css/*.less']
                }
            }
        },
        cssmin: {
            build: {
                files: {
                    'public/dist/css/style.min.css': [
                        'public/libs/bootstrap/dist/css/bootstrap.css',
                        'public/libs/animate.css/animate.css',
                        'public/dist/css/**/*.css',
                        'public/dist/css/*.css']
                }
            }
        },
        watch: {
            css: {
                files: ['public/libs/bootstrap/dist/css/bootstrap.css',
                    'public/libs/animate.css/animate.css',
                    'public/css/**/*.less',
                    'public/css/*.less',
                    'public/css/*.css',
                    'public/css/**/*.css'],
                tasks: ['less', 'cssmin']
            },
            js: {
                files: ['public/libs/jquery/dist/jquery.js',
                    'public/libs/bootstrap/dist/js/bootstrap.js"',
                    'public/libs/angular/angular.js',
                    'public/lib/angular-rout/angular-route.js',
                    'public/js/*.js',
                    'public/js/**/*.js'],
                tasks: ['jshint', 'uglify']
            }
        },
        nodemon: {
            dev: {
                script: 'server.js'
            }
        },
        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            tasks: ['nodemon', 'watch']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.registerTask('default', ['less', 'cssmin', 'jshint', 'uglify', 'concurrent']);
};