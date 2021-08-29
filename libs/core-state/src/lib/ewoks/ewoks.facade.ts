import { Injectable } from "@angular/core";
import { Ewok } from "@ewok/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { map, filter } from "rxjs/operators";
import * as EwokActions from './ewoks.actions';
import * as EwokSelectors from './ewoks.selectors';
import * as fromEwoks from './ewoks.reducer';


@Injectable({
    providedIn: 'root'
})

export class EwokFacade {
    allEwoks$ = this.store.pipe(
        map((state) => EwokSelectors.getAllEwoks(state)),
    )
    selectedEwoks$ = this.store.pipe(select(EwokSelectors.getSelectedEwok));
    loaded$ = this.store.pipe(select(EwokSelectors.getEwoksLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) =>
        action.type === EwokActions.createEwok({} as any) .type ||
        action.type === EwokActions.updateEwok({} as any) .type ||
        action.type === EwokActions.deleteEwok({} as any) .type 
        ))

        selectEwok(ewokId: string) {
            this.dispatch(EwokActions.selectEwok({ ewokId }));
        };

        loadEwoks() {
            this.dispatch(EwokActions.loadEwoks())
        };

        loadEwok(ewokId: string) {
            this.dispatch(EwokActions.loadEwok({ ewokId }))
        };

        saveEwok(ewok: Ewok) {
            ewok.id ? this.updateEwok(ewok) : this.createEwok(ewok)
        };

        createEwok(ewok: Ewok) {
            this.dispatch(EwokActions.createEwok({ ewok }))
        };

        updateEwok(ewok: Ewok) {
            this.dispatch(EwokActions.updateEwok({ ewok }))
        };

        deleteEwok(ewok: Ewok) {
            this.dispatch(EwokActions.deleteEwok({ ewok }))
        };

        dispatch(action: Action) {
            this.store.dispatch(action)
        };

        constructor(
            private store: Store<fromEwoks.EwokPartialState>,
            private actions$: ActionsSubject
        ) {}
}