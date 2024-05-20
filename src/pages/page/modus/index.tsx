import { memo, useEffect, useRef, useState } from 'react';
import './index.less';
import Article from '@/components/article';

const Modus = memo(() => {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const resize = () => {
      if (ref1.current && ref2.current && ref3.current)
        if (window.innerWidth >= 1024) {
          setWidth(ref1.current.clientWidth + ref2.current.clientWidth + 40);
        } else {
          setWidth(ref3.current.clientWidth);
        }
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div className='Modus'>
      <Article>
        <div className='ctx'>
          <div className='image' />
        </div>
        <div className='content'>
          <div ref={ref3} className='box'>
            <div className='innerBox'>
              <div ref={ref1} className='head'>
                <h1>公用充電 & 高效充電</h1>
                <div>
                  涵蓋全台<span>75%</span>充電網絡
                </div>
              </div>
              <div ref={ref2} className='body'>
                <p>
                  <span>MG Taiwan</span>
                  目前與<span>EVOASIS、U-POWER、iCHARGING、TAIL、EVALUE、NOODOE</span>及
                  <span>Yes</span>！來電…等
                </p>
                <p>多家國內主要充電營運商特約合作，涵蓋全台75%以上快慢充充電網絡資源。</p>
                <div className='sponsor'>
                  <div className='image' />
                </div>
              </div>
            </div>
            <div className='album' style={{ width: `${width}px` }}>
              <div className='item'>
                <div className='image'>
                  <div className='img i0' />
                </div>
                <div className='text'>
                  <h1>充電規格</h1>
                  <p>
                    使用CCS1 Combo 1之DC直流電與SAE J1772規格之AC交流電等兩種市面涵蓋率最高充電規格
                  </p>
                </div>
              </div>
              <div className='item'>
                <div className='image'>
                  <div className='img i1' />
                </div>
                <div className='text'>
                  <h1>展間快充</h1>
                  <p>全台展間陸續建置專屬快速充電樁，提供最全面且便捷的充電體驗</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Article>
    </div>
  );
});
export default Modus;
