import { Context } from '@/settings/constant';
import OnloadProvider from 'lesca-react-onload';
import { memo, useContext, useEffect, useState } from 'react';
import Application from './application';
import Battery from './battery';
import Charge from './charge';
import { PageContext, PageState, PageStepType } from './config';
import Flow from './flow';
import './index.less';
import Landing from './landing';
import Life from './life';
import Modus from './modus';
import Movement from './movement';
import QA from './qa';
import Safety from './safety';
import Service from './service';
import Year from './year';
import { ActionType } from '@/settings/type';

const RestPage = () => {
  const [, setContext] = useContext(Context);
  const [state, setState] = useContext(PageContext);

  useEffect(() => {
    if (state.step === PageStepType.allLoaded) {
      setContext({ type: ActionType.LoadingProcess, state: { enabled: false } });
    }
  }, [state.step]);

  return (
    <OnloadProvider
      onload={() => {
        setState((S) => ({ ...S, step: PageStepType.allLoaded }));
      }}
    >
      <div>
        <Life />
        <Movement />
        <Safety />
        <Battery />
        <Charge />
        <div className='common-bg'>
          <Flow />
          <Modus />
          <Application />
          <Service />
          <QA />
        </div>
      </div>
    </OnloadProvider>
  );
};

const Page = memo(() => {
  const [state, setState] = useState(PageState);
  const { step } = state;
  const [append, setAppend] = useState(false);

  useEffect(() => {
    if (step === PageStepType.fontLoaded) {
      setAppend(true);
    }
  }, [step]);

  return (
    <PageContext.Provider value={[state, setState]}>
      <OnloadProvider
        onload={() => {
          setState((S) => ({ ...S, step: PageStepType.loaded }));
          document.fonts.ready.then(() => {
            setState((S) => ({ ...S, step: PageStepType.fontLoaded }));
          });
        }}
      >
        <div className='Page'>
          <Landing />
          <Year />
          {append && <RestPage />}
        </div>
      </OnloadProvider>
    </PageContext.Provider>
  );
});
export default Page;
