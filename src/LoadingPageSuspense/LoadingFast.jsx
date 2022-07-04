import { getDataFast } from '../utils/fakeApi';
import promiseToSuspend from '../utils/promiseToSuspend';

const { read } = promiseToSuspend(() => getDataFast());

const LoadingMedium = () => {
  const data = read();

  return (
    <div>
      <h1>Loading Fast</h1>
      <p>This is a fast loading part.</p>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default LoadingMedium;
