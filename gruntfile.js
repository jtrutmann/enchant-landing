/* @TODO:
	- Add the same functionality for LESS
	- Figure out if I can get this to automatically run whenever I load my webpage
*/

// This is the default port that livereload listens on;
// change it if you configure livereload to use another port.
var LIVERELOAD_PORT = 35729;



// lrSnippet is just a function.
// It's a piece of Connect middleware that injects
// a script into the static served html.
var lrSnippet = require('connect')({ port: LIVERELOAD_PORT });

var serveStatic = require('serve-static');
var serveIndex = require('serve-index');



// All the middleware necessary to serve static files.
var livereloadMiddleware = function (connect, options) {

	// // lrSnippet is just a function.
	// // It's a piece of Connect middleware that injects
	// // a script into the static served html.
	// var lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT });

	return [
		// Inject a livereloading script into static files.
		lrSnippet,
		// Serve static files.
    serveStatic(options.base[0]),
		//connect.static(options.base[0]),
		// Make empty directories browsable.
    serveIndex(options.base[0]),
		// connect.directory(options.base[0]),
	];
};

module.exports = function(grunt) {



	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			options: {
				separator: ' ',
			},

			angular: {
				//source folders of the .js files we want to compile...
				src: ['static/app/**/*.js', '!static/app/ng-enchant.js', ],
				//destination folders of the .js files we want to compile...
				dest: 'static/app/ng-enchant.js',

			},

			// lemon: {
			// 	//source folders of the .js files we want to compile...  src: ['../javascript/**.js', '../javascript/otherthings.../**.js', ],
			// 	src: ['../engine/Intro.js', '../engine/Lemon.js',
			// 			'../engine/src/**/*.js',
			// 			'../engine/Outro.js',],

			// 	dest: '../_main/javascript/lemon.js',
			// },
		},

		watch: {
			options: {
		    	livereload: true,
		    },

			angular: {
				files: ['static/app/**/*.js', '!static/app/ng-enchant.js', ], //.js',
				tasks: ['angular-watch',],
			},
		},

		connect: {
	    server: {
				options: {
					port: 3000,
					base: "..",
					middleware: livereloadMiddleware,
					livereload: true,
					// hostname: 'local.host',
			        // keepalive: true,
				}
	    }
		}
	});

	// Load the plugin that provides the "uglify" task.
	// grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-contrib-connect');

	// Default task(s).
	// grunt.registerTask('default', ['concat']);
	grunt.registerTask('angular-watch', ['concat:angular']);
	// grunt.registerTask('lemon-watch', ['concat:lemon']);
	// grunt.registerTask('dev-watch', ['watch']); //['express:dev', 'watch']
	grunt.registerTask('runserver', ['connect', 'watch']);

};
