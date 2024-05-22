import { FourChar } from '@/settings/config';
import CharTransition from 'lesca-react-char-transition';
import { Bezier } from 'lesca-use-tween';
import { useEffect, useState } from 'react';

const Char = ({
  inView,
  children,
  delay,
  duration = 3000,
}: {
  children: string;
  inView: boolean;
  delay?: number;
  duration?: number;
}) => {
  const [key, setKey] = useState(`key-${Math.random()}`);
  const [pause, setPause] = useState(true);

  useEffect(() => {
    if (inView) setPause(false);
    else {
      setPause(true);
      setKey(`key-${Math.random()}`);
    }
  }, [inView]);

  return (
    <CharTransition
      duration={duration}
      preChar={FourChar[0]}
      delay={delay}
      list={FourChar}
      pause={pause}
      key={key}
      easing={Bezier.inSine}
    >
      {children}
    </CharTransition>
  );
};
export default Char;
