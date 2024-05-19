import { memo, useContext } from 'react';
import { MovementContext } from './config';
import Counter from './counter';
import './index.less';
import { Data } from './result';

const Desktop = memo(({ data }: { data: Data }) => {
  const [, setState] = useContext(MovementContext);
  return (
    <div className='flex w-full flex-col'>
      <div className='flex h-36 w-full flex-row justify-center'>
        <div className='relative w-2/12'>
          <div className='box flex h-full flex-col items-center justify-center font-mxBold text-lg'>
            <div className='flex w-full flex-row items-center justify-center space-x-2'>
              <span>平均</span>
              <div className='glass mb-1' />
            </div>
            <div>行駛電費試算</div>
          </div>
        </div>
        <div className='relative w-3/12'>
          <div className='box flex h-full flex-col items-center justify-center'>
            <div className='flex w-full flex-row items-baseline justify-center whitespace-nowrap px-2'>
              <div className='font-mxMedium text-base'>當日充電</div>
              <div className='font-mxMedium text-base'>
                <span className='px-2 font-gillSemiBold text-3xl text-primary'>
                  <Counter init={0} to={data.chargeDaily} max={999} />
                </span>
                次
              </div>
            </div>
            <div className='flex w-full flex-row items-baseline justify-center whitespace-nowrap px-2'>
              <div className='font-mxMedium text-base'>當週充電</div>
              <div className='font-mxMedium text-base'>
                <span className='px-2 font-gillSemiBold text-3xl text-primary'>
                  <Counter init={0} to={data.chargeMeekly} max={999} />
                </span>
                次
              </div>
            </div>
          </div>
        </div>
        <div className='relative w-4/12'>
          <div className='box flex h-full flex-col items-center justify-center'>
            <div className='flex w-full flex-row items-baseline justify-around px-2'>
              <div className='font-mxMedium text-base'>電費成本</div>
              <div className='font-mxMedium text-base'>
                <span className='px-2 font-gillSemiBold text-3xl text-primary'>
                  <Counter init={0} to={data.electricityCost} max={9999} />
                </span>
                元/日
              </div>
            </div>
            <div className='flex w-full flex-row items-baseline justify-around px-2'>
              <div className='font-mxMedium text-base'>燃油成本</div>
              <div className='font-mxMedium text-base'>
                <span className='px-2 font-gillSemiBold text-3xl text-primary'>
                  <Counter init={0} to={data.fuelCost} max={9999} />
                </span>
                元/日
              </div>
            </div>
          </div>
        </div>
        <div className='relative w-[240px]'>
          <div className='flex h-full flex-row items-center justify-center'>
            <div className='px-5 font-gillSemiBold text-3xl xl:px-6 xl:text-4xl'>=</div>
            <div className='flex flex-col items-center justify-center space-y-1'>
              <div className='flex flex-row items-baseline justify-center font-mxBold text-lg'>
                <span className='px-2 font-gillBold text-4xl text-primary'>
                  <Counter init={0} to={data.savedCostYearly} max={999999} />
                </span>
                元
              </div>
              <div className='whitespace-nowrap bg-black px-5 py-1 font-mxRegular text-base tracking-[0.4rem] text-white'>
                一年至少省下
              </div>
            </div>
          </div>
        </div>
        <div className='relative flex-1'>
          <div className='flex h-full w-full items-center justify-start pl-5'>
            <button
              className='whitespace-nowrap border border-black px-5 py-2 font-mxBold text-base hover:bg-primary'
              onClick={() => setState((S) => ({ ...S, mile: 0 }))}
            >
              重新計算
            </button>
          </div>
        </div>
      </div>
      <div className='w-full font-mxThin text-xs'>
        <div className='flex w-2/12 justify-center whitespace-nowrap'>
          <div className='w-[108px]'>
            *以1度電4.8元，每度電行駛6公里計，成本約0.8元/km。*以95無鉛汽油每公升30元，每公升行駛12公里計，成本約2.5元/km。
          </div>
        </div>
      </div>
    </div>
  );
});
export default Desktop;
