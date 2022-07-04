import { useEffect, useState } from 'react';
import { getDataSlow } from '../utils/fakeApi';
import Spinner from '../shared/Spinner';

const LoadingSlow = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await getDataSlow();
      setData(data);
      setIsLoading(false);
    })();
  }, []);

  return isLoading ? (
    <div style={{ margin: '12px auto' }}>
      <Spinner />
    </div>
  ) : (
    <div>
      <h1>Loading Slow</h1>
      <p>This is a slow loading part.</p>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default LoadingSlow;
