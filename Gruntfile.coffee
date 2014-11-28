module.exports = (grunt)->
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks)
	require("matchdep").filter("grunt-*").forEach(grunt.loadNpmTasks)


	grunt.initConfig(
		'copy':
			'html':
				"files": [
					expand: true
					src: ["*.html"]
					flatten: true
					dest: 'public'
				]

		'concat':
			'options':
				separator: ';'
			'dist':
				src: ['app/**/*.js']
				dest: 'public/javascripts/compiled-app.js'

		'html2js':
			'options':
				base: 'app'
			'main':
				src: ['app/**/*.tpl.html']
				dest: 'app/template.js'

		'bower_concat':
			'main':
				dest: 'public/javascripts/vendor.js'
				cssDest: 'public/stylesheets/vendor.css'

		'http-server':
			'dev':
				root: 'public'
				port: 8000
				runInBackground: true

		'watch':
			options:
				livereload: true
				spawn: false
			'index':
				files: ['*.html']
				tasks: ['copy']
			'template':
				files: ['app/**/*.tpl.html']
				tasks: ['html2js']
			'scripts':
				files: ['app/**/*.js']
				tasks: ['concat']
	)

	grunt.registerTask('default', [
		'html2js','copy','concat','bower_concat','http-server','watch'
	])

