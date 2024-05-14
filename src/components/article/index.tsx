import { IReactProps } from '@/settings/type';
import { memo } from 'react';
import './index.less';

const Article = memo(({ children }: IReactProps) => (
  <article className='Article'>{children}</article>
));
export default Article;
