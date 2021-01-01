import React from "react";
import Line from './Line';
import Distance from "../../../../../../utils/Distance";
import styled from "styled-components";
import Arrays from "../../../../../../utils/Arrays";

const TreeComponent = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;

const Tree = (props) => {

  const counts = props.counts;
  const lines = counts.lines;
  const lineTriangles = counts.lineTriangles

  const sizes = props.sizes;
  const colors = props.colors;
  const colorAttributes = colors.attributes;

  const getlineColor = (index) => {
    return Arrays.rotateNextIndex(colors.lineColors, index);
  }

  return (
    <TreeComponent id="tree">

      {Array.from(Array(lines), (e, index) => {
        const yAxis = Distance.positionAtIndexOnAxis(index, lines);
        const colorState = getlineColor(index)

        const width = lineTriangles * (index / lines);

        return (
          <Line
            key={`line-${index}`}
            id={`treeline-${index}`}
            triangleCount={lineTriangles}
            xAxis={width}
            yAxis={yAxis}
            sizes={sizes}
            colorState={colorState}
            colorAttributes={colorAttributes}
          />
        );
      })}
    </TreeComponent>
  );
}

export default Tree;
