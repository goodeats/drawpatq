import Styles from '../../../../../../utils/Styles'

// copied from src/components/Canvas/projects/triangles/USATriangles/USATrianglesMaths.js

const RED = { r: 1, g: 13, b: 62 };
const WHITE = { r: 255, g: 255, b: 255 };
const BLUE = { r: 10, g: 49, b: 97 };

const Color = {
  hello: function () {
    console.log("hi from Color");
  },

  setColorAttributes(theme){
    switch (theme) {
      case 'solid':
        return ['none'];
      default:
        return ['none', 'shade', 'tint'];
    }
  },

  setColorStates(theme){
    let red = Styles.buildColor(RED, { defaultStyle: true });
    let white = Styles.buildColor(WHITE, { defaultStyle: true });
    let blue = Styles.buildColor(BLUE, { defaultStyle: true });

    if (theme === 'rainbow') {
      red.random = true;
      white.maxShade = 0.1;
      white.minShade = 0.1;
      white.maxTint = 0.1;
      white.minTint = 0.1;
      blue.random = true;
    }

    return {
      red: red,
      white: white,
      blue: blue,
    }
  },

  colors(theme){
    const COLOR_ATTRIBUTES = this.setColorAttributes(theme);
    const COLOR_STATES = this.setColorStates(theme);

    return {
      stars: {
        blue: COLOR_STATES.blue,
        white: COLOR_STATES.white,
        attributes: COLOR_ATTRIBUTES
      },
      stripes: {
        stripeColors: [COLOR_STATES.red, COLOR_STATES.white], // to rotate
        attributes: COLOR_ATTRIBUTES
      }
    }
  },

};

export default Color;
