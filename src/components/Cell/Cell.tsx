import classNames from 'classnames';

import styles from './Cell.module.css';

interface CellProps {
  value: number;
  changed?: boolean;
  key: number | string;
}

const Cell = ({ value, changed = false, key }: CellProps) => {
  return (
    <p
      key={key}
      className={classNames(styles.cell, { [styles.selected]: changed })}
    >
      {value}
    </p>
  );
};

export default Cell;
