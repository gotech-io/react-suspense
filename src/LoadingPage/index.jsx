import LoadingFast from './LoadingFast';
import LoadingMedium from './LoadingMedium';
import LoadingSlow from './LoadingSlow';

const LoadingPage = () => {
  return (
    <div>
      <LoadingFast />
      <LoadingMedium />
      <LoadingSlow />
    </div>
  );
};

export default LoadingPage;
