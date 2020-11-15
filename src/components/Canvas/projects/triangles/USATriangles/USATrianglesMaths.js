import Styles from '../../../../../utils/Styles';
import Distance from '../../../../../utils/Distance';

// "Utils" probably better, but I like "Maths" for now

// https://flagcolor.com/american-flag-colors/
// https://www.ushistory.org/betsy/flagetiq3.html

const HEIGHT = 60 / 1.9;
const STRIPE_COUNT = 13;
const BLUE_HEIGHT_STRIPE_INDEX = 7;
const HEIGHT_UNION = BLUE_HEIGHT_STRIPE_INDEX / STRIPE_COUNT;

// website uses a vertical "width" I guess...
const DIMENSIONS = {
  height: 1.0, //  A. hoist (width) of flag
  width: 1.9, // B. fly (length) of flag
  heightUnion: HEIGHT_UNION, // C. hoist (width) of union
  widthUnion: 0.76, // D. fly (length) of union
  paddingUnionHeight: 0.054, // E.
  starRowInterval: 0.054, // F. (not used, same as E)
  paddingUnionWidth: 0.063, // G.
  starColumnInterval: 0.063, // H. (not used, same as G)
  starSize: 0.0616, // K. diameter of star
  widthStripe: 1 / STRIPE_COUNT // L. width of stripe
}

const FLAG_WIDTH = 60;
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

  colors(){
    const RED = { r: 191, g: 13, b: 62 };
    const WHITE = { r: 255, g: 255, b: 255 };
    const BLUE = { r: 10, g: 49, b: 97 };

    const COLOR_STATE_RED = Styles.buildColor(RED, { includeDefaultStyle: true });
    const COLOR_STATE_WHITE = Styles.buildColor(WHITE, { includeDefaultStyle: true });
    const COLOR_STATE_BLUE = Styles.buildColor(BLUE, { includeDefaultStyle: true });

    const COLOR_ATTRIBUTES = ['none', 'shade', 'tint'];

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
        blue: 4000,
        stars: 5,
        starColumns: 11
      },
      stripes: {
        stripes: STRIPE_COUNT,
        stripeTriangles: 300
      }
    }
  },

  sizes(options){
    const stripeWidth = this.stripeWidth(options);

    return {
      stars: {
        blue: stripeWidth,
        stars: {
          lowerWidth: stripeWidth.lowerWidth / 2,
          upperWidth: stripeWidth.upperWidth / 2
        }
      },
      stripes: stripeWidth
    }
  },

  // fill triangles to give line a width
  // TODO: make configurable in case I want "extra thin/thick" for example
  stripeWidth: (options) => {
    const flagHeightToPx = Distance.percentageWindowHeightToPx(options.usaHeight);
    const baseHeight = flagHeightToPx / options.stripeCount;
    // console.log(baseHeight)
    return Distance.setRandomTriangleWidths(baseHeight, { buffer: options.buffer || 5 })
  },

  style: (options) => {
    // https://www.inchcalculator.com/american-flag-size-proportions-calculator/
    // TODO: set DIMENSIONS here from options
    const unionPaddedWidth = DIMENSIONS.paddingUnionWidth * 10;
    const unionPaddedHeight = DIMENSIONS.paddingUnionHeight * 10;

    const stripeCount = options.stripeCount;

    const flagHeight = Distance.percentageWindowWidthToPx(60) * 0.6 / DIMENSIONS.height;
    const flagTop = (window.innerHeight - flagHeight) / 2;

    return {
      flag: {
        // height: flagHeight + 'px',
        height: FLAG_HEIGHT + '%',
        // top: flagTop + 'px'
        top: FLAG_TOP + '%'
      },
      stars: {
        stars: {
          height: BLUE_HEIGHT_STRIPE_INDEX / stripeCount * 100 + "%",
          width: 0.76 / 1.9 * 100 + "%"
        },
        starClusterLines: {
          height: Distance.paddedLength(100, unionPaddedHeight) + "%",
          width: Distance.paddedLength(100, unionPaddedWidth) + "%",
          top: unionPaddedHeight + "%",
          left: unionPaddedWidth + "%"
        }
      },
      stripes: {
        stripeCount: stripeCount
      }
    }
  }
};

export default USATrianglesMaths;
