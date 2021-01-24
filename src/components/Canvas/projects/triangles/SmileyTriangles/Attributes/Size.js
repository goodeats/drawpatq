const Size = {
  hello: function () {
    console.log("hi from Size");
  },

  sizes(props){
    // console.log(props)
    // TODO: make dynamic sizes
    return {
      face: {
        lowerWidth: 15,
        upperWidth: 30
      },
      eye: {
        containerHeight: 40,
        lowerWidth: 5,
        upperWidth: 10
      },
      mouth: {
        containerHeight: 200,
        lowerWidth: 5,
        upperWidth: 10
      }
    }
  },

};

export default Size;
