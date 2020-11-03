import React from 'react';
import Triangle from '../../shapes/Triangle';
import Colors from '../../../../utils/Colors';
import Maths from '../../../../utils/Maths';

export default class ShadedTriangles extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      color: {
        r: Colors.getRandomColorValue(),
        g: Colors.getRandomColorValue(),
        b: Colors.getRandomColorValue(),
        a: 1,
        minShade: 0.1,
        maxShade: 0.3
      }
    };
  }

  render() {
    const colorState = this.state.color;
    const minShade = this.state.color.minShade;
    const maxShade = this.state.color.maxShade;
    return (
      <div>
        {Array.from(Array(500), (e, i) => {
          const shadeFactor = Maths.randomNumber(maxShade, minShade);
          colorState.shadeFactor = shadeFactor;
          const color = Colors.getRandomRgbaShade(colorState)
          return <Triangle key={i} lowerWidth={20} upperWidth={40} color={color}/>;
        })}
      </div>
    );
  }
}
