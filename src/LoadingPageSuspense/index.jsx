import { Suspense } from 'react/cjs/react.production.min';
import Spinner from '../shared/Spinner';
import LoadingFast from './LoadingFast';
import LoadingMedium from './LoadingMedium';
import LoadingSlow from './LoadingSlow';

const LoadingPage = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <div>
          <LoadingFast />
          <LoadingMedium />
          <LoadingSlow />
        </div>
      </Suspense>
    </>
  );
};

export default LoadingPage;
