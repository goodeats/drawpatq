import React from "react";
import Triangle from "./shapes/Triangle";

export default class Canvas extends React.Component {

  render() {
    return (
      <div>
        {Array.from(Array(10000), (e, i) => {
          return <Triangle key={i} lowerWidth={10} upperWidth={20} />;
        })}
      </div>
    );
  }
}
