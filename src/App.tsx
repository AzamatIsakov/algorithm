import { useState } from 'react';

import { Inputs, Sort, Start } from './components';

import styles from './App.module.css';
import btnStyles from './components/Inputs/Inputs.module.css';

const App = () => {
  const [appState, setAppState] = useState('start');
  const [cellsAmount, setCellsAmount] = useState(2);
  const [nums, setNums] = useState<number[]>([]);
  console.log(nums);

  if (appState === 'start') {
    return (
      <>
        <Start
          setAppState={setAppState}
          cellsAmount={cellsAmount}
          setCellsAmount={setCellsAmount}
        />
      </>
    );
  }

  return (
    <div className={styles.container}>
      <Inputs setNums={setNums} cellsAmount={cellsAmount} />
      <Sort nums={nums} />
      {Boolean(nums.length) && (
        <div className={styles.btn_box}>
          <button
            onClick={() => {
              setNums([]);
              setAppState('start');
            }}
            className={btnStyles.button}
          >
            Заново
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
