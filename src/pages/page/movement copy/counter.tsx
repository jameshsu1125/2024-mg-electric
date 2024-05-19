import useTween from 'lesca-use-tween';
import { memo, useEffect, useMemo } from 'react';

const Counter = memo(
  ({ init = 0, to, max = 999 }: { init?: number; to?: number; max?: number }) => {
    const [style, setStyle] = useTween({ opacity: init });

    useEffect(() => {
      setStyle({ opacity: to }, 2000);
    }, [to]);

    const result = useMemo(() => {
      if (style.opacity === undefined) return 0;
      if (Number(style.opacity) > max) return `>${max}`;
      return Math.floor(Number(style.opacity));
    }, [style.opacity]);

    return <>{result}</>;
  },
);
export default Counter;
