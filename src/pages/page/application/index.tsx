import { Fragment, memo, useEffect } from 'react';
import './index.less';
import Article from '@/components/article';
import { ApplicationConfig } from './config';

const Application = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Application'>
      <Article>
        <div className='content'>
          <div className='image' />
          <div className='text'>
            <h1>My MG App</h1>
            <p>
              透過手機掌握愛車電量與續航里程，與國內主要的充電營運商合作，為您打造最便利的充電網絡資源。無論身處何地，皆可使用
              My MG APP
              為您一鍵導航全台快慢充電(DC/AC)站點，快速找到最近的充電站，提供您最完整且便捷的充電服務。
            </p>
            <span>*限特約合作充電營運商</span>
            <div className='steps'>
              {ApplicationConfig.map((node, index) => (
                <Fragment key={JSON.stringify(node) + 'd' + index}>{node}</Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className='steps-sm'>
          {ApplicationConfig.map((node, index) => (
            <Fragment key={JSON.stringify(node) + 'm' + index}>{node}</Fragment>
          ))}
        </div>
      </Article>
    </div>
  );
});
export default Application;
