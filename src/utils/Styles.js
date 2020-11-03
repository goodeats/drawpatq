import Colors from './Colors'
import Maths from './Maths'

const Styles = {
  hello: function () {
    console.log("hi from styles");
  },

  setTint: function (colorState) {
    const tintFactor = Maths.randomNumber(colorState.minTint, colorState.maxTint);
    colorState.tintFactor = tintFactor;

    return Colors.getRandomRgbaTint(colorState)
  },

  setShade: function (colorState) {
    const shadeFactor = Maths.randomNumber(colorState.minShade, colorState.maxShade);
    colorState.shadeFactor = shadeFactor;

    return Colors.getRandomRgbaShade(colorState)
  },

  setOpacity: function (){
    return Math.random();
  },

};

export default Styles;
