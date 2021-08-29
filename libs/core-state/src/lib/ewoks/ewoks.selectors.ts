import { emptyEwok } from "@ewok/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ewokAdapter, EwokState, EWOK_FEATURE_KEY } from "./ewoks.reducer";

export const getEwokState = createFeatureSelector<EwokState>(EWOK_FEATURE_KEY);

const { selectAll, selectEntities } = ewokAdapter.getSelectors();

export const getEwoksLoaded = createSelector(
    getEwokState,
    (state: EwokState) => state.loaded
);

export const getEwokError = createSelector(
    getEwokState,
    (state: EwokState) => state.error
);

export const getAllEwoks = createSelector(
    getEwokState,
    (state: EwokState) => selectAll(state)
);

export const getEwokEntities = createSelector(
    getEwokState,
    (state: EwokState) => selectEntities(state)
);

export const getSelectedEwokId = createSelector(
    getEwokState,
    (state: EwokState) => state.selectedId
);

export const getSelectedEwok = createSelector(
    getEwokEntities,
    getSelectedEwokId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyEwok
);