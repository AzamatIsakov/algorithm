// import { useEffect } from 'react';
import { Cell } from '..';
import { Num } from '../Sort/Sort';

import styles from './Row.module.css';

interface RowProps {
  numsArr: Num[];
}

const Row = ({ numsArr }: RowProps) => {
  // console.log(numsArr.length);

  return (
    <div className={styles.row}>
      {numsArr.map((numObj: Num, index) => (
        <Cell key={'cell-' + index} value={numObj.num} status={numObj.status} />
      ))}
    </div>
  );
};

export default Row;
