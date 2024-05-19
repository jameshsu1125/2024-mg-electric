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
          <div className='table'>
            <h1>當日充電</h1>
            <span>0</span>
            <h1>次</h1>
          </div>
          <div className='table'>
            <h1>當日充電</h1>
            <span>0</span>
            <h1>次</h1>
          </div>
        </div>
        <div className='col'>
          <div className='table'>
            <h1>電費成本</h1>
            <span>0</span>
            <h1>元/日</h1>
          </div>
          <div className='table'>
            <h1>燃油成本</h1>
            <span>0</span>
            <h1>元/日</h1>
          </div>
        </div>
      </div>
      <div className='total'>
        <div className='h'>
          <h1>=</h1>
          <span>0</span>
          <div>元</div>
        </div>
        <div className='f'>一年至少省下</div>
      </div>
      <div className='total'>
        <h6>
          *以1度電4.8元，每度電行駛6公里計，成本約0.8元/km。
          <br />
          *以95無鉛汽油每公升30元，每公升行駛12公里計，成本約2.5元/km。
        </h6>
      </div>
    </div>
  );
});
export default ResultMobile;
