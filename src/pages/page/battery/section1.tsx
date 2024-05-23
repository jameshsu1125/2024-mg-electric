import Article from '@/components/article';
import { memo, useEffect } from 'react';
import './section1.less';
import { useInView } from 'react-intersection-observer';
import useTween from 'lesca-use-tween';
import { IReactProps } from '@/settings/type';

const Dialog = ({ children, inView, index }: IReactProps & { inView: boolean; index: number }) => {
  const [style, setStyle] = useTween({ opacity: 0, y: 50 });

  useEffect(() => {
    if (inView) setStyle({ opacity: 1, y: 0 }, { duration: 800, delay: 500 + index * 200 });
    else setStyle({ opacity: 0, y: 50 }, 100);
  }, [inView]);
  return <div style={style}>{children}</div>;
};

const H1 = ({ inView }: { inView: boolean }) => {
  const [style, setStyle] = useTween({ letterSpacing: '2rem' });

  useEffect(() => {
    if (inView) setStyle({ letterSpacing: '0.2rem' }, { duration: 5000 });
    else setStyle({ letterSpacing: '2rem' }, 100);
  }, [inView]);

  return (
    <h1 style={style}>
      <span>MG4</span>電池科技
    </h1>
  );
};

const Section1 = memo(() => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <section ref={ref} className='Section-1'>
      <Article>
        <div className='headline'>
          <H1 inView={inView} />
        </div>
        <div className='content'>
          <div className='dialog'>
            <Dialog inView={inView} index={0}>
              <h2>高效三元鋰電池</h2>
              <p>相較於磷酸鐵鋰電池可在單位面積儲存更高的電量，提供更優異的續航里程表現。</p>
            </Dialog>
            <Dialog inView={inView} index={1}>
              <h2>
                <span>110mm</span>超薄躺式設計
              </h2>
              <p>
                在減少電池體積下，同時增加了電池容量，有別於傳統立式電池，更能釋放車內空間，提供後座乘客舒適的乘坐感受。
              </p>
            </Dialog>
            <Dialog inView={inView} index={2}>
              <h2>
                搭載<span>BMS</span>電池管理系統
              </h2>
              <p>透過冷卻系統和陶瓷隔熱板進行熱能管理，提高電池安全性。</p>
            </Dialog>
          </div>
          <div className='product'>
            <div>
              <div className='img' />
            </div>
          </div>
        </div>
      </Article>
    </section>
  );
});
export default Section1;
