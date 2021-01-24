const Size = {
  hello: function () {
    console.log("hi from Size");
  },

  sizes(props){
    // console.log(props)
    // TODO: make dynamic sizes
    return {
      face: {
        lowerWidth: 10,
        upperWidth: 20
      },
      eye: {
        containerHeight: 30,
        lowerWidth: 5,
        upperWidth: 10
      },
      mouth: {
        containerHeight: 150,
        lowerWidth: 5,
        upperWidth: 10
      }
    }
  },

};

export default Size;
