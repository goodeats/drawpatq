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
  // fill triangles to give line a width
  setRandomTriangleWidths(baseHeight, options) {
    const lowerWidth = baseHeight - options.buffer;
    const upperWidth = baseHeight + options.buffer;
    return { lowerWidth: lowerWidth, upperWidth: upperWidth };
  },

  paddedLength: function(length, padding){
    return length - padding * 2;
  },

  positionAtIndex: function (length, index, count){
    return length * (index / count);
  },
  positionAtIndexOnAxis: function(length, index, count, padding = 0){
    const position = this.positionAtIndex(length, index, count)
    const axis = position + padding;
    return axis + '%';
  }

};

export default Distance;
