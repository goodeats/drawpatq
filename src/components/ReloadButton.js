import React from "react";

export default class ReloadButton extends React.Component {

  // TODO: display ux:
  // have hidden unless mouse move
  // or mobile screen tap (toggle)
  // give a nice fade in/out 🎬

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // generative art should be able to be refreshed
  // multiple times to demonstrate randomness of the same thought
  // TODO: reload component, refreshing page is a heavy quick fix
  handleClick(e){
    console.log('reloading new generated art...');
    e.target.setAttribute('disabled', 'disabled');
    window.location.reload();
  }

  render() {

    // have just empoji with no background
    // https://css-tricks.com/snippets/css/transparent-background-images/ #=> interesting!
    // generate the image from here https://stackoverflow.com/questions/5845238/javascript-generate-transparent-1x1-pixel-in-dataurl-format
    const button = {
      position: 'absolute',
      bottom: '20px',
      background: 'rgba(255, 255, 255, -1)',
      borderRadius: '20px',
      fontSize: '3rem',
      cursor: 'pointer',
      hover: {
        background: 'rgba(0, 0, 0, 1)',
        fontSize: '3.4rem'
      },
    };

    return (
      <button style={button} onClick={this.handleClick}>
        {/* TODO: go more indepth on a11y
          https://medium.com/@seanmcp/%EF%B8%8F-how-to-use-emojis-in-react-d23bbf608bf7 */}
        <span role="img" aria-label="refresh">
          🔀
        </span>
      </button>
    );
  }
}
