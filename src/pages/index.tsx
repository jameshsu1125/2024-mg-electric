import LoadingProcess from '@/components/loadingProcess';
import { Context, InitialState, Reducer } from '@/settings/constant';
import '@/settings/global.less';
import { ActionType, TContext } from '@/settings/type';
import { useEffect, useMemo, useReducer, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Page from './page';

const href = window.location.href;

const App = () => {
  const [state, setState] = useReducer(Reducer, InitialState);
  const value: TContext = useMemo(() => [state, setState], [state]);

  const [url, setURL] = useState(href);

  useEffect(() => {
    window.addEventListener('popstate', () => {
      setURL(window.location.href);
    });
  }, []);

  return (
    <div className='App'>
      <Context.Provider {...{ value }}>
        {href === url && <Page />}
        {state[ActionType.LoadingProcess]?.enabled && <LoadingProcess />}
      </Context.Provider>
    </div>
  );
};

const render = () => {
  const app = ReactDOM.createRoot(document.getElementById('not_aem_app')!);
  app.render(<App key={new Date().getTime()} />);
};

render();
window.addEventListener('popstate', () => {
  render();
});
