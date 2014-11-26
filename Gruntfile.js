module.exports = function(grunt){

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
	require("matchdep").filter("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		'copy': {
			'main': {
				files: [
					{expand: true, src: ['*.html'], flatten:true, dest:'public'}
				]
			},
			'build_appjs': {
				files: [{
					src: ['app/**/*.js'],
					dest: 'public',
					expand: true
				}]
			}
		},
		'concat': {
			'options': {
				separator: ';'
			},
			'dist': {
				src: ['public/app/**/*.js'],
				dest: 'public/javascripts/compiled-app.js'
			}
		},
		'html2js': {
			options: {
				'base': 'app'
			},
			main: {
				src: ['app/**/*.tpl.html'],
				dest: 'public/app/template.js'
			}
		},
		'wiredep': {
			target: {
				src:'public/index.html'
			}
		},
		'http-server': {
			'dev': {
				port: 8000,
				runInBackground: true
			}
		},
		'watch': {
			template: {
				files: ['*.html','app/**/*.html'],
				tasks: ['html2js', 'copy', 'concat', 'wiredep'],
				options: {
					livereload: true
				}
			},
			scripts: {
				files: ['app/**/*.js'],
				tasks: [
					'copy','concat','wiredep'
				],
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.registerTask('default',[
		'html2js','copy','concat','wiredep','http-server','watch'
		]);


};