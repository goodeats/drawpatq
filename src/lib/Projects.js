import Distance from "../utils/Distance";

const Projects = {
  hello: function () {
    console.log("hi from projects");
  },

  all: function(){
    return [
      this.usa(),
      this.usa(),
    ]
  },

  usa: function(){
    return {
      title: 'usa',
      container: {
        container: {
          widthPercent: 80,
          ratio: {
            heigt: 1,
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
  }

};

export default Projects;
