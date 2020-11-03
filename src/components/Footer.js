import React from "react";
import NavButton from "./Footer/NavButton";

export default class Footer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      navPosition: 0,
      showNavBackward: false,
      showNavForward: true,
      inFocus: false
    };
    this.navBack = this.navBack.bind(this);
    this.navForward = this.navForward.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
  }

  navBack(){
    const navPosition = Math.max(this.state.navPosition - 1, 0);
    this.setState({ navPosition: navPosition });
    this.props.onNavigate(navPosition);

    if (navPosition === 1) this.setState({ showNavBackward: false});
  }

  navForward(){
    const navPosition = this.state.navPosition + 1;
    this.setState({ navPosition: navPosition });
    this.props.onNavigate(navPosition);
    if (navPosition > 1) this.setState({ showNavBackward: true });
  }

  onKeyPressed(e){
    const key = e.key;
    if (key === "ArrowRight" || key === "ArrowUp") {
      this.navForward();
    } else if (key === "ArrowLeft" || key === "ArrowDown") {
      this.navBack();
    }
  }

  // TODO: clicking brand logo should focus on footer to navigate by L/R arrow keys
  // the idea was to make it easy ux on mobile and desktop to cycle through brands
  handleFocus(){
    // console.log('focus')
    // this.setState({inFocus: true})
  }

  handleBlur(){
    // console.log('Blur')
    // this.setState({inFocus: false})
  }

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
      display: "none", // hiding footer 👈👉
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      backgroundColor: "rgba(0,0,0,-0.5)", // TODO: show title on mouse move
      fontSize: "calc(10px + 2vmin)",
      color: "#000",
      outline: 'none',
      zIndex: "1",
    };

    return (
      <footer
        style={footer}
        onKeyDown={(e) => this.onKeyPressed(e)}
        onFocus={this.handleFocus()}
        onBlur={this.handleBlur()}
        tabIndex={"0"}
      >
        <nav>
          <NavButton
            direction="back"
            disabled={this.state.showNavBackward}
            onClick={this.navBack}
            visible={this.state.inFocus}
          />
          <NavButton
            direction="forward"
            disabled={this.state.showNavForward}
            onClick={this.navForward}
            visible={this.state.inFocus}
          />
        </nav>
      </footer>
    );
  }
}
