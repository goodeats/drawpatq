import React from "react";
import styled from 'styled-components';

const ButtonComponent = styled.button`
  margin: 20px;
  padding: 15px 24px;
  float: left;
  background: white;
  border: 1px solid black;
  cursor: pointer;

  &:focus, &:hover {
    background: black;
    color: white;
  }
`;

const ProjectButton = (props) => {

  return (
    <ButtonComponent onClick={props.onClick}>
      {props.text}
    </ButtonComponent>
  );
}

export default ProjectButton;
