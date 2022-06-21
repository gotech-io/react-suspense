import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import ActiveLink from './ActiveLink';
// import Home from './Home';
// import StaticData from './StaticData';
// import FetchData from './FetchData';
import './App.css';

import('./Home').then((module) => {
  console.log(module.default());
});

const Home = React.lazy(() => import('./Home'));
const StaticData = React.lazy(() => import('./StaticData'));
const FetchData = React.lazy(() => import('./FetchData'));

const promiseToSuspend = (promise) => {
  let status = 'pending';
  let response;

  const suspender = promise.then(
    (res) => {
      status = 'success';
      response = res;
    },
    (err) => {
      status = 'error';
      response = err;
    }
  );

  const read = () => {
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

const todoDataWrapper = promiseToSuspend(
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ title: 'Todo List' });
    }, 2000);
  })
);

const SuspendedComponent = () => {
  const todoData = todoDataWrapper.read();
  return <h1>I'm so slow! {todoData.title}</h1>;
};

const Layout = () => {
  return (
    <Suspense fallback={'Loading...'}>
      <SuspendedComponent />
      <div className="page-container">
        <nav>
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/static">Static</ActiveLink>
          <ActiveLink to="/fetch-data">Fetch Data</ActiveLink>
        </nav>
        <Outlet />
      </div>
    </Suspense>
  );
};

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="static" element={<StaticData />} />
            <Route path="fetch-data" element={<FetchData />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

// TODO: add example of 3 loading components with a loader each,
//       and a fallback component when all 3 are loading (with suspense)

export default App;
