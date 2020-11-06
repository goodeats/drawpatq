const Distance = {
  hello: function () {
    console.log("hi from distance");
  },

  // 100 => ~115.47...
  equilateralWidth(height) {
    return (height * 2) / Math.sqrt(3);
  },
  // 100 => ~173.21...
  equilateralHeight: function(width) {
    return width * Math.sqrt(3);
  },

  positionAtIndex: function (length, index, count){
    return length * (index / count);
  }

};

export default Distance;
