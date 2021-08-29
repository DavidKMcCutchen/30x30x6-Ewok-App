import { createAction, props } from "@ngrx/store";
import {  Ewok } from "@ewok/api-interfaces";

// Select Entity

export const selectEwok = createAction(
    '[EWOK] Select Ewok',
    props<{ ewokId: string }>()
);

// Load all Entities

export const loadEwoks = createAction(
    '[EWOK] Load Ewoks'
);

export const loadEwoksSuccess = createAction(
    '[EWOK] Load Ewoks Success',
    props<{ ewoks: Ewok[]}>()
);

export const loadEwoksFailed = createAction(
    '[EWOK] Load Ewoks Failed',
    props<{ error: any }>()
);

// Load Single Entity

export const loadEwok = createAction(
    '[EWOK] Load Ewok',
    props<{ ewokId: string}>()
);

export const loadEwokSuccess = createAction(
    '[EWOK] Load Ewok Success',
    props<{ ewok: Ewok}>()
);

export const loadEwokFailed = createAction(
    '[EWOK] Load Ewok Failed',
    props<{ error: any}>()
);

// Load Create Entity

export const createEwok = createAction(
    '[EWOK] Create Ewok',
    props<{ ewok: Ewok}>()
);

export const createEwokSuccess = createAction(
    '[EWOK] Create Ewok Success',
    props<{ ewok: Ewok}>()
);

export const createEwokFailed = createAction(
    '[EWOK] Create Ewok Failed',
    props<{ error: any}>()
);

// Load Update Entity

export const updateEwok = createAction(
    '[EWOK] Update Ewok',
    props<{ ewok: Ewok}>()
);

export const updateEwokSuccess = createAction(
    '[EWOK] Update Ewok Success',
    props<{ ewok: Ewok}>()
);

export const updateEwokFailed = createAction(
    '[EWOK] Create Ewok Failed',
    props<{ error: any}>()
);

// Load Delete Entity

export const deleteEwok = createAction(
    '[EWOK] Delete Ewok',
    props<{ ewok: Ewok}>()
);

export const deleteEwokSuccess = createAction(
    '[EWOK] Delete Ewok Success',
    props<{ ewok: Ewok}>()
);

export const deleteEwokFailed = createAction(
    '[EWOK] Create Ewok Failed',
    props<{ error: any}>()
);