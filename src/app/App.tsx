import { FullScreenLoading } from 'components/common';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Routes from 'common/router'
import { setUI } from 'store/slices/UIsection';
import { RootState } from 'store/store';

function App() {

  const dispatch = useDispatch()
  const { loading, theme } = useSelector((state: RootState) => state.ui)

  const toggleTheme = () => {
    const currentTheme = theme
    if (currentTheme === 'dark') {
      dispatch(setUI({ theme: 'light' }))
    } else {
      dispatch(setUI({ theme: 'dark' }))
    }

  }

  return (
    <div className={`${theme}`}>
      <div className='app-outer-background'>
        <Routes />
        {loading && <FullScreenLoading />}
      </div>
      <button onClick={toggleTheme} className='fixed bottom-0 left-0 w-10 h-10'>Toggle</button>
    </div>
  );
}

export default App;
