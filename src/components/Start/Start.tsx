import { Dispatch, SetStateAction } from 'react';

import styles from './Start.module.css';

interface StartProps {
  cellsAmount: number;
  setCellsAmount: Dispatch<SetStateAction<number>>;
  setAppState: Dispatch<SetStateAction<string>>;
}

const Start = ({ cellsAmount, setCellsAmount, setAppState }: StartProps) => {
  return (
    <div className={styles.start_box}>
      <div>
        <h1 className={styles.start_title}>Введите количество ячеек</h1>
        <input
          value={cellsAmount}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const value = +e.target.value;
            if (value > 12) {
              setCellsAmount(12);
            } else if (value < 3) {
              setCellsAmount(2);
            } else if (value > 1) {
              setCellsAmount(value);
            }
          }}
          className={styles.input}
          type='number'
        />
      </div>
      <button
        onClick={() => {
          setAppState('run');
        }}
        className={styles.button}
        type='button'
      >
        Принять
      </button>
    </div>
  );
};

export default Start;
