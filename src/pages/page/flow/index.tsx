import Article from '@/components/article';
import useMedia, { MediaType } from '@/hooks/useMedia';
import { memo } from 'react';
import './index.less';

const Flow = memo(() => {
  const [device] = useMedia();
  return (
    <div className='Flow'>
      <Article>
        <div className='flex w-full flex-col space-y-5'>
          <h1 className='block lg:hidden'>居家充電 設置流程</h1>
          <div className='content'>
            <div className='image'>
              <div className='img' />
            </div>
            <div className='ctx'>
              <h1 className='hidden lg:block'>居家充電 設置流程</h1>
              <p>
                MG與國內市占率最高的專業充電樁團隊合作，提供您居家充電樁設置方案，
                {device > MediaType.SM && <br />}
                所合作的廠商皆能實際到府場勘、評估施工安全性以及提供完整售後服務。
                <br />
                讓您抵達住家後，僅需為愛車插上電源，透過MG4車機或My MG App設定預約充電，
                {device > MediaType.SM && <br />}體驗安心便捷的純電生活。
              </p>
              <div className='flow hidden lg:block'>
                <div className='img' />
              </div>
            </div>
          </div>
          <div className='flow block w-full lg:hidden'>
            <div className='img' />
          </div>
        </div>
      </Article>
    </div>
  );
});
export default Flow;
