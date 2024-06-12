import { createContext, Dispatch, SetStateAction } from 'react';

export type TMovementState = { mile: number };
export type TMovementContext = [TMovementState, Dispatch<SetStateAction<TMovementState>>];

export const MovementState = { mile: 0 };
export const MovementContext = createContext<TMovementContext>([MovementState, () => {}]);
