module.exports = function(grunt) {
	//////////////////////////////////////
	// Do grunt-related things in here //
	////////////////////////////////////

	//////////////////////////////
	// Project configuration.  //
	////////////////////////////
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		/* -----------------------------------------------------------
			1. CLEAN TASKS - [grunt-contrib-clean]
		------------------------------------------------------------*/
		clean: {
			build: ["path/to/dir/one", "path/to/dir/two"],
			release: ["path/to/another/dir/one", "path/to/another/dir/two"]
		},
		/* -----------------------------------------------------------
			2. CONCAT TASKS - [grunt-contrib-concat]
		------------------------------------------------------------*/
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['src/js/*.js'],
				dest: 'dist/js/built.js'
			}
		},
		/* -----------------------------------------------------------
			3. COPY TASKS - [grunt-contrib-copy]
		------------------------------------------------------------*/
		copy: {
			main: {
				files: [
					
					{expand: true, cwd: 'src/', src: ['**'], dest: 'dest/'} // makes all src relative to cwd
				]
			}
		},
		/* -----------------------------------------------------------
			4. COFFEE TASKS - [grunt-contrib-coffee]
		------------------------------------------------------------*/
		coffee: {
			compile: {
				files: {
					'src/js/main.js': ['src/coffee/*.coffee'] // compile and concat into single file
				}
			}
		},
		/* -----------------------------------------------------------
			5. COMPASS TASKS - [grunt-contrib-compass]
		------------------------------------------------------------*/
		compass: {},
		/* -----------------------------------------------------------
			6. COMPRESS TASKS - [grunt-contrib-compress]
		------------------------------------------------------------*/
		compress: {
			main: {
				options: {
					archive: 'zips/<%= pkg.name %>-archive.zip'
				},
				files: [
					{src: ['src/**'], dest: ''} // includes files in path and its subdirs
				]
			}
		},
		/* -----------------------------------------------------------
			7. CONNECT TASKS - [grunt-contrib-connect]
		------------------------------------------------------------*/
		connect: {
			uses_defaults: {}
		},
		/* -----------------------------------------------------------
			8. CSSLINT TASKS - [grunt-contrib-csslint]
		------------------------------------------------------------*/
		csslint: {},
		/* -----------------------------------------------------------
			9. CSSMIN TASKS - [grunt-contrib-cssmin]
		------------------------------------------------------------*/
		cssmin: {},
		/* -----------------------------------------------------------
			10. HANDLEBARS TASKS - [grunt-contrib-handlebars]
		------------------------------------------------------------*/ 
		handelbars: {},
		/* -----------------------------------------------------------
			11. HTMLMIN TASKS - [grunt-contrib-htmlmin]
		------------------------------------------------------------*/
		htmlmin: {},
		/* -----------------------------------------------------------
			12. IMAGEMIN TASKS - [grunt-contrib-imagemin]
		------------------------------------------------------------*/ 
		imagemin: {                          // Task
			dist: {                            // Target
				options: {                       // Target options
					optimizationLevel: 3
				},
				files: {                         // Dictionary of files
					'build/assets/img/*.png': 'src/assets/img/*.png', // 'destination': 'source'
					'build/assets/img/*.jpg': 'src/assets/img/*.jpg'
				}
			}
		},
		/* -----------------------------------------------------------
			13. JADE TASKS - [grunt-contrib-jade]
		------------------------------------------------------------*/
		jade: {},
		/* -----------------------------------------------------------
			14. JASMINE TASKS - [grunt-contrib-jasmine]
		------------------------------------------------------------*/
		jasmine: {},
		/* -----------------------------------------------------------
			15. JSHINT TASKS - [grunt-contrib-jshint]
		------------------------------------------------------------*/
		jshint: {},
		/* -----------------------------------------------------------
			16. JST TASKS - [grunt-contrib-jst]
		------------------------------------------------------------*/
		jst: {}, 
		/* -----------------------------------------------------------
			17. LESS TASKS - [grunt-contrib-less]
		------------------------------------------------------------*/
		less: {
			development: {
				options: {
					paths: ["src/less"],
					banner: '/*! <%= pkg.name %> project <%= grunt.template.today("yyyy-mm-dd") %> */\n'
				},
				files: {
					"src/css/style.css": "src/less/style.less"
				}
			},
			production: {
				options: {
					paths: ["build/css"],
					yuicompress: true
				},
				files: {
					"build/css/style.css": "src/less/base.less"
				}
			}
		},
		/* -----------------------------------------------------------
			18. NODEUNIT TASKS - [grunt-contrib-nodeunit]
		------------------------------------------------------------*/
		nodeunit: {},
		/* -----------------------------------------------------------
			19. QUNIT TASKS - [grunt-contrib-qunit]
		------------------------------------------------------------*/
		qunit: {}, 
		/* -----------------------------------------------------------
			20. REQUIREJS TASKS - [grunt-contrib-requirejs]
		------------------------------------------------------------*/ 
		requirejs: {},
		/* -----------------------------------------------------------
			21. STYLUS TASKS - [grunt-contrib-stylus]
		------------------------------------------------------------*/ 
		stylus: {},
		/* -----------------------------------------------------------
			22. UGLIFY TASKS - [grunt-contrib-uglify]
		------------------------------------------------------------*/
		uglify: {
	    	options: {
	      		banner: '/*! <%= pkg.name %> project <%= grunt.template.today("yyyy-mm-dd") %> */\n'
	    	},
	    	build: {
	      		src: 'src/js/*.js',
	      		dest: 'build/js/main-all.min.js'
	    	}
	  	},
		/* -----------------------------------------------------------
			23. WATCH TASKS - [grunt-contrib-watch]
		------------------------------------------------------------*/
		watch:{
			files:['src/js/*.js'],
			tasks: ['uglify:build']
		},
		/* -----------------------------------------------------------
			24. YUIDOC TASKS - [grunt-contrib-yuidoc]
		------------------------------------------------------------*/
		yuidoc: {},
		/* -----------------------------------------------------------
			25. SASS TASKS - [grunt-contrib-sass]
		------------------------------------------------------------*/ 
		sass: {},


		/* -----------------------------------------------------------
			26. GRUNTICON TASKS - [grunt-grunticon]
		------------------------------------------------------------*/
		grunticon: {}

	});

	///////////////////////////////////////////////////////
	// Load the plugin that provides the "uglify" task. //
	/////////////////////////////////////////////////////
	grunt.loadNpmTasks('grunt-contrib');
	grunt.loadNpmTasks('grunt-grunticon');

	//////////////////////////////
	// Define default task(s). //
	////////////////////////////
	grunt.registerTask('default', ['compress','uglify']);
}