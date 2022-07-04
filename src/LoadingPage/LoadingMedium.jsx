import { useEffect, useState } from 'react';
import { getDataMedium } from '../utils/fakeApi';
import Spinner from '../shared/Spinner';

const LoadingMedium = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await getDataMedium();
      setData(data);
      setIsLoading(false);
    })();
  }, [isLoading]);

  return isLoading ? (
    <div style={{ margin: '12px auto' }}>
      <Spinner />
    </div>
  ) : (
    <div>
      <h1>Loading Medium</h1>
      <p>This is a medium loading part.</p>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default LoadingMedium;
