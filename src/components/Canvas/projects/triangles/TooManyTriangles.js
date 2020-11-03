import React from 'react';
import Triangle from '../../shapes/Triangle';

export default class LittleTriangles extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    };
  }

  render() {
    return (
      <div>
        {Array.from(Array(5000), (e, i) => {
          return <Triangle key={i} lowerWidth={10} upperWidth={20} />;
        })}
      </div>
    );
  }
}
