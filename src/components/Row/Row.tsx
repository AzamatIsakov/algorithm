import { Cell } from '..';

import styles from './Row.module.css';

interface RowProps {
  numsArr: number[];
}

const Row = ({ numsArr }: RowProps) => {
  console.log(numsArr.length);

  return (
    <div className={styles.row}>
      {numsArr.map((num, index) => (
        <Cell key={'cell-' + index} changed value={num} />
      ))}
    </div>
  );
};

export default Row;
