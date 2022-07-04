const promiseToSuspend = (promiseReturningFunction) => {
  let status = 'pending';
  let response;
  let suspender;

  const read = () => {
    if (!suspender) {
      suspender = promiseReturningFunction().then(
        (res) => {
          status = 'success';
          response = res;
        },
        (err) => {
          status = 'error';
          response = err;
        }
      );
    }

    switch (status) {
      case 'pending':
        throw suspender;
      case 'error':
        throw response;
      default:
        return response;
    }
  };

  return { read };
};

export default promiseToSuspend;
