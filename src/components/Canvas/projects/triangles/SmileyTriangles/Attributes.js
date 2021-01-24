import Color from './Attributes/Color';
import Count from './Attributes/Count';
import Dimension from './Attributes/Dimension';
import Size from './Attributes/Size';

// copied from src/components/Canvas/projects/triangles/USATriangles/USATrianglesMaths.js
// then broken apart into smaller files

const Attributes = {
  hello: function () {
    console.log("hi from Attributes");
  },

  colors(theme){
    return Color.colors(theme);
  },

  counts(){
    return Count.counts();
  },

  sizes(){
    return Size.sizes();
  },

  dimensions(theme){
    return Dimension.dimensions(theme);
  }
};

export default Attributes;
