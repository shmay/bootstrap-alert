module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          src: ['*.scss'],
          ext: '.css'
        }]
      }
    },

    watch: {
      sass: {
        files: ['*.scss'],
        tasks: ['sass']
      }
    },

    vulcanize: {
      default: {

        options: {
          csp: true,
          inline: true,
          strip: true
        },
        files: {
          'dist/index.html': 'demo.html'
        }
      }
    }

  });

};
