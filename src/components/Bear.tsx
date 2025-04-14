import { useBearNumber, useBearActions } from '../stores/bearStore';

export const Bear = () => {
  const bearNumber = useBearNumber();
  const { setBearNumber } = useBearActions();
  console.log(bearNumber);
  console.log(useBearActions())

  return (
    <div>
      <p>{bearNumber}</p>
      <button onClick={() => setBearNumber(bearNumber + 1)}>Add bears</button>
    </div>
  )
};
