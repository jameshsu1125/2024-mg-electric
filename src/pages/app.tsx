import { Context, InitialState, Reducer } from '@/settings/constant';
import { ActionType, TContext } from '@/settings/type';
import { useMemo, useReducer } from 'react';
import Page from './page';
import LoadingProcess from '@/components/loadingProcess';

const App = () => {
  const [state, setState] = useReducer(Reducer, InitialState);
  const value: TContext = useMemo(() => [state, setState], [state]);

  return (
    <div className='App'>
      <Context.Provider {...{ value }}>
        <Page />
        {state[ActionType.LoadingProcess]?.enabled && <LoadingProcess />}
      </Context.Provider>
    </div>
  );
};

export default App;
