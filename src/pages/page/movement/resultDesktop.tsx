import { memo } from 'react';
import './resultDesktop.less';

const ResultDesktop = memo(() => (
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
        <div className='h'>當日充電</div>
        <span>0</span>
        <div className='f'>次</div>
      </div>
      <div className='col'>
        <div className='h'>當週充電</div>
        <span>0</span>
        <div className='f'>次</div>
      </div>
    </div>
    <div className='row w-3/12'>
      <div className='col'>
        <div className='h'>電費成本</div>
        <span>0</span>
        <div className='f'>元/日</div>
      </div>
      <div className='col'>
        <div className='h'>電費成本</div>
        <span>0</span>
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
                <span>0</span>元
              </div>
              <div className='w-full bg-black px-8 py-1 text-sm tracking-[0.3rem] text-white'>
                一年至少省下
              </div>
            </div>
          </div>
          <button className='btn-reCalc'>重新計算</button>
        </div>
      </div>
    </div>
  </div>
));
export default ResultDesktop;
