import { Row } from '..';

// import styles from './Sort.module.css';

interface SortProps {
  nums: number[];
}

export interface Num {
  num: number;
  status: 0 | 1 | 2 | 3 | 4;
}

const resetNumStatus = (nums: Num[]): Num[] => {
  return nums.map((numObj: Num): Num => {
    return { num: numObj.num, status: 0 };
  });
};

const Sort = ({ nums }: SortProps) => {
  const result: JSX.Element[] = [];
  let newNums = nums.map((num) => {
    return { num: num, status: 0 };
  });
  console.log(newNums);
  let changedIndex = undefined;
  let changingIndex = undefined;

  for (let secondIndex = 1; secondIndex < newNums.length; secondIndex++) {
    for (let firstIndex = 0; firstIndex < secondIndex; firstIndex++) {
      const num1 = newNums[firstIndex].num;
      const num2 = newNums[secondIndex].num;
      if (num1 > num2) {
        changingIndex = firstIndex;
        newNums[changingIndex].status = 3;
        if (changedIndex !== undefined && changedIndex >= 0) {
          if (newNums[changingIndex].status === 3)
            newNums[changingIndex].status = 4;
          else newNums[changedIndex].status = 1;
        }
        newNums[secondIndex].status = 2;
        // @ts-expect-error: error message
        result.push(<Row numsArr={newNums} />);
        // @ts-expect-error: error message
        newNums = resetNumStatus(newNums);
        newNums.splice(firstIndex, 0, ...newNums.splice(secondIndex, 1));
        changedIndex = firstIndex;
      }
    }
  }
  if (changedIndex !== undefined && changedIndex >= 0) {
    newNums[changedIndex].status = 1;
  }
  // @ts-expect-error: error message
  result.push(<Row numsArr={newNums} />);

  return <div>{result}</div>;
};

export default Sort;
