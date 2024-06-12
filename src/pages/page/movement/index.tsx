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
    const chargeDaily = Math.round(state.mile / 567);
    const chargeMeekly = Math.round((state.mile * 7) / 567);
    const electricityCost = Math.round(state.mile * 0.8);
    const fuelCost = Math.round(state.mile * 2.5);
    const savedCostYearly =
      (fuelCost - electricityCost) * 365; /*+  (state.mile === 0 ? 0 : 17410) */
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
