import { createContext, Dispatch, SetStateAction } from 'react';

export type TQAState = { index: number | undefined; tab: number };
export type TQAContext = [TQAState, Dispatch<SetStateAction<TQAState>>];

export const QAState: TQAState = { index: undefined, tab: 0 };
export const QAContext = createContext<TQAContext>([QAState, () => {}]);

export const QAData = [
  {
    tab: '電車使用相關',
    data: [
      {
        q: <>行駛積水路段會不會造成電池損壞？</>,
        a: [
          <>
            <span>MG4 </span>
            不具備涉水功能，雖高壓電池組有經過防水測試，但仍建議遇到積水路段不冒險通過，預防車輛電池及其他周邊零組件造成問題產生。
          </>,
        ],
      },
      {
        q: <>戶外或潮濕環境會影響電池的壽命嗎？</>,
        a: [
          <>
            <span>MG4 </span>
            高壓電池整體為氣密防水設計，並搭配強化合金外殼，對於外界氣候的耐候性能非常高，基本上不受影響。
          </>,
        ],
      },
      {
        q: <>車輛開到完全沒有電的時候，對電池的傷害大嗎？</>,
        a: [
          <>
            <span>MG4 </span>
            車內系統擁有電池管理機制，會確保電池的健康度表現，但為了延長高壓電池的使用壽命，不建議將車輛開至完全沒電的狀態。
          </>,
        ],
      },
      {
        q: <>長期未使用車輛，是否會沒電？</>,
        a: [
          <>
            若有預期將長期不使用車輛，建議您在最後一次使用車輛時將電量維持在<span> 30% </span>
            以上。即便一個月至半年內不使用車輛，電量基本上不會耗盡。
          </>,
        ],
      },
    ],
  },
  {
    tab: '充電相關',
    data: [
      {
        q: (
          <>
            <span>MG4 </span>最大充電功率為何？
          </>
        ),
        a: [
          <>
            <span>MG4 XPOWER </span>最大可支援的充電功率為<span> 140kW</span>；<span>MG4 EV </span>
            旗艦版最大可支援的充電功率為<span> 135kW </span>
            ，充電功率會依充電環境及各地區供電狀況而有所差異。
          </>,
        ],
      },
      {
        q: (
          <>
            頻繁使用<span> DC </span>直流電快速充電時，是否會影響電池壽命？
          </>
        ),
        a: [
          <>
            建議<span> MG4 </span>在使用<span> DC </span>快充時，同步搭配<span> AC </span>
            慢充達到高壓電池內均衡充電，可維持高壓電池效能並延長壽命。
          </>,
        ],
      },
      {
        q: (
          <>
            在下雨天的時候可以為<span> MG4 </span>充電嗎？
          </>
        ),
        a: [
          <>
            充電孔與相關充電裝置皆有生活防水等級，雨天可依照車主使用手冊規範進行充電，可放心於戶外使用。且充電時電腦會全時監控全車絕緣數據，如果有任何異常都會進入保護。若戶外雨勢較大或發生閃電雷擊時，仍建議您避免進行充電，以免發生觸電危險。
          </>,
        ],
      },
      {
        q: <>如何防止充電過程中被他人隨意拔除充電槍？</>,
        a: [
          <>
            當車輛連接充電槍後，車端與充電樁端皆會自動偵測及啟動防護機制。快充時車輛會自動上鎖充電槍，慢充時車輛上鎖後充電槍亦會上鎖，以避免被人拔除。
          </>,
        ],
      },
      {
        q: <>為什麼儀表板上顯示的可行駛里程數和實驗室公布的數據不一樣？</>,
        a: [
          <>
            儀表板上所顯示的行駛里程數是根據您的駕駛習慣與車內剩餘電池電量所推估而成，行駛過程中也會受到車外溫度、路面狀況、空調冷氣系統、輪胎胎壓狀況...等因素而有所調整，故與實驗室所測試的情境
            （<span>NEDC </span>規範）不一致。
          </>,
        ],
      },
      {
        q: (
          <>
            <span>MG4 </span>是採用什麼規格的充電樁？
          </>
        ),
        a: [
          <>
            <span>MG4 </span>支援<span> AC </span>交流電與<span> DC </span>
            直流快速充電，並採用國內主流的<span> SAE J1772 </span>與<span> CCS1 </span>充電規格。
          </>,
        ],
      },
      {
        q: <>遇到充電樁無法拔出時，該如何處理？</>,
        a: [
          <>
            正常情況下，解鎖後按下充電槍，即可順利拔出充電槍。若遇到充電槍故障無法順利拔出時，可以藉由拉開後車廂內的緊急拉環，可強制解鎖拔出充電槍。
          </>,
        ],
      },
    ],
  },
  {
    tab: '充電樁相關',
    data: [
      {
        q: <>設置家用充電樁需向哪個單位聯繫？</>,
        a: [
          <>
            <span>MG Taiwan </span>
            目前與國內最大電動車充電服務營業整合商【裕電俥電】合作，提供您居家充電樁設置方案。【裕電俥電】特約合作的廠商皆提供實際到府場勘、評估施工安全性以及完整售後服務。讓您抵達住家後，僅需為愛車插上電源，透過
            <span> MG4 </span>車機或<span> My MG App </span>
            設定預約充電，體驗安心便捷的純電生活。裕電充電樁預約網址 :<br />
            <span>
              {' '}
              <a target='_blank' href='https://www.yes-charging.com.tw/Cooperative-EV_Service'>
                https://www.yes-charging.com.tw/Cooperative-EV_Service
              </a>
            </span>
          </>,
        ],
      },
      {
        q: <>家用充電裝置保固多久？</>,
        a: [
          <>
            <span>MG Taiwan </span>合作的充電樁廠商【裕電俥電】皆提供充電樁機器本身及工程安裝
            <span> 24 </span>
            個月保固服務，如您的充電樁發生異常時，可直接撥打【裕電俥電】免費客服專線
            <span>
              {' '}
              <a target='_blank' href='tel:0800-550-508'>
                0800-550-508
              </a>{' '}
            </span>
            ，由充電樁廠商提供您詳細的評估及進行後續的診斷維修。
          </>,
        ],
      },
      {
        q: <>可以自己找電工來安裝我家的充電樁嗎？</>,
        a: [
          <>
            基於對充電樁安裝安全及專業度，<span>MG Taiwan </span>
            不建議您自行尋找其他電工包商安裝，且<span> MG Taiwan </span>
            合作的充電樁廠商皆有配合的專業施工團隊，包含前置場勘、施工評估及安裝，並且提供商業綜合責任保險，以確保充電樁整體施工品質無虞，提供您最好的保護。
          </>,
        ],
      },
      {
        q: <>充電樁是否能安裝在戶外？</>,
        a: [
          <>
            <span>MG Taiwan </span>
            合作的廠商【裕電俥電】所提供的充電樁設備皆符合國家級產品認證與機殼防水防塵規範，適用於戶外場域，請您安心使用。
          </>,
        ],
      },
      {
        q: <>如果想安裝或維修充電樁需向哪個單位聯繫？</>,
        a: [
          <>
            <span>MG Taiwan </span>合作的充電樁廠商【裕電俥電】皆提供充電樁本身及工程安裝
            <span> 24 </span>
            個月保固服務。如您的充電樁發生異常時，可直接撥打【裕電俥電】免費客服專線
            <span>
              {' '}
              <a target='_blank' href='tel:0800-550-508'>
                0800-550-508
              </a>{' '}
            </span>
            ，提供您詳細的評估及進行後續的診斷維修。
          </>,
        ],
      },
      {
        q: (
          <>
            如何判斷家中既有充電樁，或非<span> MG Taiwan </span>特約合作充電營運商的充電站是否通用於
            <span> MG4</span>？
          </>
        ),
        a: [
          <>
            請參考<span> MG Taiwan </span>原廠建議之充電樁規格，<span>MG4 </span>使用
            <span> CCS1 DC </span>直流電與<span> SAE J1772 AC </span>
            交流電等兩種充電規格，若該充電樁符合原廠建議規格，則皆可使用。
          </>,
        ],
      },
      {
        q: <>可以在哪裡查詢到充電樁資訊 / 附近充電樁？</>,
        a: [
          <>
            <span>MG Taiwan </span>整合全台特約合作充電營運商充電資源，您可以至
            <span> App Store </span>或<span> Google </span>商店下載【<span>My MG</span>】，藉由
            <span> My MG App </span>
            充電功能，協助您快速尋找最近的充電資源站點，並提供一鍵導航功能，讓您快速抵達充電站點。
          </>,
        ],
      },
      {
        q: (
          <>
            <span>MG </span>展示中心有提供充電服務嗎？
          </>
        ),
        a: [
          <>
            <span>MG </span>全台展間將陸續規劃<span> DC </span>充電站，您可以透過
            <span> My MG App </span>
            進行查詢。
          </>,
        ],
      },
    ],
  },
  {
    tab: '充電金流',
    data: [
      {
        q: <>充電及付款流程為何？</>,
        a: [
          <>
            ① 使用<span> My MG App </span>尋找充電站 ② 插上充電槍 / 掃描<span> QR code </span>③
            開始充電 ④ 結束充電 ⑤ 線上付款
          </>,
          <>
            -<span> My MG App</span>
            整合全台特約合作充電營運商之充電資源站點，一鍵導航並進行付款或點數扣抵（限特約合作充電營運商）。
          </>,
          <>
            -<span> My MG </span>線上付款功能僅適用部分特約合作廠商，如在使用上有任何疑慮時，請洽
            <span> MG Taiwan </span>
            免費客服專線
            <span>
              {' '}
              <a target='_blank' href='tel:0800-039-580'>
                0800-039-580
              </a>{' '}
            </span>
            ，將由專人為您解答。
          </>,
        ],
      },
      {
        q: <>充電金扣抵遇到問題如何處理？</>,
        a: [
          <>
            <span>MG Taiwan </span>
            將不定時推出符合顧客需求的活動專案，若對於充電金使用上有任何疑慮時，可直接撥打
            <span> MG Taiwan </span>
            的免費客服專線
            <span>
              {' '}
              <a target='_blank' href='tel:0800-039-580'>
                0800-039-580
              </a>{' '}
            </span>
            ，將由專人為您解答。
          </>,
        ],
      },
    ],
  },
  {
    tab: '購車相關',
    data: [
      {
        q: (
          <>
            購買<span> MG4 </span>是否可申辦貸款？
          </>
        ),
        a: [
          <>
            <span>MG Taiwan </span>
            將不定時推出符合顧客需求的優惠貸款，實際貸款方案內容依官網公布為準。
          </>,
        ],
      },
      {
        q: <>電動車的保險跟燃油車的差異？</>,
        a: [
          <>
            目前電動車與燃油車保險內容並無差異，未來若有相關條款修正依主管機關及保險公司公告為準，最新資訊請洽詢各經銷商銷售顧問。
          </>,
        ],
      },
      {
        q: <>電動車免徵牌照稅之期限及電動車需徵燃料稅嗎？</>,
        a: [
          <>
            牌照稅：依財政部<span> 2021 </span>年公告，以電能為動力之車輛牌照稅，免徵期限至
            <span> 114 </span>年<span> 12 </span>月<span> 31 </span>日。
          </>,
          <>燃料稅：以電能為動力之電動汽車免徵燃料稅，依政府公告為主。</>,
        ],
      },
      {
        q: (
          <>
            購買<span> MG4 </span>有貨物稅舊換新的補助嗎？
          </>
        ),
        a: [
          <>
            沒有。<span>MG4 </span>已適用貨物稅條例第<span> 12 </span>條之<span> 3 </span>
            規定免徵該車種應徵之貨物稅，故無法再適用中古汽車汰舊換新退稅優惠。
          </>,
        ],
      },
      {
        q: <>老舊車輛汰舊換新是否可享有減空汙 / 減碳補助？</>,
        a: [
          <>
            依環境部<span> 2023 </span>年公告，補助車主淘汰車齡達<span> 10 </span>
            年以上老舊車輛，可依減空污、減碳項目及換新車種不同，給予不同金額補助或獎勵金，相關申請流程請洽詢各經銷商銷售顧問。
          </>,
        ],
      },
    ],
  },
  {
    tab: '售後服務',
    data: [
      {
        q: (
          <>
            <span>MG4 </span>可至哪裡維修？
          </>
        ),
        a: [
          <>
            可從車主手冊內的清單以及官網<span> App </span>的註記中查詢。
          </>,
          <>
            地圖標註會呈現不同顏色（可維修電車為綠色），可點開據點察看詳細說明。如有任何疑慮時，請洽
            <span> MG Taiwan </span>免費客服專線
            <span>
              {' '}
              <a href='tel:0800-039-580' target='_blank'>
                0800-039-580
              </a>{' '}
            </span>
            ，將由專人為您解答。
          </>,
        ],
      },
      {
        q: <>靜置區與電車專修區的差別是什麼？</>,
        a: [
          <>
            靜置區是一級廠點的標準設施，為觀察電動車動力電池（大電池）異常而設，在技師判斷存在安全疑慮的情況下，會將車輛拖往該區域進行進一步觀察。而一般保養維修和大電池更換，僅需使用一般工位。
          </>,
        ],
      },
      {
        q: <>無法發動怎麼辦？</>,
        a: [
          <>
            情況一：遙控器解鎖後，<span>12V </span>
            電瓶（以下稱電瓶）電力無法啟動車輛，接電後達到啟動車輛電力需求，狀況解除。
          </>,
          <>
            情況二：遙控器解鎖後，電瓶電力充足（可透過儀表螢幕查看電量），但無法啟動車輛，此為車輛進入保護模式，高壓電池（大電池）不放電必須回原廠處理。
          </>,
          <>
            情況三：遙控器無法解鎖時，可能是電瓶完全沒電，此狀況接電是無法啟動的，不建議您自行更換電瓶，因此建議直接請拖車或道路救援回原廠處理。
          </>,
        ],
      },
    ],
  },
];
