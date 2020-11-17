import Styles from '../../../../../utils/Styles';
import Distance from '../../../../../utils/Distance';

// "Utils" probably better, but I like "Maths" for now

// https://flagcolor.com/american-flag-colors/
// https://www.ushistory.org/betsy/flagetiq3.html

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
// const FLAG_HEIGHT = 60 / 1.9;
// 60 / 1.9 doesn't work if it's a vertical phone
// get width px / length ratio
// convert to height px
// convert to window height percentage
// easier to modify inner components by % than
const FLAG_WIDTH_PX = Distance.percentageWindowWidthToPx(FLAG_WIDTH);
const FLAG_HEIGHT_PX = FLAG_WIDTH_PX / DIMENSIONS.width;
const FLAG_HEIGHT = Distance.pxToPercentageWindowHeight(FLAG_HEIGHT_PX);
const FLAG_TOP = (100 - FLAG_HEIGHT) / 2;

const USATrianglesMaths = {
  hello: function () {
    console.log("hi from USATrianglesMaths");
  },

  setColorAttributes(theme){
    switch (theme) {
      case 'solid':
        return ['none'];
      default:
        return ['none', 'shade', 'tint'];
    }
  },

  colors(theme){
    const RED = { r: 191, g: 13, b: 62 };
    const WHITE = { r: 255, g: 255, b: 255 };
    const BLUE = { r: 10, g: 49, b: 97 };

    const COLOR_STATE_RED = Styles.buildColor(RED, { defaultStyle: true });
    const COLOR_STATE_WHITE = Styles.buildColor(WHITE, { defaultStyle: true });
    const COLOR_STATE_BLUE = Styles.buildColor(BLUE, { defaultStyle: true });

    const COLOR_ATTRIBUTES = this.setColorAttributes(theme);

    return {
      stars: {
        blue: COLOR_STATE_BLUE,
        white: COLOR_STATE_WHITE,
        attributes: COLOR_ATTRIBUTES
      },
      stripes: {
        red: COLOR_STATE_RED,
        white: COLOR_STATE_WHITE,
        stripeColors: [COLOR_STATE_RED, COLOR_STATE_WHITE], // to rotate
        attributes: COLOR_ATTRIBUTES
      }
    }
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
  stripeSize: () => {
    // "2 / 3" is by trial and error
    // leaving that out makes bottom line too prominent (last drawn, new triangles on top)
    const stripeSize = DIMENSIONS.widthStripe * FLAG_HEIGHT_PX * (2 / 3);
    const buff = stripeSize / 5;
    return Distance.setRandomTriangleWidths(stripeSize - buff, { buffer: buff })
  },

  starSize: () => {
    const starSize = DIMENSIONS.starSize * FLAG_HEIGHT_PX / 2;
    const buff = starSize / 5;
    return Distance.setRandomTriangleWidths(starSize - buff, { buffer: buff })
  },

  style: () => {
    // https://www.inchcalculator.com/american-flag-size-proportions-calculator/
    // TODO: set DIMENSIONS here from options
    const unionPaddedWidth = DIMENSIONS.paddingUnionWidth * 100;
    const unionPaddedHeight = DIMENSIONS.paddingUnionHeight * 100;
    return {
      flag: {
        height: FLAG_HEIGHT + '%',
        top: FLAG_TOP + '%'
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
  }
};

export default USATrianglesMaths;
