const Projects = {
  hello: function () {
    console.log("hi from projects");
  },

  all: function(){
    return [
      {title: 'triangles', container: this.defaultContainer()},
      // {title: 'little triangles', container: this.defaultContainer()},
      // {title: 'too many triangles', container: this.defaultContainer()},
      // {title: 'transparent triangles', container: this.defaultContainer()},
      // {title: 'shaded triangles', container: this.defaultContainer()},
      // {title: 'tinted triangles', container: this.defaultContainer()},
      // {title: 'shades and tints', container: this.defaultContainer()},
      // {title: 'in a row', container: this.defaultContainer()},
      // {title: 'clustered', container: this.defaultContainer()},
      // this.usa()
    ];

    // return [
    //   this.usa(),
    // ]
  },

  usa: function(){
    return {
      title: 'usa',
      container: {
        container: {
          widthPercent: 80,
          ratio: {
            height: 1,
            width: 1.9
          },
          unit: 'px'
        },
        frame: {
          width: 10,
          color: 'black'
        },
        matte: {
          width: 20,
          color: 'antiquewhite'
        },
        canvas: {
          padding: 60,
          paddingUnit: 'px',
          background: 'white'
        }
      },
      themes: ['default', 'solid', 'rainbow', 'grayscale']
    }
  },

  defaultContainer: function(){
    return {
      container: {
        widthPercent: 80,
        ratio: {
          height: 1,
          width: 2
        },
        unit: 'px'
      },
      frame: {
        width: 10,
        color: 'black'
      },
      matte: {
        width: 20,
        color: 'white'
      },
      canvas: {
        padding: 60,
        paddingUnit: 'px',
        background: 'white'
      }
    }
  },

};

export default Projects;
