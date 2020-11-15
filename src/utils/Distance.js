import Maths from './Maths';

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

  // this calc works to fill the triangles on the edges of the whole view
  // the furthest off the view can only be half
  setRandomTrianglePos: function(length, max = 100, min = 0, denomination = 'px'){
    return "calc(" + Maths.randomNumber(max, min) + "% - " + length / 2 + denomination + ")";
  },
  setRandomTrianglePosByPercentage: function(length){
    return Maths.randomNumber() - length / 2;
  },
  // fill triangles to give line a width
  setRandomTriangleWidths(baseHeight, options) {
    const lowerWidth = baseHeight - options.buffer;
    const upperWidth = baseHeight + options.buffer;
    return { lowerWidth: lowerWidth, upperWidth: upperWidth };
  },

  paddedLength: function(length, padding){
    return length - padding * 2;
  },

  positionAtIndex: function (index, count, length = 100){
    return length * (index / count);
  },
  positionAtIndexOnAxis: function(index, count, length = 100, padding = 0){
    const position = this.positionAtIndex(index, count - 1, length);
    const axis = position + padding;
    return axis + '%';
  },

  percentageWindowHeightToPx(height){
    return window.innerHeight * (height / 100);
  },
  percentageWindowWidthToPx(width){
    return window.innerWidth * (width / 100);
  },
  pxToPercentageWindowHeight(px){
    return px / window.innerHeight * 100;
  },
  pxToPercentageWindowWidth(px){
    return px / window.innerWidth * 100;
  }

};

export default Distance;
