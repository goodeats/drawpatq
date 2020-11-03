import Colors from './Colors'
import Maths from './Maths'

const Styles = {
  hello: function () {
    console.log("hi from styles");
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
