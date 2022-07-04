import _ from 'lodash';

const PageTwo = () => {
  return (
    <div>
      <h1>PageTwo</h1>
      <h2>random number: {_.random(1, 10)}</h2>
    </div>
  );
};

export default PageTwo;
