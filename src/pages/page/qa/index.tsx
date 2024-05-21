import Article from '@/components/article';
import useTween from 'lesca-use-tween';
import { memo, useEffect, useState } from 'react';
import { QAContext, QAData, QAState } from './config';
import './index.less';

const Answer = memo(({ a }: { a: string[] }) => {
  const [style, setStyle] = useTween({ opacity: 0, y: -100 });
  useEffect(() => {
    setStyle({ opacity: 1, y: 0 }, 400);
  }, []);
  return (
    <div className='a' style={style}>
      <div>
        {a.map((txt) => (
          <div>{txt}</div>
        ))}
      </div>
    </div>
  );
});

const Item = memo(({ q, a }: { q: string; a: string[] }) => {
  const [state, setState] = useState(false);
  return (
    <>
      <div className='q' onClick={() => setState((S) => !S)}>
        <div>{q}</div>
      </div>
      {state ? <Answer a={a} /> : <div className='h-[1px] w-full bg-[#ccc] !p-0' />}
    </>
  );
});

const QA = memo(() => {
  const value = useState(QAState);
  return (
    <div className='QA'>
      <Article>
        <QAContext.Provider value={value}>
          <div className='flex w-full flex-col items-center justify-center space-y-3 sm:space-y-10'>
            <div className='headline'>
              <h1>常見問題</h1>
            </div>
            <div className='table'>
              <div className='row'>
                <div className='tag'>電車維修</div>
              </div>
              <div className='table-body'>
                {QAData.map((item) => (
                  <Item key={`${item.q}${item.a}`} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          </div>
        </QAContext.Provider>
      </Article>
    </div>
  );
});
export default QA;
