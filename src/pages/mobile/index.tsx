import { memo, useContext, useEffect } from 'react';
import './index.less';
import Page from '../page';
import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';

const Mobile = memo(() => {
  const [, setContext] = useContext(Context);

  useEffect(() => {
    setContext({ type: ActionType.Device, state: 'mobile' });
  }, []);

  return (
    <div className='Mobile'>
      <div className='content'>
        <Page />
      </div>
    </div>
  );
});
export default Mobile;
