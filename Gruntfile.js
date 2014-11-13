module.exports = function(grunt){

	require("matchdep").filter("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		wiredep: {
			target: {
				src:'index.html'
			}
		}
	});

	grunt.registerTask('default',['wiredep']);


};