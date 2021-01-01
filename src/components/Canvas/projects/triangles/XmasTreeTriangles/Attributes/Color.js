import Styles from '../../../../../../utils/Styles'

// copied from src/components/Canvas/projects/triangles/USATriangles/USATrianglesMaths.js

// TODO: https://stackoverflow.com/questions/1664140/js-function-to-calculate-complementary-colour
// search for ways to build my own functions to calculate all the different hexes on here:
// https://www.color-hex.com/color/075f38

// https://www.picmonkey.com/colors/green/evergreen
const EVERGREEN = { r: 5, g: 71, b: 42 };
const EVERGREEN_LIGHT = { r: 9, g: 119, b: 70 };
const COMPLMENTARY = { r: 71, g: 5, b: 34 }
const WHITE = { r: 255, g: 255, b: 255 };

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
    let green = Styles.buildColor(EVERGREEN, { defaultStyle: true });
    let greenLight = Styles.buildColor(EVERGREEN_LIGHT, { defaultStyle: true });

    if (theme === 'rainbow') {
      green.random = true;
      greenLight.maxShade = 0.1;
      greenLight.minShade = 0.1;
      greenLight.maxTint = 0.1;
      greenLight.minTint = 0.1;
    }

    return {
      green: green,
      greenLight: greenLight,
    }
  },

  colors(theme){
    const COLOR_ATTRIBUTES = this.setColorAttributes(theme);
    const COLOR_STATES = this.setColorStates(theme);

    return {
      tree: {
        lineColors: [COLOR_STATES.green, COLOR_STATES.greenLight], // to rotate
        attributes: COLOR_ATTRIBUTES
      }
    }
  },

};

export default Color;
