import React from "react";
import styled from "styled-components";
import Colors from '../utils/Colors'

const SubTitleComponent = styled.span`
  max-width: 50%;
  line-height: 100px;
  float: right;
  /* flex-grow: 0; */
  color: ${(props) => Colors.black};
  font-size: 14px;
  font-weight: 100;
  z-index: 2;
`;

const SubTitle = (props) => {

  return (
    <SubTitleComponent>
      {props.title}
    </SubTitleComponent>
  );
}

export default SubTitle;

