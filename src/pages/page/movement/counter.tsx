import { Dollar } from 'lesca-number';
import useTween from 'lesca-use-tween';
import { memo, useEffect, useMemo } from 'react';

const Counter = memo(
  ({
    init = 0,
    to,
    max = 999,
    dollar = false,
  }: {
    init?: number;
    to?: number;
    max?: number;
    dollar?: boolean;
  }) => {
    const [style, setStyle] = useTween({ opacity: init });

    useEffect(() => {
      setStyle({ opacity: to }, 2000);
    }, [to]);

    const result = useMemo(() => {
      if (style.opacity === undefined) return 0;
      if (Number(style.opacity) > max) return `>${max}`;
      return Math.floor(Number(style.opacity));
    }, [style.opacity]);

    const dollarStyle = useMemo(() => {
      if (dollar) return Dollar(result);
      return result;
    }, [result, dollar]);

    return <>{dollarStyle}</>;
  },
);
export default Counter;
