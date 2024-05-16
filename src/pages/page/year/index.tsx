import { memo, useContext } from 'react';
import './index.less';
import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import Article from '@/components/article';

const Year = memo(() => {
  const [context] = useContext(Context);
  const device = context[ActionType.Device];

  return (
    <div className='Year'>
      <div className='bg' />
      <Article>
        <div className='image'>
          <div className='box'></div>
        </div>
        <div className='content'>
          <h1>
            <span className='font-gillLight'>MG 100</span>年 純電元年
          </h1>
          <p>
            百年來 MG 以不斷突破框架的先鋒者精神
            {device && device === 'desktop' ? '，' : <br />}
            致力於移動未來的創新，在車壇締造無數佳績
          </p>
          <p>
            隨時代推進，MG 在前瞻科技及綠能永續仍不遺餘力
            {device && device === 'desktop' ? '，' : <br />}
            以完善技術、普及化理念，推出世人期待的電動車款
          </p>
          <p>在全新時代，實現世界對純電生活的嚮往</p>
        </div>
      </Article>
    </div>
  );
});
export default Year;
