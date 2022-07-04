import { useEffect, useState } from 'react';
import { getDataFast } from '../utils/fakeApi';
import Spinner from '../shared/Spinner';

const LoadingMedium = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await getDataFast();
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
      <h1>Loading Fast</h1>
      <p>This is a fast loading part.</p>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default LoadingMedium;
