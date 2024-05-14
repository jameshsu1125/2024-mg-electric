import { memo } from 'react';
import './index.less';
import Page from '../page';

const Home = memo(() => {
  return (
    <div className='Desktop'>
      <Page />
    </div>
  );
});

export default Home;
