import { memo, useContext, useEffect } from 'react';
import './index.less';
import Page from '../page';
import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';

const Home = memo(() => {
  const [, setContext] = useContext(Context);

  useEffect(() => {
    setContext({ type: ActionType.Device, state: 'desktop' });
  }, []);

  return (
    <div className='Desktop'>
      <Page />
    </div>
  );
});

export default Home;
