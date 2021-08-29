import { Ewok } from "@ewok/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as EwokActions from './ewoks.actions';

export const EWOK_FEATURE_KEY = 'ewoks';

export interface EwokState extends EntityState<Ewok> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface EwokPartialState {
    readonly [EWOK_FEATURE_KEY]: EwokState
};

export const ewokAdapter: EntityAdapter<Ewok> = createEntityAdapter<Ewok>();

export const initialEwokState: EwokState = ewokAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailed = (state, { error }): EwokState => ({ ...state, error});

const onDispatch = (state, action): EwokState => ({
    ...state,
    loaded: false,
    error: null
});

const _ewokReducer = createReducer(
    initialEwokState,
    on(
        EwokActions.loadEwokFailed,
        EwokActions.loadEwoksFailed,
        EwokActions.createEwokFailed,
        EwokActions.updateEwokFailed,
        EwokActions.deleteEwokFailed,
        onFailed
    ),
    on(
        EwokActions.loadEwok,
        EwokActions.loadEwoks,
        EwokActions.createEwok,
        EwokActions.updateEwok,
        EwokActions.deleteEwok,
        onDispatch
    ),
    on(
        EwokActions.loadEwokSuccess, (state, { ewok }) =>
        ewokAdapter.upsertOne(ewok, {...state, loaded: true})
    ),
    on(
        EwokActions.selectEwok, (state, { ewokId }) => ({
            ...state,
            selectedId: ewokId
        })
    ),
    on(
        EwokActions.loadEwoksSuccess, (state, { ewoks }) =>
        ewokAdapter.setAll(ewoks, {...state, loaded: true})
    ),
    on(
        EwokActions.deleteEwokSuccess, (state, { ewok }) =>
        ewokAdapter.removeOne(ewok.id, {...state, loaded: true})
    ),
    on(
        EwokActions.updateEwokSuccess, (state, { ewok }) =>
        ewokAdapter.updateOne(
            {id: ewok.id, changes: ewok},
            {...state, loaded: true}
        )
    ),
    on(
        EwokActions.createEwokSuccess, (state, {ewok }) =>
        ewokAdapter.addOne(ewok, {...state, loaded: true})
    ),
)

export function ewokReducer(
    state: EwokState | undefined,
    action: Action
) {
    return _ewokReducer(state, action)
}