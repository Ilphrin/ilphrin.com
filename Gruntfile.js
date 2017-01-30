module.exports = function (grunt) {

  grunt.initConfig({
    postcss: {
      options: {
        processors: [
          require("postcss-cssnext")()
        ]
      },
      dist: {
        src: 'css/main.css',
        dest: 'css/main.css'
      }
    },
    sass: {
      options: {
      },
      dist: {
        src: 'css/main.scss',
        dest: 'css/main.css'
      }
    },
    cssnano: {
      option: {
        sourcemap: true
      },
      dist: {
        files: {
          'css/main.css': 'css/main.css'
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-cssnano');

  grunt.registerTask('css', ['sass', 'postcss', 'cssnano']);
};
