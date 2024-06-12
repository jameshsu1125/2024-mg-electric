import Article from '@/components/article';
import { memo, useMemo } from 'react';
import './form.less';
import { Data, MAINTAIN_COST_BY_MILE } from './config';
import Counter from './counter';

const Form = memo(({ data, mile }: { data: Data; mile: number }) => {
  const maintainCost = useMemo(() => {
    return MAINTAIN_COST_BY_MILE(mile);
  }, [mile]);

  const taxCost = useMemo(() => {
    if (mile === 0) return 0;
    return 11920;
  }, [mile]);

  const totalCost = useMemo(() => {
    if (mile === 0) return 0;
    return (data.savedCostYearly || 0) + 11920 + maintainCost;
  }, [mile, maintainCost, data.savedCostYearly]);

  return (
    <div className='Form'>
      <Article expend>
        <div className='flex w-full justify-center'>
          <div className='w-full max-w-[1024px]'>
            <div className='image'>
              <div>
                <div className='total'>
                  <span>
                    <Counter init={0} to={totalCost} max={99999999} dollar />
                  </span>
                  元
                </div>
                <div className='fuel'>
                  <span>
                    <Counter init={0} to={data.savedCostYearly || 0} max={99999999} dollar />
                  </span>
                </div>
                <div className='tax'>
                  <span>
                    <Counter init={0} to={taxCost} max={99999999} dollar />
                  </span>
                </div>
                <div className='maintain'>
                  <span>
                    <Counter init={0} to={maintainCost || 0} max={99999999} dollar />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Article>
    </div>
  );
});
export default Form;
