const Colors = {
  hello: function () {
    console.log("hi from colors");
  },

  // https://www.paulirish.com/2009/random-hex-color-code-snippets/
  getRandomHex: function () {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  },
};

export default Colors;
