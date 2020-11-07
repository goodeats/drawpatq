import React from 'react';
import styled from "styled-components";
import Container from "../../Container";
import StripeTriange from './USATriangles/StripeTriangle';
import Triangle from '../../shapes/Triangle';
import Styles from '../../../../utils/Styles';
import Maths from '../../../../utils/Maths';
import Arrays from '../../../../utils/Arrays';
import Distance from '../../../../utils/Distance';

export default class USATriangles extends React.Component {

  // https://flagcolor.com/american-flag-colors/
  RED = { r: 191, g: 13, b: 62 }
  WHITE = { r: 255, g: 255, b: 255 }
  BLUE = { r: 10, g: 49, b: 97 }
  XWHITE = { r: 0, g: 0, b: 255 }

  COLOR_STATE_RED = Styles.buildColor(this.RED, { includeDefaultStyle: true })
  COLOR_STATE_WHITE = Styles.buildColor(this.WHITE, { includeDefaultStyle: true })
  COLOR_STATE_BLUE = Styles.buildColor(this.BLUE, { includeDefaultStyle: true })
  COLOR_STATE_XWHITE = Styles.buildColor(this.XWHITE, { includeDefaultStyle: true })

  constructor(props) {
    super(props)
    this.state = {
      attributes: ['none', 'shade', 'tint'],
      count: 100,
      position: {
        minTop: 20,
        maxTop: 80,
        minLeft: 20,
        maxLeft: 80
      },
      stripeCount: 13,
      blueCount: 500,
      starLineCount: 11,
      starClusterCount: 4,
      starPadding: 3
    };
  }

  setColor(index, colorState){
    const attribute = Arrays.rotateNextIndex(this.state.attributes, index);
    return Styles.setColor(colorState, attribute);
  }

  getStripeYAxis(top, height, stripeIndex, stripeCount){
    const stripePosition = Distance.positionAtIndex(height, stripeIndex, stripeCount)
    const yAxis = stripePosition + top;
    return yAxis + '%';
  }

  renderStripeTriangle(index, colorState, position){
    // position along stripe
    const left = Maths.randomNumber(position.maxLeft, position.minLeft) + '%';

    // shade/tint stripe triangles
    const color = this.setColor(index, colorState);

    return (
      <StripeTriange
        key={`stripe-${index}`}
        top={position.yAxis}
        left={left}
        lowerWidth={10}
        upperWidth={20}
        color={color}
      />
    );
  }

  renderStripe(position, colorState){
    return Array.from(Array(this.state.count), (e, index) => {
      return this.renderStripeTriangle(index, colorState, position)
    })
  }

  renderStripes(){
    let position = this.state.position;
    const height = position.maxTop - position.minTop;

    const stripeCount = this.state.stripeCount;

    return(
      <div>
        {Array.from(Array(stripeCount), (e, stripeIndex) => {
          // stripe position
          position.yAxis = this.getStripeYAxis(position.minTop, height, stripeIndex, stripeCount);

          // stripe color
          const isRed = Maths.isEven(stripeIndex); // first red stripe at index 0 🤓
          const colorState = isRed ? this.COLOR_STATE_RED : this.COLOR_STATE_WHITE;

          return this.renderStripe(position, colorState)
        })}
      </div>
    )
  }

  renderBlueBackground(position){
    return(
      <div id="container-blue-background">
        {Array.from(Array(this.state.blueCount), (e, index) => {
          // inside absolute position container
          const top = Maths.randomNumber(100, 0) + '%';
          const left = Maths.randomNumber(100, 0) + '%';

          // shade/tint stripe triangles
          const attribute = Arrays.rotateNextIndex(this.state.attributes, index);
          const color = Styles.setColor(this.COLOR_STATE_BLUE, attribute);

          return <Triangle key={`blue-background-${index}`} top={top} left={left} lowerWidth={10} upperWidth={20} color={color} />;
        })}
      </div>
    )
  }

  getStarYAxis(top, height, starIndex, starCount) {
    const starPosition = Distance.positionAtIndex(height, starIndex, starCount)
    const xAxis = starPosition + top;
    return xAxis + '%';
  }

  getStarLineXAxis(left, width, starIndex, starCount) {
    const starLinePosition = Distance.positionAtIndex(width, starIndex, starCount)
    const xAxis = starLinePosition + left;
    return xAxis + '%';
  }

  renderStar(index, colorState, position) {
    // position along stripe
    // const left = Maths.randomNumber(position.maxLeft, position.minLeft) + '%';

    // shade/tint stripe triangles
    const attribute = Arrays.rotateNextIndex(this.state.attributes, index);
    const color = Styles.setColor(colorState, attribute);

    return Array.from(Array(10), (e, index) => {
      return <Triangle
        key={`star-${index}`}
        top={position.yAxis}
        left={position.xAxis}
        lowerWidth={5}
        upperWidth={10}
        color={color} />;
    })
  }

  renderStarLine(starLineIndex, position, colorState, starLineCount){
    const padding = this.state.starPadding;


    position.yAxis = Distance.positionAtIndexOnAxis(
      100, // - starPadding,
      starLineIndex,
      starLineCount,
      0 //starPadding
    );

    const starLineStyle = {
      height: "100%",
      position: "absolute",
      top: 0,
      left: position.xAxis,
    };
    console.log(position.xAxis)

    return (
      <div
        key={`star-line-${starLineIndex}`}
        id={`star-line-${starLineIndex}`}
        style={starLineStyle}
      >
        {Array.from(Array(5), (e, starLineStarIndex) => {
          // render 5 stars and display:none for the last star where it should be 4
          // shift content down half a star
          // const starPadding = starLineCount === 4 ? padding / 2 : 0;

          // _
          // _
          // _
          // _
          // _

          position.yAxis = Distance.positionAtIndexOnAxis(100, starLineStarIndex, 5, 0);

          return this.renderStar(starLineStarIndex, colorState, position);
        })}
      </div>
    );
  }

  renderStars(position){
    const starLineCount = this.state.starLineCount;
    const padding = this.state.starPadding;
    // star color
    const colorState = this.COLOR_STATE_XWHITE;

    const starsLineH = 100 + padding * 2 + "%";
    const starsLineW = (position.maxLeft - position.minLeft) / 2 + padding * 2 + "%";
    const starsLineL = position.minLeft - padding / 2 + "%";
    const starsLineT = position.minTop - padding / 2 + "%";

    // move this down so blue gets it
    // const starsH = (position.maxTop - position.minTop) / 2 + "%";
    // const starsW = (position.maxLeft - position.minLeft) / 2 + "%";
    // const starsL = position.minLeft + "%";
    // const starsT = position.minTop + "%";
    const paddedLength = (100 - padding * 2) + '%';
    const paddedMargin = 0 - padding + '%';
    const starsPadding = {
      height: paddedLength,
      width: paddedLength,
      position: 'absolute',
      top: paddedMargin,
      left: paddedMargin,
    };

    // const starLinePadding = 10 * (padding / starLineCount);
    // position.xAxis = Distance.positionAtIndexOnAxis(
    //   100,
    //   11,
    //   starLineCount,
    //   starLinePadding
    // );

    // |||||||||||
    return (
      <div id="container-stars" style={starsPadding}>
        {Array.from(Array(starLineCount), (e, starLineIndex) => {
          // star position
          // vertical columns going across
          const starCount = Maths.isEven(starLineIndex) ? 5 : 4;

          const starLinePadding = 10 * (padding / starLineCount);
          position.xAxis = Distance.positionAtIndexOnAxis(
            100,
            starLineIndex,
            starLineCount - 1,
            starLinePadding
          );
          // // console.log(position.xAxis)

          return this.renderStarLine(
            starLineIndex,
            position,
            colorState,
            starCount
          );
        })}
      </div>
    );
  }

  renderBlue(){
    let position = this.state.position;
    position.height = (position.maxTop + position.minTop) / 2;
    position.width = (position.maxLeft + position.minLeft) / 2;

    const padding = this.state.starPadding;

    // have to do this outside style for some reason
    // maybe not, moved down from stars so this might work now
    const starsH = (position.maxTop - position.minTop) / 2 + padding * 2 + "%";
    const starsW = (position.maxLeft - position.minLeft) / 2 + padding * 2 + "%";
    const starsL = position.minLeft - padding / 2 + "%";
    const starsT = position.minTop - padding / 2 + "%";

    return (
      <div
        id="container-blue"
        style={{
          height: starsH,
          width: starsW,
          position: "absolute",
          left: starsL,
          top: starsT,
        }}
      >
        {this.renderBlueBackground(position)}
        {this.renderStars(position)}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderStripes()}
        {this.renderBlue()}
      </div>
    );
  }
}
