import Article from '@/components/article';
import { memo, useContext, useMemo } from 'react';
import './result.less';
import ResultDesktop from './resultDesktop';
import useMedia, { MediaType } from '@/hooks/useMedia';
import ResultMobile from './resultMobile';
import { MovementContext } from './config';

export type Data = {
  chargeDaily?: number;
  chargeMeekly?: number;
  electricityCost?: number;
  fuelCost?: number;
  savedCostYearly?: number;
};

const Result = memo(() => {
  const [device] = useMedia();
  const [state] = useContext(MovementContext);

  const data = useMemo(() => {
    const chargeDaily = Math.round(state.mile / 567);
    const chargeMeekly = Math.round((state.mile * 7) / 567);
    const electricityCost = Math.round(state.mile * 0.8);
    const fuelCost = Math.round(state.mile * 2.5);
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
      <Article expend>
        {device < MediaType.MD ? <ResultMobile data={data} /> : <ResultDesktop data={data} />}
      </Article>
    </div>
  );
});
export default Result;
