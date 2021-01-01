import Distance from '../../../../../../utils/Distance';

const STRIPE_COUNT = 13;
const BLUE_HEIGHT_STRIPE_INDEX = 7;
const HEIGHT_UNION = BLUE_HEIGHT_STRIPE_INDEX / STRIPE_COUNT;

// website uses a vertical "width" I guess...
const DIMENSIONS = {
  height: 1.0, //  A. hoist (width) of flag
  width: 1.9, // B. fly (length) of flag
  heightUnion: HEIGHT_UNION, // C. hoist (width) of union
  widthUnion: 0.76, // D. fly (length) of union // side note: this is 40% of width
  paddingUnionHeight: 0.054, // E.
  starRowInterval: 0.054, // F. (not used, same as E)
  paddingUnionWidth: 0.063, // G.
  starColumnInterval: 0.063, // H. (not used, same as G)
  starSize: 0.0616, // K. diameter of star
  widthStripe: 1 / STRIPE_COUNT // L. width of stripe
}

const FLAG_WIDTH = 60;

const Size = {
  hello: function () {
    console.log("hi from Size");
  },

  sizes(){
    const lineSize = this.lineSize();

    return {
      tree: lineSize
    }
  },

  // fill triangles to give line a width
  // TODO: make configurable in case I want "extra thin/thick" for example
  lineSize(){
    // "2 / 3" is by trial and error
    // leaving that out makes bottom line too prominent (last drawn, new triangles on top)
    const lineSize = (1 / 9) * this.flagDimensions().FLAG_HEIGHT_PX * (2 / 3);
    console.log(lineSize)
    const buff = lineSize / 5;
    return Distance.setRandomTriangleWidths(lineSize - buff, { buffer: buff })
  },

  // need to reset these values on window resize
  // see comments on these values at the top
  flagDimensions(){
    const FLAG_WIDTH_PX_new = Distance.percentageWindowWidthToPx(FLAG_WIDTH);
    const FLAG_HEIGHT_PX_new = FLAG_WIDTH_PX_new / DIMENSIONS.width;
    const FLAG_HEIGHT_new = Distance.pxToPercentageWindowHeight(FLAG_HEIGHT_PX_new);
    const FLAG_TOP_new = (100 - FLAG_HEIGHT_new) / 2;
    return {
      FLAG_WIDTH_PX: FLAG_WIDTH_PX_new,
      FLAG_HEIGHT_PX: FLAG_HEIGHT_PX_new,
      FLAG_HEIGHT: FLAG_HEIGHT_new,
      FLAG_TOP: FLAG_TOP_new
    }
  },

};

export default Size;
