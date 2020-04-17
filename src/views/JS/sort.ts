const insertSort = (array: Array<number>) => {
  const result = [...array];
  for (let curIndex = 1; curIndex < result.length; curIndex += 1) {
    const curElement = result[curIndex];
    for (let index = curIndex - 1; index >= 0; index -= 1) {
      const element = result[index];
      if (curElement < element) {
        result[index] = curElement;
        result[index + 1] = element;
      }
    }
  }
  return result;
};

const quickSort: any = (array: Array<number>) => {
  const temp = array[0];
  const left = [];
  const right = [];
  if (array.length < 2) {
    return array;
  }
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] < temp) {
      left.push(array[index]);
    } else {
      right.push(array[index]);
    }
  }

  return [...quickSort(left), temp, ...quickSort(right)];
};

const bubbleSort = (array: Array<number>) => {
  const result = [...array];
  let lastSwap = result.length;
  for (let curIndex = 0; curIndex < result.length; curIndex += 1) {
    let curPos = 0;
    for (let index = 0; index < lastSwap; index += 1) {
      const element = result[index];
      if (element > result[index + 1]) {
        result[index] = result[index + 1];
        result[index + 1] = element;
        curPos = index;
      }
    }
    lastSwap = curPos;
  }
  return result;
};

const heapSort: any = (array: Array<number>) => {
  const result = [...array];
  if (array.length < 2) {
    return array;
  }
  for (let index = Math.floor(result.length / 2) - 1; index >= 0; index -= 1) {
    const element = result[index];
    const leftChild = result[2 * index + 1];
    const rightChild = result[2 * index + 2];
    if (leftChild > rightChild) {
      result[2 * index + 1] = rightChild;
      result[2 * index + 2] = leftChild;
    }
    if (element > result[2 * index + 1]) {
      result[index] = result[2 * index + 1];
      result[2 * index + 1] = element;
    }
  }
  return [result[0], ...heapSort(result.slice(1))];
};

export { insertSort, quickSort, bubbleSort, heapSort };
