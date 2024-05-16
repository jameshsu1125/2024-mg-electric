import Article from '@/components/article';
import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import { memo, useContext, useMemo } from 'react';
import { MovementContext } from './config';
import Desktop from './desktop';
import Mobile from './mobile';
import './result.less';

export type Data = {
  chargeDaily?: number;
  chargeMeekly?: number;
  electricityCost?: number;
  fuelCost?: number;
  savedCostYearly?: number;
};

const Result = memo(() => {
  const [context] = useContext(Context);
  const device = context[ActionType.Device];

  const [state] = useContext(MovementContext);

  const data = useMemo(() => {
    const chargeDaily = Math.ceil(state.mile / 567);
    const chargeMeekly = Math.ceil((state.mile * 7) / 567);
    const electricityCost = Math.ceil(state.mile * 0.8);
    const fuelCost = Math.ceil(state.mile * 2.5);
    const savedCostYearly = (fuelCost - electricityCost) * 365 + (state.mile === 0 ? 0 : 17410);
    return {
      chargeDaily,
      chargeMeekly,
      electricityCost,
      fuelCost,
      savedCostYearly,
    };
  }, [state.mile]);

  return (
    <div className='Result'>
      <Article>{device === 'desktop' ? <Desktop data={data} /> : <Mobile data={data} />}</Article>
    </div>
  );
});
export default Result;
