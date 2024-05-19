import { memo, useEffect } from 'react';
import './resultMobile.less';

const ResultMobile = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='ResultMobile'>
      <h1>
        平均行駛電費試算
        <div className='ico' />
      </h1>
      <div className='row'>
        <div className='col'>
          <div className='flex flex-row items-center justify-around'>
            <div>當日充電</div>
            <span>0</span>
            <div>次</div>
          </div>
          <div className='flex flex-row items-center justify-around'>
            <div>當日充電</div>
            <span>0</span>
            <div>次</div>
          </div>
        </div>
        <div className='col'>
          <div>3</div>
          <div>4</div>
        </div>
      </div>
    </div>
  );
});
export default ResultMobile;
