import { memo, useEffect } from 'react';

const Slide = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='flex w-full flex-row'>
      <div className='h-[337px] w-[600px] p-5'>
        <div className='v0 h-full w-full'></div>
      </div>
      <div className='flex h-[337px] flex-1 flex-col items-start justify-center space-y-10 px-20'>
        <div className='carousel-headline'>
          <h1 className='font-mxThin text-4xl font-thin tracking-widest'>純電移動生活</h1>
          <h2 className='font-mxBook text-lg'>在寧靜中 創造美好體驗</h2>
        </div>
        <div className='carousel-content'>
          <p>全然靜謐的駕馭體驗，穿梭於自然卻不自造喧囂，</p>
          <p>沉浸與世界和諧共生的純電境界。</p>
        </div>
      </div>
    </div>
  );
});
export default Slide;
