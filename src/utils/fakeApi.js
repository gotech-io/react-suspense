const waitForIt = async (timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
};

const getDataFast = async () => {
  await waitForIt(1000);
  return { data: "I'm so fast!" };
};

const getDataMedium = async () => {
  await waitForIt(2000);
  return { data: "I'm kinda slow!" };
};

const getDataSlow = async () => {
  await waitForIt(30000);
  return { data: "I'm so slow it's incredible!" };
};

export { getDataFast, getDataMedium, getDataSlow };
