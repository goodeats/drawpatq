const Size = {
  hello: function () {
    console.log("hi from Size");
  },

  sizes(props){
    // console.log(props)
    // TODO: make dynamic sizes
    return {
      background: {
        containerHeight: 150,
        lowerWidth: 10,
        upperWidth: 20
      }
    }
  },

};

export default Size;
