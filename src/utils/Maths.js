const Maths = {
  hello: function () {
    console.log("hi from maths");
  },

  // add more later
  // https://www.geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/
  randomNumber: function(min, max){
    return Math.random() * (max - min) + min;
  }
};

export default Maths;
