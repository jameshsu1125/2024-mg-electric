import Article from '@/components/article';
import useTween from 'lesca-use-tween';
import { memo, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './index.less';

const Image = ({ inView }: { inView: boolean }) => {
  const [style, setStyle] = useTween({ scale: 1.5, borderWidth: 50 });

  useEffect(() => {
    if (inView) setStyle({ scale: 1, borderWidth: 0 }, { duration: 5000 });
    else setStyle({ scale: 1.5, borderWidth: 50 }, 100);
  }, [inView]);

  return (
    <div className='ctx'>
      <div style={{ transform: style.transform }} className='image' />
      <div
        style={{ borderWidth: `${style.borderWidth}px` }}
        className='absolute left-0 top-0 h-full w-full border-4 border-white'
      />
    </div>
  );
};

const Modus = memo(() => {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0,
  });

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
    <div ref={ref} className='Modus'>
      <Article>
        <Image inView={inView} />
        <div className='content'>
          <div ref={ref3} className='box'>
            <div className='innerBox'>
              <div ref={ref1} className='head'>
                <h1>公用充電 & 高效充電</h1>
                <div>
                  涵蓋全台<span>75%</span>充電網絡
                </div>
                <p id='ps' className='hidden lg:block'>
                  *充電網絡資源數據，統計至<span> 2023 </span>年<span> 12 </span>月底。
                </p>
              </div>
              <div ref={ref2} className='body'>
                <p>
                  <span>MG Taiwan </span>
                  目前與<span> EVOASIS、U-POWER、iCHARGING、TAIL、EVALUE、NOODOE </span>及
                  <span> Yes! </span>來電…等
                </p>
                <p>
                  多家國內主要充電營運商特約合作，涵蓋全台<span> 75% </span>以上快慢充充電網絡資源。
                </p>
                <p id='ps' className='block lg:hidden'>
                  *充電網絡資源數據，統計至<span> 2023 </span>年<span> 12 </span>月底。
                </p>
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
                    使用<span> CCS1 DC </span> 直流電與<span> SAE J1772 AC </span>
                    交流電，兩種市面涵蓋率最高充電規格。
                  </p>
                </div>
              </div>
              <div className='item'>
                <div className='image'>
                  <div className='img i1' />
                </div>
                <div className='text'>
                  <h1>展間快充</h1>
                  <p>全台展間陸續建置專屬快速充電樁，提供最全面且便捷的充電體驗。</p>
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
