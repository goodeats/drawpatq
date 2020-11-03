import React from 'react';
import Triangle from '../../shapes/Triangle';
import Colors from '../../../../utils/Colors';

export default class ColorTriangles extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      color: {
        r: Colors.getRandomColorValue(),
        g: Colors.getRandomColorValue(),
        b: Colors.getRandomColorValue(),
        a: null
      }
    };
  }

  componentDidMount(){
    this.setState({a: 1})
  }


  render() {
    const colorState = this.state.color;
    colorState.a = Colors.getRandomTransparencyValueRange(0.1, 0.3);
    const color = Colors.getRandomRgba(colorState)

    return (
      <div>
        {Array.from(Array(50), (e, i) => {
          return <Triangle key={i} lowerWidth={20} upperWidth={40} color={color}/>;
        })}
      </div>
    );
  }
}
