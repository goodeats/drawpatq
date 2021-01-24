import Styles from '../../../../../../utils/Styles'

// Crying Emoji Color Palette
// https://www.color-hex.com/color-palette/11129

// Color	Hex	    RGB
//        #ffcc33	(255,204,51)
//        #c98917	(201,137,23)
//        #ffffff	(255,255,255)
//        #6dc4f0	(109,196,240)
//        #ffcc33	(255,204,51)

const FACE = { r: 255, g: 204, b: 51}
const FACE_SHADE = { r: 201, g: 137, b: 23}
const WHITE = { r: 255, g: 255, b: 255}
const BLACK = { r: 0, g: 0, b: 0}
const WATER = { r: 109, g: 196, b: 240}

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
    let face = Styles.buildColor(FACE, { defaultStyle: true });
    let black = Styles.buildColor(BLACK, {
      a: 1,
      minTint: 0.1,
      maxTint: 0.1,
      minShade: 0.1,
      maxShade: 0.1
    });

    if (theme === 'rainbow') {
      face.random = true;
      face.maxShade = 0.1;
      face.minShade = 0.1;
      face.maxTint = 0.1;
      face.minTint = 0.1;
    }

    return {
      face: face,
      eye: black,
      mouth: black
    }
  },

  colors(theme){
    const COLOR_ATTRIBUTES = this.setColorAttributes(theme);
    const COLOR_STATES = this.setColorStates(theme);

    return {
      face: {
        colors: [COLOR_STATES.face], // to rotate
        attributes: COLOR_ATTRIBUTES
      },
      eye: {
        colors: [COLOR_STATES.eye],
        attributes: COLOR_ATTRIBUTES
      },
      mouth: {
        colors: [COLOR_STATES.mouth],
        attributes: COLOR_ATTRIBUTES
      }
    }
  },

};

export default Color;
