import Article from '@/components/article';
import { memo } from 'react';
import { BatteryExtremeTesting } from './config';
import './section2.less';

const Section2 = memo(() => (
  <section className='Section-2'>
    <Article expend>
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
));
export default Section2;
