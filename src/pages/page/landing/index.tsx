import { memo } from 'react';
import './index.less';

const Landing = memo(() => (
  <div className='Landing'>
    <div className='headline'>
      <h1>
        <span>MG</span>
        {['純', '電', '生', '活', '指', '南', ''].map((txt) => (
          <div key={txt}>{txt}</div>
        ))}
      </h1>
    </div>
  </div>
));
export default Landing;
