import React from "react";
import styled from "styled-components";
import Brand from "./Canvas/projects/brand/Brand000";

const HeaderComponent = styled.header`
  height: 150px;
  position: relative;
  padding: 25px 50px;
  overflow: hidden;
  z-index: 2;
`;

const BrandContainerComponent = styled.div`
  height: 100%;
  position: relative;
`;

const TaglineComponent = styled.span`
  position: absolute;
  top: 0;
  right: 50px;
  line-height: 150px;
`;

export default class Title extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <HeaderComponent>
        <BrandContainerComponent>
          <Brand height={40} />
        </BrandContainerComponent>
        <TaglineComponent>{"👨🏻‍💻"}</TaglineComponent>
      </HeaderComponent>
    );
  }
}
