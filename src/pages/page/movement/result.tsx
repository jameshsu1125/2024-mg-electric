import Article from '@/components/article';
import { memo } from 'react';
import './result.less';
import ResultDesktop from './resultDesktop';
import useMedia, { MediaType } from '@/hooks/useMedia';
import ResultMobile from './resultMobile';

const Result = memo(() => {
  const [device] = useMedia();
  return (
    <div className='Result'>
      <Article>{device < MediaType.MD ? <ResultMobile /> : <ResultDesktop />}</Article>
    </div>
  );
});
export default Result;
