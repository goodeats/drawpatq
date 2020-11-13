import Arrays from './Arrays';
import Colors from './Colors'
import Maths from './Maths'

const Styles = {
  hello: function () {
    console.log("hi from styles");
  },

  defaultStyle: function(){
    const steez = {
      a: 1,
      minTint: 0.1,
      maxTint: 0.3,
      minShade: 0.1,
      maxShade: 0.3
    // r: 255, g: 255, b: 0
    }
    return steez;
  },

  defaultEffects: ['none', 'shade', 'tint'],

  buildColor: function (styleBuild, options = {}) {
    return Object.assign(this.defaultStyle(), styleBuild);
  },

  setColorByAttributeIndex(colorState, index, attributes = this.defaultEffects){
    const attribute = Arrays.rotateNextIndex(attributes, index);
    return Styles.setColor(colorState, attribute);
  },

  setColor: function (colorState, effect){
    switch (effect) {
      case 'tint':
        return Styles.setTint(colorState);
      case 'shade':
        return Styles.setShade(colorState);
      default:
        return Colors.getRandomRgba(colorState)
    }
  },

  setTint: function (colorState) {
    const tintFactor = Maths.randomNumber(colorState.maxTint, colorState.minTint);
    colorState.tintFactor = tintFactor;

    return Colors.getRandomRgbaTint(colorState)
  },

  setShade: function (colorState) {
    const shadeFactor = Maths.randomNumber(colorState.maxShade, colorState.minShade);
    colorState.shadeFactor = shadeFactor;

    return Colors.getRandomRgbaShade(colorState)
  },

  setOpacity: function (){
    return Math.random();
  },

};

export default Styles;
