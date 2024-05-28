import { memo } from 'react';
import Counter from './counter';
import { Data } from './result';
import './resultMobile.less';

const ResultMobile = memo(({ data }: { data: Data }) => (
  <div className='ResultMobile'>
    <h1>
      平均行駛電費試算
      <div className='ico' />
    </h1>
    <div className='row'>
      <div className='col'>
        <div className='table'>
          <h1 className='whitespace-nowrap'>單週充滿電</h1>
          <span>
            <Counter init={0} to={data.chargeMeekly} max={999} />
          </span>
          <h1>次</h1>
        </div>
      </div>
      <div className='col'>
        <div className='table'>
          <h1>電費成本</h1>
          <span>
            <Counter init={0} to={data.electricityCost} max={99999} />
          </span>
          <h1>元/日</h1>
        </div>
        <div className='table'>
          <h1>燃油成本</h1>
          <span>
            <Counter init={0} to={data.fuelCost} max={99999} />
          </span>
          <h1>元/日</h1>
        </div>
      </div>
    </div>
    <div className='total'>
      <div className='h'>
        <h1>=</h1>
        <span>
          <Counter init={0} to={data.savedCostYearly} max={999999} dollar />
        </span>
        <div>元</div>
      </div>
      <div className='f'>一年至少省下</div>
    </div>
    <div className='total'>
      <h6>
        *以1度電4.8元，每度電行駛6公里計，成本約0.8元/km。
        <br />
        *以95無鉛汽油每公升30元，每公升行駛12公里計，成本約2.5元/km。
        <br />
        *以上數據僅供參考，將依個人使用狀況與環境有所差異
      </h6>
    </div>
  </div>
));
export default ResultMobile;
