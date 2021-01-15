import React from "react";
import styled from "styled-components";
import Colors from '../utils/Colors'

const SubTitleComponent = styled.h5`
  flex-grow: 0;
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

