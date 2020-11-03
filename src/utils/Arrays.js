const Arrays = {
  hello: function () {
    console.log("hi from arrays");
  },

  // restart at beginning if looping
  rotateNextIndex: function(arr, i){
    return arr[i % arr.length];
  }
};

export default Arrays;
