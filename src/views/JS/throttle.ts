const throttle = (fn: Function, delay: number) => {
  let lastTime: number = null;
  const callback = () => {
    const now = new Date().valueOf();
    if (now - lastTime > delay) {
      fn();
      lastTime = now;
    }
  };

  return callback;
};

export default throttle;
