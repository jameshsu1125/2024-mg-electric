import { memo, useContext } from 'react';
import './resultDesktop.less';
import { Data } from './result';
import Counter from './counter';
import { MovementContext } from './config';
import { twMerge } from 'tailwind-merge';

const ResultDesktop = memo(({ data }: { data: Data }) => {
  const [state, setState] = useContext(MovementContext);
  return (
    <>
      <div className='ResultDesktop'>
        <div className='row w-2/12'>
          <div className='col'>
            平均
            <div className='ico' />
          </div>
          <div className='col'>行駛電費試算</div>
        </div>
        <div className='row w-[18%]'>
          <div className='col'>
            <div className='h'>單週充滿電</div>
            <span>
              <Counter init={0} to={data.chargeMeekly} max={999} />
            </span>
            <div className='f'>次</div>
          </div>
        </div>
        <div className='row w-3/12'>
          <div className='col'>
            <div className='h'>電費成本</div>
            <span>
              <Counter init={0} to={data.electricityCost} max={9999} />
            </span>
            <div className='f'>元/日</div>
          </div>
          <div className='col'>
            <div className='h'>燃油成本</div>
            <span>
              <Counter init={0} to={data.fuelCost} max={9999} />
            </span>
            <div className='f'>元/日</div>
          </div>
        </div>
        <div className='row flex-1'>
          <div className='col'>
            <div className='flex w-full flex-row items-center justify-between space-x-5'>
              <h1 className='flex-1 text-center'>=</h1>
              <div className='flex w-1/2 flex-row items-center justify-center'>
                <div className='flex flex-col text-center font-mxBold'>
                  <div>
                    <span>
                      <Counter init={0} to={data.savedCostYearly} max={999999} dollar />
                    </span>
                    元
                  </div>
                  <div className='w-full bg-black px-8 py-1 text-sm tracking-[0.3rem] text-white'>
                    一年至少省下
                  </div>
                </div>
              </div>

              <button
                disabled={state.mile === 0}
                className={twMerge('btn-reCalc', state.mile === 0 ? 'opacity-30' : '')}
                onClick={() => setState((S) => ({ ...S, mile: 0 }))}
              >
                重新計算
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-5 w-full text-center font-mxThin text-xs [&>span]:font-gillLight'>
        *以<span> 1 </span>度電<span> 4.8 </span>
        元，每度電行駛<span> 6 </span>
        公里計，成本約<span> 0.8 元/km </span>
        。*以<span> 95 </span>
        無鉛汽油每公升<span> 30 </span>
        元，每公升行駛<span> 12 </span>
        公里計，成本約<span> 2.5 </span>元<span>/km </span>
        。*以上數據僅供參考，將依個人使用狀況與環境有所差異
      </div>
    </>
  );
});
export default ResultDesktop;
