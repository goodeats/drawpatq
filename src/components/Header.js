import React from "react";

export default class Header extends React.Component {

  render() {

    // https://medium.com/@dmitrynozhenko/9-ways-to-implement-css-in-react-js-ccea4d543aa3
    const header = {
      width: '100%',
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: 'rgba(0,0,0,-0.5)', // TODO: show title on mouse move
      fontSize: 'calc(10px + 2vmin)',
      color: '#000',
      zIndex: '1'
    };

    const h1 = {
      zIndex: '1'
    };

    return (
      <header style={header}>
        <h1 style={h1}>{this.props.title}</h1>
      </header>
    );
  }
}
