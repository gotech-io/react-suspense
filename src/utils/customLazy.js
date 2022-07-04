import React from 'react';

let IDS = 0;
const loaded = {};

// It's a HoC
const customLazy = (modulePathResolver) => {
  const id = IDS++;

  return (props) => {
    const LoadedComponent = loaded[id];

    if (LoadedComponent) {
      return <LoadedComponent {...props} />;
    }

    throw modulePathResolver().then((lazyModule) => {
      const Component = lazyModule.default;
      loaded[id] = Component;
    });
  };
};

export default customLazy;
