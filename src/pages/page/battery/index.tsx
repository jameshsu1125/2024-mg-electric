import { memo, useEffect } from 'react';
import './index.less';
import Article from '@/components/article';
import { BatteryExtremeTesting } from './config';

const Battery = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Battery'>
      <section className='section-1'>
        <Article>
          <div className='headline'>
            <h1>
              <span>MG4</span>電池科技
            </h1>
          </div>
          <div className='content'>
            <div className='dialog'>
              <div>
                <h2>高效三元鋰電池</h2>
                <p>相較於磷酸鐵鋰電池可在單位面積儲存更高的電量，提供更優異的續航里程表現。</p>
              </div>
              <div>
                <h2>
                  <span>110mm</span>超薄躺式設計
                </h2>
                <p>
                  在減少電池體積下，同時增加了電池容量，有別於傳統立式電池，更能釋放車內空間，提供後座乘客舒適的乘坐感受。
                </p>
              </div>
              <div>
                <h2>
                  搭載<span>BMS</span>電池管理系統
                </h2>
                <p>透過冷卻系統和陶瓷隔熱板進行熱能管理，提高電池安全性。</p>
              </div>
            </div>
            <div className='product'>
              <div className='img' />
            </div>
          </div>
        </Article>
      </section>
      <section className='section-2'>
        <Article>
          <div className='headline'>
            <h1>
              通過<span>5+1</span>極端條件測試
            </h1>
          </div>
          <div className='content'>
            {BatteryExtremeTesting.map((data) => (
              <div className='ctx' key={data.title}>
                <div className='item'>
                  <h2>{data.title}</h2>
                  <p>{data.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Article>
      </section>
    </div>
  );
});
export default Battery;
