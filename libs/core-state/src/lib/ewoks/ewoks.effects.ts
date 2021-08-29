import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Ewok } from "@ewok/api-interfaces";
import { EwoksService } from "@ewok/core-data";
import * as EwokActions from './ewoks.actions';
import { fetch, pessimisticUpdate } from "@nrwl/angular";
import { map } from "rxjs/operators";

@Injectable()
export class EwokEffects{
    loadEwok$ = createEffect(() =>
        this.actions$.pipe(
            ofType(EwokActions.loadEwok),
            fetch({
                run: (action) =>
                    this.ewoksService
                        .find(action.ewokId)
                        .pipe(map((ewok: Ewok) => EwokActions.loadEwokSuccess({ ewok }))),
                    onError: (action, error) => EwokActions.loadEwokFailed({ error })
            })
        ));
    loadEwoks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(EwokActions.loadEwoks),
            fetch({
                run: () =>
                    this.ewoksService
                    .all()
                    .pipe(
                        map((ewoks: Ewok[]) => EwokActions.loadEwoksSuccess({ ewoks }))
                    ),
                onError: (action, error) => EwokActions.loadEwoksFailed({ error })    
            })
        ));
        createEwok$ = createEffect(() =>
        this.actions$.pipe(
            ofType(EwokActions.createEwok),
            pessimisticUpdate({
                run: (action) =>
                    this.ewoksService
                        .create(action.ewok)
                        .pipe(map((ewok: Ewok) => EwokActions.createEwokSuccess({ ewok }))),
                    onError: (action, error) => EwokActions.createEwokFailed({ error })    
            })
    ));

    updateEwok$ = createEffect(() =>
        this.actions$.pipe(
            ofType(EwokActions.updateEwok),
            pessimisticUpdate({
                run: (action) =>
                    this.ewoksService
                        .update(action.ewok)
                        .pipe(map((ewok: Ewok) => EwokActions.updateEwokSuccess({ ewok}))),
                    onError: (action, error) => EwokActions.updateEwokFailed({ error })    
            })
    ));

    deleteEwok$ = createEffect(() =>
        this.actions$.pipe(
            ofType(EwokActions.deleteEwok),
            pessimisticUpdate({
                run: (action) =>
                    this.ewoksService
                        .delete(action.ewok)
                        .pipe(
                            map(() => EwokActions.deleteEwokSuccess({ ewok: action.ewok }))
                        ),
                    onError: (action, error) => EwokActions.deleteEwokFailed({ error })    
            })
        ));    


    constructor(
        private actions$: Actions,
        private ewoksService: EwoksService
    ) {}    
}