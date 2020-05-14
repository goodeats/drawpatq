import React from "react";
import ReloadButton from "./Footer/ReloadButton";

export default class Footer extends React.Component {
  render() {
    // https://medium.com/@dmitrynozhenko/9-ways-to-implement-css-in-react-js-ccea4d543aa3
    const footer = {
      height: "auto",
      width: "100%",
      position: 'absolute',
      bottom: '0',
      left: '0',
      marginBottom: "0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      backgroundColor: "rgba(0,0,0,-0.5)", // TODO: show title on mouse move
      fontSize: "calc(10px + 2vmin)",
      color: "#000",
      zIndex: "1",
    };

    return (
      <footer style={footer}>
        <nav>
          <ReloadButton />
        </nav>
      </footer>
    );
  }
}
