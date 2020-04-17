const debounce = (fn: Function, delay: number) => {
  let cloak: number = null;

  const callback = () => {
    if (cloak) {
      clearTimeout(cloak);
    }
    cloak = setTimeout(fn, delay);
  };
  return callback;
};

export default debounce;
