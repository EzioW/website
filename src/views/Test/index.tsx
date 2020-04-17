/* eslint-disable no-console */
import * as React from 'react';
import BinaryTree from '../../components/BinaryTree';
// import EventBus from '../JS/eventBus';
// import debounce from '../JS/debounce';
// import throttle from '../JS/throttle';
import '../JS/this';
// import Cat from '../JS/extends';
// import TestClass from '../JS/class';
import { insertSort, quickSort, bubbleSort, heapSort } from '../JS/sort';

const Test = () => {
  // const eventBus = new EventBus();
  // const callback = () => { console.log('test'); };
  // eventBus.on('test', callback);
  // eventBus.once('once', () => { console.log('once'); });

  // let time = 0;

  // const debouncedFunc = debounce(() => { console.log('debounce'); }, 2000);
  // const throttledFunc = throttle(() => { console.log('throttle'); }, 2000);

  // const interval = setInterval(() => {
  //   console.log(`${time}`);
  //   time += 1;
  //   debouncedFunc();
  //   throttledFunc();
  // }, 1000);

  // setTimeout(() => {
  //   eventBus.emit('test');
  //   eventBus.off('test', callback);
  //   eventBus.emit('test');
  // }, 3000);

  // setTimeout(() => {
  //   eventBus.emit('once');
  // }, 5000);

  // setTimeout(() => {
  //   eventBus.emit('once');
  //   clearInterval(interval);
  // }, 6000);

  // console.log(new Cat());

  // const test = new TestClass();

  // test.tessFn();

  // console.dir(TestClass);

  const array = [23, 42, 53, 3, 25, 65, 64, 457, 4, 213];

  console.log('insertSort：', insertSort(array));
  console.log('quickSort', quickSort(array));
  console.log('bubbleSort', bubbleSort(array));
  console.log('heapSort', heapSort(array));

  return (
    <div>
      Test Page
      <BinaryTree dataSource={heapSort(array)} />
    </div>
  );
};

export default Test;
