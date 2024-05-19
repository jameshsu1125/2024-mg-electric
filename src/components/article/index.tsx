import { IReactProps } from '@/settings/type';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';
import './index.less';

const Article = memo(({ children, expend }: IReactProps & { expend?: boolean }) => (
  <article className={twMerge('Article', expend ? 'expend' : '')}>{children}</article>
));
export default Article;
