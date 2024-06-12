import Article from '@/components/article';
import useMedia, { MediaType } from '@/hooks/useMedia';
import { memo } from 'react';
import { Data } from './config';
import './result.less';
import ResultDesktop from './resultDesktop';
import ResultMobile from './resultMobile';

const Result = memo(({ data }: { data: Data }) => {
  const [device] = useMedia();
  return (
    <div className='Result'>
      <Article expend>
        {device < MediaType.MD ? <ResultMobile data={data} /> : <ResultDesktop data={data} />}
      </Article>
    </div>
  );
});
export default Result;
