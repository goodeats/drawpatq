// https://coolors.co/01baef-14110f-34312d-ad343e-f2af29
const cyanProcess = '#01baefff';
const cyanTint = '#E5F8FD';
const cardinal = '#ad343eff';
const honeyYellow = '#f2af29ff';
const smokyBlack = '#14110fff';
const middleGrey = '#8d867cff';

const Colors = {
  hello: function () {
    console.log("hi from colors");
  },

  // for debugging
  logColor: function(color, title = 'color'){
    return `${title} -- r: ${color.r}, g: ${color.g}, b: ${color.b}`
  },

  // https://www.paulirish.com/2009/random-hex-color-code-snippets/
  getRandomHex: function () {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  },

  getRandomRgba: function(options = {}){
    const r = options.r || this.getRandomColorValue();
    const g = options.g || this.getRandomColorValue();
    const b = options.b || this.getRandomColorValue();
    const a = options.a || this.getRandomTransparencyValue();
    return `rgba(${r}, ${g}, ${b}, ${a})`
  },

  // r, g, b
  getRandomColorValue: function () {
    return Math.floor(Math.random() * (255 - 0 + 1) + 0);
  },

  // a
  getRandomTransparencyValue: function () {
    return Math.random();
  },
  getRandomTransparencyValueRange: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  // https://stackoverflow.com/questions/6615002/given-an-rgb-value-how-do-i-create-a-tint-or-shade
  getRandomRgbaShade: function (options) {
    const shadeFactor = options.shadeFactor;
    const r = this.getShadedColorValue(options.r, shadeFactor);
    const g = this.getShadedColorValue(options.g, shadeFactor);
    const b = this.getShadedColorValue(options.b, shadeFactor);
    return `rgba(${r}, ${g}, ${b}, ${options.a})`
  },
  getRandomRgbaTint: function (options) {
    const tintFactor = options.tintFactor;
    const r = this.getTintedColorValue(options.r, tintFactor);
    const g = this.getTintedColorValue(options.g, tintFactor);
    const b = this.getTintedColorValue(options.b, tintFactor);
    return `rgba(${r}, ${g}, ${b}, ${options.a})`
  },

  getShadedColorValue: function (colorValue, shadeFactor) {
    // debugger
    return colorValue * (1 - shadeFactor);
  },
  getTintedColorValue: function (colorValue, tintFactor) {
    return colorValue + (255 - colorValue) * tintFactor;
  },


  // These are maybe more theme related
  primary: cyanProcess,
  secondary: cardinal,
  tertiary: honeyYellow,
  black: smokyBlack,
  gray: middleGrey,

  tintPrimary: cyanTint

};

export default Colors;
