import { useState } from 'react';

import {
  // Row,
  // Input,
  Inputs,
  Start,
} from './components';

import styles from './App.module.css';

const App = () => {
  const [appState, setAppState] = useState('start');
  const [cellsAmount, setCellsAmount] = useState(2);
  const [nums, setNums] = useState<number[]>([]);
  // const numsArr = [4, 2, 5, 67, 5, 3, 65, 45, 11, 12, 53, 54];

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
      {/* <Row numsArr={numsArr} /> */}
    </div>
  );
};

export default App;
