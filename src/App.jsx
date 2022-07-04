import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';
import './App.css';
import LoadingPage from './LoadingPage';
import customLazy from './utils/customLazy';

import('./Home').then((module) => {
  console.log(module.default);
});

const Home = customLazy(() => import('./Home'));
const PageOne = React.lazy(() => import('./PageOne'));
const PageTwo = React.lazy(() => import('./PageTwo'));

const Layout = () => {
  return (
    <div className="page-container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/page-one">PageOne</Link>
        <Link to="page-two">PageTwo</Link>
        <Link to="loading-page">LoadingPage</Link>
      </nav>
      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="page-one" element={<PageOne />} />
            <Route path="page-two" element={<PageTwo />} />
            <Route path="loading-page" element={<LoadingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

// TODO: add example of 3 loading components with a loader each,
//       and a fallback component when all 3 are loading (with suspense)

export default App;
