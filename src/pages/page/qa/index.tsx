import Article from '@/components/article';
import useTween from 'lesca-use-tween';
import { ReactNode, memo, useContext, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { QAContext, QAData, QAState } from './config';
import './index.less';

const Answer = memo(({ a }: { a: ReactNode[] }) => {
  const [style, setStyle] = useTween({ opacity: 0, y: -100 });

  useEffect(() => {
    setStyle({ opacity: 1, y: 0 }, 400);
  }, []);

  return (
    <div className='a' style={style}>
      <div>
        {a.map((txt, index) => (
          <div key={`${JSON.stringify(txt)}${index}`}>{txt}</div>
        ))}
      </div>
    </div>
  );
});

const Item = memo(({ q, a, index }: { q: ReactNode; a: ReactNode[]; index: number }) => {
  const [state, setState] = useContext(QAContext);

  return (
    <>
      <div className='q' onClick={() => setState((S) => ({ ...S, index }))}>
        <div>{q}</div>
      </div>
      {state.index === index ? <Answer a={a} /> : <div className='h-[1px] w-full bg-[#ccc] !p-0' />}
    </>
  );
});

const QA = memo(() => {
  const [state, setState] = useState(QAState);
  return (
    <div className='QA'>
      <Article>
        <QAContext.Provider value={[state, setState]}>
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
                      className={twMerge('tag', state.tab === index ? 'on' : '')}
                      onClick={() => setState((S) => ({ ...S, tab: index, index: undefined }))}
                    >
                      {item.tab}
                    </button>
                  );
                })}
              </div>
              <div className='table-body'>
                {QAData[state.tab].data.map((item, index) => (
                  <Item
                    key={`${JSON.stringify(item.q)}${JSON.stringify(item.a)}${index}`}
                    q={item.q}
                    a={item.a}
                    index={index}
                  />
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
