import React from 'react';
import Triangle from '../../shapes/Triangle';
import Colors from '../../../../utils/Colors';
import Maths from '../../../../utils/Maths';

export default class TintdTriangles extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      color: {
        r: Colors.getRandomColorValue(),
        g: Colors.getRandomColorValue(),
        b: Colors.getRandomColorValue(),
        a: 1,
        minTint: 0.1,
        maxTint: 0.3
      }
    };
  }

  render() {
    const colorState = this.state.color;
    const minTint = this.state.color.minTint;
    const maxTint = this.state.color.maxTint;
    return (
      <div>
        {Array.from(Array(500), (e, i) => {
          const tintFactor = Maths.randomNumber(maxTint, minTint);
          colorState.tintFactor = tintFactor;
          const color = Colors.getRandomRgbaTint(colorState)
          return <Triangle key={i} lowerWidth={20} upperWidth={40} color={color}/>;
        })}
      </div>
    );
  }
}
