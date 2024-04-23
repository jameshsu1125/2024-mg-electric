import { memo, useState } from 'react';
import { HomeContext, HomeState, THomeState } from './config';
import './index.less';

const Home = memo(() => {
  const [state, setState] = useState<THomeState>(HomeState);

  return (
    <div className='Home'>
      <HomeContext.Provider value={[state, setState]}>
        <h1 className='text-2xl'>mg4electric</h1>
      </HomeContext.Provider>
    </div>
  );
});

export default Home;
