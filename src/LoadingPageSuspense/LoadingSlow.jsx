import { getDataSlow } from '../utils/fakeApi';
import promiseToSuspend from '../utils/promiseToSuspend';

const { read } = promiseToSuspend(() => getDataSlow());

const LoadingSlow = () => {
  const data = read();

  return (
    <div>
      <h1>Loading Slow</h1>
      <p>This is a slow loading part.</p>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default LoadingSlow;
