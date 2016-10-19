module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ' '
      },
      dist: {
        src: ['app/js/*.js'],
        dest: 'dist/js/scripts.js'
      },
	  dist: {
        src: ['app/css/*.css'],
        dest: 'dist/css/styles.css'
      }
    },
	uglify: {
		my_target:{
			files:{
				'dist/js/scripts.min.js': ['dist/js/scripts.js']
			}
		}
	},
	cssmin: {
	  target: {
		files: [{
		  expand: true,
		  cwd: 'dist/css',
		  src: ['*.css', '!*.min.css'],
		  dest: 'dist/css',
		  ext: '.min.css'
		}]
	  }
	}
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};