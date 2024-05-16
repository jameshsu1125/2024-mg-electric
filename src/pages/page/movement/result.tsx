import Article from '@/components/article';
import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useMemo } from 'react';
import { MovementContext } from './config';
import './result.less';

type Data = {
  chargeDaily?: number;
  chargeMeekly?: number;
  electricityCost?: number;
  fuelCost?: number;
  savedCostYearly?: number;
};

const Counter = memo(
  ({ init = 0, to, max = 999 }: { init?: number; to?: number; max?: number }) => {
    const [style, setStyle] = useTween({ opacity: init });

    useEffect(() => {
      setStyle({ opacity: to }, 2000);
    }, [to]);

    const result = useMemo(() => {
      if (style.opacity === undefined) return 0;
      if (Number(style.opacity) > max) return `>${max}`;
      return Math.floor(Number(style.opacity));
    }, [style.opacity]);

    return <>{result}</>;
  },
);

const Mobile = memo(({ data }: { data: Data }) => {
  return (
    <div className='flex w-full flex-col space-y-5 py-5'>
      <div className='flex w-full flex-row justify-center'>
        平均行駛電費試算 <div className='glass mb-1 ml-1' />
      </div>
      <div className='flex w-full flex-row'>
        <div className='flex w-5/12 flex-col items-center justify-center space-y-2 border-l border-r border-black'>
          <div className='flex w-full flex-row items-baseline justify-center'>
            <span className='tsm font-mxMedium'>當日充電</span>
            <div className='tsm font-mxMedium'>
              <span className='t2xl px-2 leading-4 text-primary'>
                <Counter init={0} to={data.chargeDaily} max={999} />
              </span>
              次
            </div>
          </div>
          <div className='flex w-full flex-row items-baseline justify-center'>
            <span className='tsm font-mxMedium'>當週充電</span>
            <div className='tsm font-mxMedium'>
              <span className='t2xl px-2 leading-4 text-primary'>
                <Counter init={0} to={data.chargeMeekly} max={999} />
              </span>
              次
            </div>
          </div>
        </div>
        <div className='flex w-7/12 flex-col items-center justify-center space-y-2 border-r border-black'>
          <div className='flex w-full flex-row items-baseline justify-around'>
            <span className='tsm font-mxMedium'>電費成本</span>
            <div className='tsm font-mxMedium'>
              <span className='t2xl px-2 leading-4 text-primary'>
                <Counter init={0} to={data.electricityCost} max={99999} />
              </span>
              元/日
            </div>
          </div>
          <div className='flex w-full flex-row items-baseline justify-around'>
            <span className='tsm font-mxMedium'>燃油成本</span>
            <div className='tsm font-mxMedium'>
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
              <span className='t-5xl font-gillBold whitespace-nowrap pr-2 leading-10 text-primary'>
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
  );
});

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
                <span className='font-gillSemiBold px-2 text-3xl text-primary'>
                  <Counter init={0} to={data.chargeDaily} max={999} />
                </span>
                次
              </div>
            </div>
            <div className='flex w-full flex-row items-baseline justify-center whitespace-nowrap px-2'>
              <div className='font-mxMedium text-base'>當週充電</div>
              <div className='font-mxMedium text-base'>
                <span className='font-gillSemiBold px-2 text-3xl text-primary'>
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
                <span className='font-gillSemiBold px-2 text-3xl text-primary'>
                  <Counter init={0} to={data.electricityCost} max={9999} />
                </span>
                元/日
              </div>
            </div>
            <div className='flex w-full flex-row items-baseline justify-around px-2'>
              <div className='font-mxMedium text-base'>燃油成本</div>
              <div className='font-mxMedium text-base'>
                <span className='font-gillSemiBold px-2 text-3xl text-primary'>
                  <Counter init={0} to={data.fuelCost} max={9999} />
                </span>
                元/日
              </div>
            </div>
          </div>
        </div>
        <div className='relative w-[240px]'>
          <div className='flex h-full flex-row items-center justify-center'>
            <div className='font-gillSemiBold px-5 text-3xl xl:px-6 xl:text-4xl'>=</div>
            <div className='flex flex-col items-center justify-center space-y-1'>
              <div className='flex flex-row items-baseline justify-center font-mxBold text-lg'>
                <span className='font-gillBold px-2 text-4xl text-primary'>
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

const Result = memo(() => {
  const [context] = useContext(Context);
  const device = context[ActionType.Device];

  const [state] = useContext(MovementContext);

  const data = useMemo(() => {
    const chargeDaily = Math.ceil(state.mile / 567);
    const chargeMeekly = Math.ceil((state.mile * 7) / 567);
    const electricityCost = Math.ceil(state.mile * 0.8);
    const fuelCost = Math.ceil(state.mile * 2.5);
    const savedCostYearly = (fuelCost - electricityCost) * 365 + (state.mile === 0 ? 0 : 17410);
    return {
      chargeDaily,
      chargeMeekly,
      electricityCost,
      fuelCost,
      savedCostYearly,
    };
  }, [state.mile]);

  return (
    <div className='Result'>
      <Article>{device === 'desktop' ? <Desktop data={data} /> : <Mobile data={data} />}</Article>
    </div>
  );
});
export default Result;
