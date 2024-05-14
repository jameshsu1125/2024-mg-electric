import { createContext, Dispatch, SetStateAction } from 'react';

export enum PageStepType {
  unset,
}

export type TPageState = { step: PageStepType };
export type TPageContext = [TPageState, Dispatch<SetStateAction<TPageState>>];

export const PageState: TPageState = {
  step: PageStepType.unset,
};
export const PageContext = createContext<TPageContext>([PageState, () => {}]);
