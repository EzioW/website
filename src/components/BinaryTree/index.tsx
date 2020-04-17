/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import './index.less';

interface BinaryTree {
  dataSource: Array<number>;
}

const BinaryTree = ({ dataSource }: BinaryTree) => {
  let length = 1;
  const treeData = dataSource.reduce((p, n) => {
    if (length === 0) {
      p.push([n]);
    } else {
      const deep = Math.log2(length);
      const level = Math.floor(deep);
      if (Number.isInteger(deep)) {
        p.push([n]);
      } else {
        if (!p[level]) {
          p[level] = []; // eslint-disable-line no-param-reassign
        }
        p[level].push(n);
        if (length === dataSource.length) {
          const levelTotal = 2 ** level;
          const curNum = p[level].length;
          if (curNum !== levelTotal) {
            [...Array(levelTotal - curNum)].forEach(() => {
              p[level].push(0);
            });
          }
        }
      }
    }
    length += 1;
    return p;
  }, []);

  return (
    <div className="binary-tree-wrapper">
      {treeData.map((list, listIndex) => (
        <div key={listIndex} className="level-wrapper">
          {list.map((item: number, itemIndex: number) => (
            <div key={`${listIndex}-${itemIndex}`} className="item">
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default React.memo(BinaryTree);
