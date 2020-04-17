import React from "react";

export default class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    };
  }

  render() {


    // https://medium.com/@dmitrynozhenko/9-ways-to-implement-css-in-react-js-ccea4d543aa3
    const header = {
      height: '100vh',
      width: '100%',

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',

      overflow: 'hidden',

      backgroundColor: '#fff',
      fontSize: 'calc(10px + 2vmin)',
      color: '#000',
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
