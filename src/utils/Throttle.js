const Throttle = {
  hello: function () {
    console.log("hi from throttle");
  },

  throttle: (func, delay) => {
    let inProgress = false;
    return (...args) => {
      if (inProgress) return;
      inProgress = true;
      setTimeout(() => {
        func(...args); // Consider moving this line before the set timeout if you want the very first one to be immediate
        inProgress = false;
      }, delay);
    }
  }
}

export default Throttle;
