import Styles from '../../../../../../utils/Styles'

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
    let background = Styles.buildColor(Styles.getRandomColorState(), {
      a: 1,
      minTint: 0.1,
      maxTint: 0.1,
      minShade: 0.1,
      maxShade: 0.1
    });


    return {
      background: background,
    }
  },

  colors(theme){
    const COLOR_ATTRIBUTES = this.setColorAttributes(theme);
    const COLOR_STATES = this.setColorStates(theme);

    return {
      background: {
        color: COLOR_STATES.background, // was array, but only one
        attributes: COLOR_ATTRIBUTES
      }
    }
  },

};

export default Color;
