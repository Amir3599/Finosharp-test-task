import React from 'react';
import Routes from 'common/router'
import { RootState } from 'store/store';
import { useSelector } from 'react-redux';
import { ErrorBounary, FullScreenLoading, Header } from 'components/common';

function App() {

  const { loading, theme } = useSelector((state: RootState) => state.ui)

  return (
    <ErrorBounary>
      <div className={`${theme}`}>
        <div className='app-outer-background'>
          <Header />
          <Routes />
          {loading && <FullScreenLoading />}
        </div>
      </div>
    </ErrorBounary>
  );
}

export default App;
