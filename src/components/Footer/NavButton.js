import React from "react";

export default class NavButton extends React.Component {
  // do this
  // https://marcysutton.com/links-vs-buttons-in-modern-web-applications

  // TODO: display ux:
  // have hidden unless mouse move
  // or mobile screen tap (toggle)
  // give a nice fade in/out 🎬

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // move forward or back to the next art
  handleClick(e) {
    e.preventDefault();
    this.props.onClick();
  }

  render() {
    // have just empoji with no background
    // https://css-tricks.com/snippets/css/transparent-background-images/ #=> interesting!
    // generate the image from here https://stackoverflow.com/questions/5845238/javascript-generate-transparent-1x1-pixel-in-dataurl-format
    const a = {
      // display: 'none', // hiding for keydowns instead of button clicks // bigger canvas
      margin: "20px",
      background: "rgba(255, 255, 255, -1)",
      borderRadius: "20px",
      fontSize: "3rem",
      cursor: "pointer",
      textDecoration: "none",
      hover: {
        background: "rgba(0, 0, 0, 1)",
        fontSize: "3.4rem",
      },
    };

    return (
      <a
        style={a}
        href={"/"}
        disabled={this.props.disabled}
        onClick={this.handleClick}
      >
        {/* TODO: go more indepth on a11y
          https://medium.com/@seanmcp/%EF%B8%8F-how-to-use-emojis-in-react-d23bbf608bf7 */}
        <span role="img" aria-label="next">
          {this.props.direction === "forward" ? "👉" : "👈"}
        </span>
      </a>
    );
  }
}
