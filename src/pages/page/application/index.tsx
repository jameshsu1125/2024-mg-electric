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
            <h1>My MG App 即時掌握車況與充電網絡</h1>
            <p>
              不僅能夠一鍵解鎖車門、預先開啟空調系統，更能夠掌握愛車電量與續航里程，
              <span>MG4 </span>
              搭載智慧車聯網功能，讓您即時更新每一步。
              <br />
              <span> My MG App </span>
              更與國內主要的充電營運商合作，為您打造最便利的充電網絡資源。無論身處何地，只要開啟
              <span> My MG App</span>
              ，全台直流/交流充電(<span> DC/AC </span>
              )站點，都能一鍵導航快速找到距離您最近的充電站，提供最完整且便捷的充電服務。
            </p>
            <span id='ps'>*App 付款功能詳洽 My MG App</span>
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
