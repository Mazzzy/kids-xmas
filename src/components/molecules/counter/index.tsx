import { FC } from 'react';
import Button from '@/components/atoms/button';
import styles from './counter.module.css';

interface CounterProps {
  minVal?: number;
  maxVal?: number;
  productQuantity: number | any;
  updateQuantity: (qty: number) => void | any;
}

const Counter: FC<CounterProps> = ({ minVal = 1, maxVal = 2, productQuantity, updateQuantity }) => {
  const increment = () => {
    if (productQuantity < maxVal) {
      updateQuantity(productQuantity + 1);
    }
  };

  const decrement = () => {
    if (productQuantity > minVal) {
      updateQuantity(productQuantity - 1);
    }
  };

  const feed = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateQuantity(parseInt(e.target.value, 10));
  };

  return (
    <div className={styles.stepperInput}>
      <Button className={styles.decrement} onClick={decrement}>
        {'-'}
      </Button>
      <input type="number" className={styles.quantity} value={productQuantity} onChange={feed} />
      <Button className={styles.increment} onClick={increment}>
        {'+'}
      </Button>
    </div>
  );
};

export default Counter;
