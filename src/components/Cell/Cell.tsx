import classNames from 'classnames';

import styles from './Cell.module.css';

interface CellProps {
  value: number;
  status: 0 | 1 | 2 | 3 | 4;
  key: number | string;
}

const Cell = ({ value, status = 0, key }: CellProps) => {
  return (
    <p
      key={key}
      className={classNames(styles.cell, {
        [styles.selected_1]: status === 1,
        [styles.selected_2]: status === 2,
        [styles.selected_3]: status === 3,
        [styles.selected_4]: status === 4,
      })}
    >
      {value}
    </p>
  );
};

export default Cell;
