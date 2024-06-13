import { memo, useMemo, useState } from 'react';
import { MovementContext, MovementState } from './config';
import Cover from './cover';
import Form from './form';
import './index.less';
import Result from './result';

const Movement = memo(() => {
  const value = useState(MovementState);

  const [state] = value;

  const data = useMemo(() => {
    const chargeDaily = Math.round(state.mile / 567); // 每天充電次數
    const chargeMeekly = Math.round((state.mile * 7) / 567); // 每週充電次數
    const electricityCost = Math.round(state.mile * 0.8); // 每天充電成本
    const fuelCost = Math.round(state.mile * 2.5); // 每天油耗成本
    const savedCostYearly = // 每年省下來的成本
      (state.mile * 2.5 - state.mile * 2.5) * 365; /*+  (state.mile === 0 ? 0 : 17410) */
    return {
      chargeDaily,
      chargeMeekly,
      electricityCost,
      fuelCost,
      savedCostYearly,
    };
  }, [state.mile]);

  return (
    <div className='Movement'>
      <MovementContext.Provider value={value}>
        <Cover />
        <Result data={data} />
        <Form data={data} mile={state.mile} />
      </MovementContext.Provider>
    </div>
  );
});
export default Movement;
