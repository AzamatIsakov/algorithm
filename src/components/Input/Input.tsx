import { useEffect, useRef } from 'react';

import styles from './Input.module.css';

export interface InputProps {
  index: number | string;
  autoFocused?: boolean;
  inputElems: InputProps[];
  dataset?: {
    index: string | number;
  };
}

const Input = ({ inputElems, index, autoFocused = false }: InputProps) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef) {
      // React.ChangeEvent<HTMLInputElement>
      inputRef.current!.onkeyup = (e) => {
        if (e.key === 'Enter') {
          e.target.nextElementSibling!.focus();
        }
      };
    }
  }, []);

  if (inputRef) {
    if (inputElems.filter((elem) => elem && elem.dataset?.index !== index)) {
      inputElems.push(inputRef);
    }
  }

  return (
    <input
      data-index={index}
      ref={inputRef}
      key={index}
      autoFocus={autoFocused}
      className={styles.input}
      type='number'
    />
  );
};

export default Input;
