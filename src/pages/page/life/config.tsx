import { createContext, Dispatch, SetStateAction } from 'react';

export type TLifeState = { index: number; readIndex: number };
export type TLifeContext = [TLifeState, Dispatch<SetStateAction<TLifeState>>];

export const LifeState: TLifeState = { index: 0, readIndex: 0 };
export const LifeContext = createContext<TLifeContext>([LifeState, () => {}]);

// export const base =
//   process.env.NODE_ENV === 'development'
//     ? './'
//     : 'https://jameshsu1125.github.io/2024-mg-electric/';

export const base =
  process.env.NODE_ENV === 'development' ? './' : 'https://mg4electric.netlify.app/';

export const LifeCarousel = [
  {
    headline: '純電移動生活',
    subline: '在寧靜中 創造美好體驗',
    body: [<>全然靜謐的駕馭體驗，穿梭於自然卻不製造喧囂，</>, <>沉浸與世界和諧共生的純電境界。</>],
    postscript: false,
    video: (
      <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%' }}>
        <source src={`${base}video/0.mp4`} type='video/mp4' />
      </video>
    ),
  },
  {
    headline: '純電移動生活',
    subline: '強大動能 化熱情為衝勁',
    body: [
      <>以純電驅動，享受駕馭就此不同，</>,
      <>不僅有專屬單踏板模式，不浪費一點動能，</>,
      <>
        更能享受<span> 0-100 km/h </span>加速僅需<span> 3.8 </span>秒的貼背快感。
      </>,
    ],
    postscript: (
      <>
        *<span> 0-100 km/h </span>加速時間<span> 3.8 </span>秒僅限<span> MG4 XPOWER </span>
      </>
    ),
    video: (
      <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%' }}>
        <source src={`${base}video/1.mp4`} type='video/mp4' />
      </video>
    ),
  },
  {
    headline: '純電移動生活',
    subline: '自在掌握 你的充電時光',
    body: [
      <>因地制宜的充電選擇，無痛解鎖純電新生活，</>,
      <>
        不論快充與慢充，皆可搭配<span> My MG App </span>遠端管理，
      </>,
      <>輕鬆掌握車輛充電狀態。</>,
    ],
    postscript: (
      <>
        *智慧車聯網系統與手機介面以<span> MG Taiwan </span>提供之<span> My MG App </span>
        服務為準，並僅供<span> MG4 </span>使用。
      </>
    ),
    video: (
      <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%' }}>
        <source src={`${base}video/2.mp4`} type='video/mp4' />
      </video>
    ),
  },
  {
    headline: '純電移動生活',
    subline: '電能滿載 讓生活充滿精彩',
    body: [
      <>當愛車也能提供電能，將為生活帶來更多可能，</>,
      <>
        無論在何時何地，透過<span> V2L </span>外接供電滿足各種用電需求*。
      </>,
    ],
    postscript: (
      <>
        *如欲選購<span> V2L </span>外接供電轉接器，詳情請洽經銷商
      </>
    ),
    video: (
      <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%' }}>
        <source src={`${base}video/3.mp4`} type='video/mp4' />
      </video>
    ),
  },
];
