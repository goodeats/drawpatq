import React from 'react';
import Triangle from '../../shapes/Triangle';
import Colors from '../../../../utils/Colors';
import Styles from '../../../../utils/Styles';
import Maths from '../../../../utils/Maths';
import Container from '../../../Canvas/Container';
import Arrays from '../../../../utils/Arrays';

// TODO: culsters and content seem to be pushed down to the right
// consider negatives or how triangles were previously set to the edges
// Triangle setRandomPos()

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
      clusterCount: 4,
      count: 40,
      position: {
        minTop: 20,
        maxTop: 80,
        minLeft: 20,
        maxLeft: 80
      }
    };
  }

  setColor(colorState, effect) {
    switch (effect) {
      case 'tint':
        return Styles.setTint(colorState);
      case 'shade':
        return Styles.setShade(colorState);
      default:
        return Colors.getRandomRgba(colorState)
    }
  }

  renderCluster(clusterPosition, i){
    const attributes = this.state.attributes;
    const colorState = this.state.color;

    const position = this.state.position;
    const minTop = position.minTop;
    const maxTop = position.maxTop;
    const minLeft = position.minLeft;
    const maxLeft = position.maxLeft;

    return (
      <Container
        key={i}
        styles={{
          height: clusterPosition.height,
          width: clusterPosition.width,
          top: clusterPosition.top,
          left: clusterPosition.left,
          position: 'absolute'
        }}
        content={
          <div>
            {Array.from(Array(this.state.count), (e, i) => {
              // rotate through attributes
              const attribute = Arrays.rotateNextIndex(attributes, i);
              const color = this.setColor(colorState, attribute);
              const top = Maths.randomNumber(maxTop, minTop) + '%';
              const left = Maths.randomNumber(maxLeft, minLeft) + '%';
              return <Triangle key={i} top={top} left={left} lowerWidth={20} upperWidth={40} color={color} />;
            })}
          </div>
        }
      />
    )
  }

  render() {
    // const colorState = this.state.color;
    // const attributes = this.state.attributes;

    const minTop = this.state.position.minTop;
    const maxTop = this.state.position.maxTop;
    const minLeft = this.state.position.minLeft;
    const maxLeft = this.state.position.maxLeft;

    return (
      <div>
        {Array.from(Array(this.state.clusterCount), (e, i) => {
          const xAxis = Maths.randomNumber(maxLeft, minLeft) + '%';
          const yAxis = Maths.randomNumber(maxTop, minTop) + '%';

          const clusterPosition = {
            height: '100px',
            width: '100px',
            top: xAxis,
            left: yAxis,
          }

          return this.renderCluster(clusterPosition, i);
        })}

      </div>
    );
  }
}
