import { memo } from 'react';
import Counter from './counter';
import { Data } from './result';

const Mobile = memo(({ data }: { data: Data }) => (
  <div className='flex w-full flex-col space-y-5 py-5'>
    <div className='flex w-full flex-row justify-center'>
      平均行駛電費試算 <div className='glass mb-1 ml-1' />
    </div>
    <div className='flex w-full flex-row'>
      <div className='flex w-5/12 flex-col items-center justify-center space-y-2 border-l border-r border-black'>
        <div className='flex w-full flex-row items-baseline justify-center'>
          <span className='t-sm font-mxMedium'>當日充電</span>
          <div className='t-sm font-mxMedium'>
            <span className='t2xl px-2 leading-4 text-primary'>
              <Counter init={0} to={data.chargeDaily} max={999} />
            </span>
            次
          </div>
        </div>
        <div className='flex w-full flex-row items-baseline justify-center'>
          <span className='t-sm font-mxMedium'>當週充電</span>
          <div className='t-sm font-mxMedium'>
            <span className='t2xl px-2 leading-4 text-primary'>
              <Counter init={0} to={data.chargeMeekly} max={999} />
            </span>
            次
          </div>
        </div>
      </div>
      <div className='flex w-7/12 flex-col items-center justify-center space-y-2 border-r border-black'>
        <div className='flex w-full flex-row items-baseline justify-around'>
          <span className='t-sm font-mxMedium'>電費成本</span>
          <div className='t-sm font-mxMedium'>
            <span className='t-2xl px-2 leading-4 text-primary'>
              <Counter init={0} to={data.electricityCost} max={99999} />
            </span>
            元/日
          </div>
        </div>
        <div className='flex w-full flex-row items-baseline justify-around'>
          <span className='t-sm font-mxMedium'>燃油成本</span>
          <div className='t-sm font-mxMedium'>
            <span className='t-2xl px-2 leading-4 text-primary'>
              <Counter init={0} to={data.fuelCost} max={99999} />
            </span>
            元/日
          </div>
        </div>
      </div>
    </div>
    <div className='flex w-full flex-row justify-center'>
      <div className='flex w-9/12 flex-col'>
        <div className='flex w-full flex-row items-center justify-between'>
          <span className='t-5xl font-gillSemiBold'>=</span>
          <div className='t-3xl whitespace-nowrap font-mxBold'>
            <span className='t-5xl whitespace-nowrap pr-2 font-gillBold leading-10 text-primary'>
              <Counter init={0} to={data.savedCostYearly} max={999999} />
            </span>
            元
          </div>
        </div>
        <div className='mt-1 w-full bg-black px-5 py-1 text-center font-mxRegular text-base tracking-[0.4rem] text-white'>
          一年至少省下
        </div>
        <div className='mPostscript mt-3 w-full font-mxThin text-base'>
          *以1度電4.8元，每度電行駛6公里計，成本約0.8元/km。
          <br />
          *以95無鉛汽油每公升30元，每公升行駛12公里計，成本約2.5元/km。
        </div>
      </div>
    </div>
  </div>
));
export default Mobile;
