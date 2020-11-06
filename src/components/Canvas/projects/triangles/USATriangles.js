import React from 'react';
import Triangle from '../../shapes/Triangle';
import Styles from '../../../../utils/Styles';
import Maths from '../../../../utils/Maths';
import Arrays from '../../../../utils/Arrays';
import Distance from '../../../../utils/Distance';

export default class USATriangles extends React.Component {

  // https://flagcolor.com/american-flag-colors/
  RED = { r: 191, g: 13, b: 62 }
  WHITE = { r: 255, g: 255, b: 255 }
  BLUE = { r: 10, g: 49, b: 97 }

  COLOR_STATE_RED = Styles.buildColor(this.RED, { includeDefaultStyle: true })
  COLOR_STATE_WHITE = Styles.buildColor(this.WHITE, { includeDefaultStyle: true })
  COLOR_STATE_BLUE = Styles.buildColor(this.BLUE, { includeDefaultStyle: true })

  constructor(props) {
    super(props)
    this.state = {
      attributes: ['none', 'shade', 'tint'],
      count: 100,
      position: {
        minTop: 20,
        maxTop: 80,
        minLeft: 20,
        maxLeft: 80
      },
      stripeCount: 13
    };
  }

  getStripeYAxis(top, height, stripeIndex, stripeCount){
    const stripePosition = Distance.positionAtIndex(height, stripeIndex, stripeCount)
    const yAxis = stripePosition + top;
    return yAxis + '%';
  }

  renderStripeTriangle(index, colorState, position){
    const attribute = Arrays.rotateNextIndex(this.state.attributes, index);
    // shade/tint stripe triangles
    const color = Styles.setColor(colorState, attribute);
    // position along stripe
    const left = Maths.randomNumber(position.maxLeft, position.minLeft) + '%';
    return <Triangle key={`stripe-${index}`} top={position.yAxis} left={left} lowerWidth={10} upperWidth={20} color={color} />;
  }

  renderStripe(position, colorState){
    return Array.from(Array(this.state.count), (e, index) => {
      return this.renderStripeTriangle(index, colorState, position)
    })
  }

  renderStripes(){
    let position = this.state.position;
    const height = position.maxTop - position.minTop;

    const stripeCount = this.state.stripeCount;

    return(
      <div>
        {Array.from(Array(stripeCount), (e, stripeIndex) => {
          const isRed = Maths.isEven(stripeIndex); // first red stripe at index 0 🤓
          const colorState = isRed ? this.COLOR_STATE_RED : this.COLOR_STATE_WHITE;

          position.yAxis = this.getStripeYAxis(position.minTop, height, stripeIndex, stripeCount);

          return this.renderStripe(position, colorState)
        })}
      </div>
    )
  }

  renderStars(){

  }

  render() {
    return (
      <div>
        {this.renderStripes()}
        {this.renderStars()}
      </div>
    );
  }
}
