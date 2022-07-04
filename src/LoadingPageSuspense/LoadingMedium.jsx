import { getDataMedium } from '../utils/fakeApi';
import promiseToSuspend from '../utils/promiseToSuspend';

const { read } = promiseToSuspend(() => getDataMedium());

const LoadingMedium = () => {
  const data = read();

  return (
    <div>
      <h1>Loading Medium</h1>
      <p>This is a medium loading part.</p>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default LoadingMedium;
