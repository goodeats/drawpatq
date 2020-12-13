import Styles from '../../../../../utils/Styles';
import Distance from '../../../../../utils/Distance';
import Color from './Attributes/Color';

// "Utils" probably better, but I like "Maths" for now

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

const Attributes = {
  hello: function () {
    console.log("hi from Attributes");
  },

  colors(theme){
    return Color.colors();
  },

  counts(){
    return {
      stars: {
        blue: 2000,
        stars: 5,
        starColumns: 11
      },
      stripes: {
        stripes: STRIPE_COUNT,
        stripeTriangles: 300
      }
    }
  },

  sizes(){
    const stripeSize = this.stripeSize();
    const starSize = this.starSize();

    return {
      stars: {
        blue: stripeSize,
        stars: starSize
      },
      stripes: stripeSize
    }
  },

  // fill triangles to give line a width
  // TODO: make configurable in case I want "extra thin/thick" for example
  stripeSize(){
    // "2 / 3" is by trial and error
    // leaving that out makes bottom line too prominent (last drawn, new triangles on top)
    const stripeSize = DIMENSIONS.widthStripe * this.flagDimensions().FLAG_HEIGHT_PX * (2 / 3);
    const buff = stripeSize / 5;
    return Distance.setRandomTriangleWidths(stripeSize - buff, { buffer: buff })
  },

  starSize(){
    const starSize = DIMENSIONS.starSize * this.flagDimensions().FLAG_HEIGHT_PX / 2;
    const buff = starSize / 5;
    return Distance.setRandomTriangleWidths(starSize - buff, { buffer: buff })
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

  style(theme){
    const flagDimensions = this.flagDimensions();
    const flagHeight = flagDimensions.FLAG_HEIGHT
    const flagTop = flagDimensions.FLAG_TOP

    // https://www.inchcalculator.com/american-flag-size-proportions-calculator/
    // TODO: set DIMENSIONS here from options
    const unionPaddedWidth = DIMENSIONS.paddingUnionWidth * 100;
    const unionPaddedHeight = DIMENSIONS.paddingUnionHeight * 100;
    const style = {
      flag: {
        height: flagHeight + '%',
        top: flagTop + '%'
      },
      stars: {
        stars: {
          height: HEIGHT_UNION * 100 + "%",
          width: DIMENSIONS.widthUnion / DIMENSIONS.width * 100 + "%"
        },
        starClusterLines: {
          height: Distance.paddedLength(100, unionPaddedHeight) + "%",
          width: Distance.paddedLength(100, unionPaddedWidth) + "%",
          top: unionPaddedHeight + "%",
          left: unionPaddedWidth + "%"
        }
      },
      stripes: {
        stripeCount: STRIPE_COUNT
      }
    }

    if (theme === 'grayscale'){
      style.flag.filter = 'grayscale(1)'
    }

    return style;
  }
};

export default Attributes;
