import React from 'react';
import Triangle from '../../shapes/Triangle';

export default class ManyTriangles extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    };
  }

  render() {
    return (
      <div>
        {Array.from(Array(50), (e, i) => {
          return <Triangle key={i} lowerWidth={40} upperWidth={60} />;
        })}
      </div>
    );
  }
}
