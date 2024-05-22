import Article from '@/components/article';
import useTween from 'lesca-use-tween';
import { memo, useEffect, useState } from 'react';
import { QAContext, QAData, QAState } from './config';
import './index.less';
import { twMerge } from 'tailwind-merge';

const Answer = memo(({ a }: { a: string[] }) => {
  const [style, setStyle] = useTween({ opacity: 0, y: -100 });

  useEffect(() => {
    setStyle({ opacity: 1, y: 0 }, 400);
  }, []);

  return (
    <div className='a' style={style}>
      <div>
        {a.map((txt) => (
          <div key={txt}>{txt}</div>
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
  const [state, setState] = value;
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
                {QAData.map((item, index) => {
                  return (
                    <button
                      key={`${item.tab}-${index}`}
                      className={twMerge('tag', state.index === index ? 'on' : '')}
                      onClick={() => setState((S) => ({ ...S, index }))}
                    >
                      {item.tab}
                    </button>
                  );
                })}
              </div>
              <div className='table-body'>
                {QAData[state.index].data.map((item, index) => (
                  <Item key={`${item.q}${item.a}${index}`} q={item.q} a={item.a} />
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
