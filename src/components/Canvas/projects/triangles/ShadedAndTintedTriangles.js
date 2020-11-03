import React from 'react';
import Triangle from '../../shapes/Triangle';
import Colors from '../../../../utils/Colors';
import Styles from '../../../../utils/Styles';

export default class ShadedAndTintedTriangles extends React.Component {

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
      count: 500
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
    const count = this.state.count;
    const attributes = this.state.attributes;
    return (
      <div>
        {Array.from(Array(count), (e, i) => {
          // rotate through attributes
          const attribute = attributes[i % attributes.length];
          const color = this.setColor(colorState, attribute);
          return <Triangle key={i} lowerWidth={20} upperWidth={40} color={color}/>;
        })}
      </div>
    );
  }
}
