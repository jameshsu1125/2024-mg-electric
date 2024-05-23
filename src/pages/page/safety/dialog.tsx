import useMedia, { MediaType } from '@/hooks/useMedia';
import useTween from 'lesca-use-tween';
import { memo, useEffect, useMemo } from 'react';
import { IoMdClose } from 'react-icons/io';
import { SafetyConfig } from './config';
import './index.less';

type DialogProps = {
  data: (typeof SafetyConfig)[number];
  onClick: (index: number) => void;
  index: number;
  clickIndex: number | undefined;
};
type ContentProps = { left: string } & Omit<DialogProps, 'clickIndex'>;

const Offset = 13;

const Content = ({ left, data, onClick, index }: ContentProps) => {
  const [style, setStyle] = useTween({ opacity: 0, y: 50 });

  useEffect(() => {
    setStyle({ opacity: 1, y: 0 }, 800);
  }, []);

  return (
    <div style={{ ...style, top: `${data.top}%`, left }} className='dialogContext'>
      <div>
        <h1>{data.title}</h1>
        <h2>{data.body}</h2>
        <button onClick={() => onClick(index)}>
          <IoMdClose />
        </button>
      </div>
    </div>
  );
};

const Dialog = memo(({ data, index, clickIndex, onClick }: DialogProps) => {
  const [device] = useMedia();

  const left = useMemo(() => {
    if (device < MediaType.XS) {
      return `${(window.innerWidth - 288) / 2}px`;
    } else if (device < MediaType.SM) {
      return `${(window.innerWidth - 320) / 2}px`;
    } else {
      return `${data.left - Offset}%`;
    }
  }, [device, data.left]);

  return (
    <>
      {index === clickIndex && <Content data={data} index={index} onClick={onClick} left={left} />}
    </>
  );
});
export default Dialog;
