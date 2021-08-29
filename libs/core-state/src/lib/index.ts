import { ActionReducerMap } from "@ngrx/store";
import * as fromEwoks from './ewoks/ewoks.reducer';

export interface AppState {
    [fromEwoks.EWOK_FEATURE_KEY]: fromEwoks.EwokState
};

export const reducers: ActionReducerMap<AppState> = {
    [fromEwoks.EWOK_FEATURE_KEY]: fromEwoks.ewokReducer
};