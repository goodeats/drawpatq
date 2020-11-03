import React from 'react';
import Triangle from '../../shapes/Triangle';
import Colors from '../../../../utils/Colors';
import Styles from '../../../../utils/Styles';
import Maths from '../../../../utils/Maths';

export default class ClusteredTriangles extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      attributes: ['none', 'shade', 'tint'],
      color: {
        r: this.props.r || Colors.getRandomColorValue(),
        g: this.props.g || Colors.getRandomColorValue(),
        b: this.props.b || Colors.getRandomColorValue(),
        a: 1,
        minTint: 0.1,
        maxTint: 0.3,
        minShade: 0.1,
        maxShade: 0.3
      },
      count: 200,
      minTop: 20,
      maxTop: 80,
      minLeft: 20,
      maxLeft: 80,
    };
  }

  setColor(colorState, effect){
    switch (effect) {
      case 'tint':
        return Styles.setTint(colorState);
      case 'shade':
        return Styles.setShade(colorState);
      default:
        return Colors.getRandomRgba(colorState)
    }
  }

  render() {
    const colorState = this.state.color;
    const attributes = this.state.attributes;

    const minTop = this.state.minTop;
    const maxTop = this.state.maxTop;
    const minLeft = this.state.minLeft;
    const maxLeft = this.state.maxLeft;

    const xAxis = Maths.randomNumber(maxLeft, minLeft) + '%';
    const yAxis = Maths.randomNumber(maxTop, minTop) + '%';

    return (
      <div>
        {/* vertical bar */}
        {Array.from(Array(this.state.count), (e, i) => {
          // rotate through attributes
          const attribute = attributes[i % attributes.length];
          const color = this.setColor(colorState, attribute);
          const top = Maths.randomNumber(maxTop, minTop) + '%';
          return <Triangle key={i} top={top} left={xAxis} lowerWidth={20} upperWidth={40} color={color} />;
        })}

        {/* horizontal bar */}
        {Array.from(Array(this.state.count), (e, i) => {
          // rotate through attributes
          const attribute = attributes[i % attributes.length];
          const color = this.setColor(colorState, attribute);
          const left = Maths.randomNumber(maxLeft, minLeft) + '%';
          return <Triangle key={i} top={yAxis} left={left} lowerWidth={20} upperWidth={40} color={color} />;
        })}
      </div>
    );
  }
}
