import { createContext, Dispatch, SetStateAction } from 'react';

export type TChargeState = { index: number | undefined };
export type TChargeContext = [TChargeState, Dispatch<SetStateAction<TChargeState>>];

export const ChargeState: TChargeState = { index: undefined };
export const ChargeContext = createContext<TChargeContext>([ChargeState, () => {}]);

export const ChargeConfig = [
  {
    title: '居家充電',
    body: ['在家中設置充電樁，', '滿足日常行駛里程所需。'],
    dialog: {
      headline: '家用充電，滿足日常行駛所需',
      body: '日常行駛里程長的車主，抵達住家隨即插上電源，隔日車輛則近滿電狀態，若行駛里程較短，甚至一週僅需充一次電即可。',
    },
  },
  {
    title: '公用充電',
    body: ['全台佈局公用充電站，', '在你的生活圈，輕鬆為愛車充電。'],
    dialog: {
      headline: '在全台生活圈，便利尋找充電樁',
      body: '無論到達觀光景點、購物中心或飯店，透過普及的AC交流慢充(SAEJ1772)以及DC 直流快充(CCS1)，都能輕鬆為你的愛車充電，為接下來的旅程充好電。',
    },
  },
  {
    title: '高效充電',
    body: ['超高速充電體驗，', '在長途旅程中，隨時滿載電能。'],
    dialog: {
      headline: '高效充電，輕鬆展開純電旅程',
      body: '長途旅程中，可查詢附近DC快速充電站，因應里程需求，充電5分鐘即可行駛100公里，甚至從10%至80%電量，充電僅需26分鐘，以極速充電效率，解決你對純電里程的疑慮。',
    },
  },
];
