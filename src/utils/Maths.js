const Maths = {
  hello: function () {
    console.log("hi from maths");
  },

  // add more later
  // https://www.geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/
  randomNumber: function(max = 100, min = 0){
    return Math.random() * (max - min) + min;
  },

  getRandomInt: function(max, min = 0) {
    return Math.random() * (Math.floor(max) - Math.floor(min)) + min;
  },

  isEven: function (int) {
    return int % 2 === 0;
  },
  isOdd: function (int) {
    return int % 2 !== 0;
  },
};

export default Maths;
