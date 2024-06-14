import { createContext, Dispatch, SetStateAction } from 'react';

export type TMovementState = { mile: number };
export type TMovementContext = [TMovementState, Dispatch<SetStateAction<TMovementState>>];

export const MovementState = { mile: 0 };
export const MovementContext = createContext<TMovementContext>([MovementState, () => {}]);

export type Data = {
  chargeDaily?: number;
  chargeMeekly?: number;
  electricityCost?: number;
  fuelCost?: number;
  savedCostYearly?: number;
};

export const MAINTAIN_COST_BY_MILE = (mile: number) => {
  if (mile < 10000) return 0;
  else if (mile < 20000) return 3967;
  else if (mile < 30000) return 7786;
  else if (mile < 40000) return 13185;
  else if (mile < 50000) return 21154;
  else if (mile < 60000) return 25121;
  else if (mile < 70000) return 28070;
  else if (mile < 80000) return 32469;
  else if (mile < 90000) return 37358;
  else if (mile < 100000) return 44314;
  return 44314;
};
