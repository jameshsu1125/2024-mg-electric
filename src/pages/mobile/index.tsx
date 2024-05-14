import { memo, useEffect } from 'react';
import './index.less';
import Page from '../page';

const Mobile = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Mobile'>
      <div className='content'>
        <Page />
      </div>
    </div>
  );
});
export default Mobile;
