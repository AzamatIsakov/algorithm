import { Input } from '..';
import { InputProps } from '../Input/Input';

import styles from './Inputs.module.css';

interface InputsProps {
  cellsAmount: number;
  setNums: React.Dispatch<React.SetStateAction<number[]>>;
}

const Inputs = ({ setNums, cellsAmount }: InputsProps) => {
  const inputElemsArr: InputProps[] = [];

  const clickHandler = () => {
    console.log(inputElemsArr);
    setNums(inputElemsArr.map((elem) => +elem.current.value));
  };

  return (
    <div className={styles.row}>
      {Array(cellsAmount)
        .fill('')
        .map((_, index) => {
          let focused = false;
          if (!index) {
            focused = true;
          }
          return (
            <Input
              inputElems={inputElemsArr}
              autoFocused={focused}
              index={'input-' + index}
            />
          );
        })}

      <button onClick={clickHandler} className={styles.button}>
        Начать
      </button>
    </div>
  );
};

export default Inputs;
