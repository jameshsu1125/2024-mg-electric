import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import { memo, useContext, useEffect } from 'react';
import Page from '../page';
import './index.less';

const Home = memo(() => {
  const [, setContext] = useContext(Context);

  useEffect(() => {
    const resize = () => {
      setContext({
        type: ActionType.Device,
        state: window.innerWidth <= 430 ? 'mobile' : 'desktop',
      });
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div className='Desktop'>
      <Page />
    </div>
  );
});

export default Home;
