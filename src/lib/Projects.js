const Projects = {
  hello: function () {
    console.log("hi from projects");
  },

  all: function(){
    return [
      {title: 'a triangle', container: this.defaultContainer()},
      {title: 'triangles', container: this.defaultContainer()},

      // {title: 'nike', container: this.nike()},
      {title: 'little triangles', container: this.defaultContainer()},
      {title: 'too many triangles', container: this.defaultContainer()},
      {title: 'transparent triangles', container: this.defaultContainer()},
      {title: 'shaded triangles', container: this.defaultContainer()},
      {title: 'tinted triangles', container: this.defaultContainer()},
      {title: 'shades and tints', container: this.defaultContainer()},
      // {title: 'in a row', container: this.defaultContainer()},
      // {title: 'clustered', container: this.defaultContainer()},
      this.smiley(),
      this.usa()
    ];

    // return [
    //   this.usa(),
    // ]
  },

  usa: function(){
    return {
      title: 'usa',
      tagline: 'best viewed on desktop',
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
          color: '#333'
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

  smiley: function(){
    const propsStyle = {
      container: {
        widthPercent: 80,
        heightPx: 350,
        widthPx: 350,
        ratio: {
          height: 1,
          width: 1
        },
        unit: 'px'
      },
      canvas: {
        padding: 10,
        paddingUnit: 'px',
        background: 'white'
      }
    };
    const style = Object.assign(this.defaultContainer(), propsStyle);

    return {
      title: 'smiley',
      container: style,
      themes: ['default', 'solid', 'rainbow', 'grayscale']
    }
  },

  nike: function(){
    return {
      container: {
        widthPercent: 80,
        ratio: {
          height: 1,
          width: 1.5
        },
        unit: 'px'
      },
      frame: {
        width: 10,
        color: 'black'
      },
      matte: {
        width: 0,
        color: 'white'
      },
      canvas: {
        padding: 0,
        paddingUnit: 'px',
        background: 'white'
      }
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
