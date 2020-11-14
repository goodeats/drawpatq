import Styles from '../../../../../utils/Styles';
import Distance from '../../../../../utils/Distance';

const USATrianglesMaths = {
  hello: function () {
    console.log("hi from USATrianglesMaths");
  },

  HEIGHT: 60 / 1.9,
  STRIPE_COUNT: 13,
  BLUE_HEIGHT_STRIPE_INDEX: 7,

  colors(){
    // https://flagcolor.com/american-flag-colors/
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
        stripes: 13,
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
    return Distance.setRandomTriangleWidths(baseHeight, { buffer: options.buffer || 5 })
  },

  style: (options) => {
    // https://www.inchcalculator.com/american-flag-size-proportions-calculator/
    // TODO: set dimensions here from options
    const paddedWidth = 6.3;
    const paddedHeight = 5.4;

    const stripeCount = options.stripeCount;

    return {
      stars: {
        stars: {
          height: options.blueHeightStripeIndex / stripeCount * 100 + "%",
          width: 0.76 / 1.9 * 100 + "%"
        },
        starClusterLines: {
          height: Distance.paddedLength(100, paddedHeight) + "%",
          width: Distance.paddedLength(100, paddedWidth) + "%",
          top: paddedHeight + "%",
          left: paddedWidth + "%"
        }
      },
      stripes: {
        stripeCount: stripeCount
      }
    }
  }
};

export default USATrianglesMaths;
