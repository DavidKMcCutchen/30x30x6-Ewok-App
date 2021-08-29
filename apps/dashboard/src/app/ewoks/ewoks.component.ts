import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ewok, emptyEwok } from "@ewok/api-interfaces";
import { EwokFacade } from '@ewok/core-state';
import { Observable } from 'rxjs';


@Component({
  selector: 'ewok-ewoks',
  templateUrl: './ewoks.component.html',
  styleUrls: ['./ewoks.component.scss']
})

export class EwoksComponent implements OnInit {
  allEwoks$: Observable<Ewok[]> = this.ewokFacade.allEwoks$;
  selectedEwok$: Observable<Ewok> = this.ewokFacade.selectedEwoks$;

  form: FormGroup;

  constructor(
    private ewokFacade: EwokFacade,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.ewokFacade.mutations$.subscribe((_) => this.resetEwok());
  }

  ngOnInit() {
    this.initForm();
    this.ewokFacade.loadEwoks();
    this.resetEwok()

    const ewokRouteId = this.route.snapshot.params['id'];

    if (ewokRouteId) {
      this.loadEwok((ewokRouteId))
    }
  }

  viewEwok(ewokId: string) {
    this.router.navigate(["ewoks", ewokId])
  }

  loadEwok(ewokId: string) {
    this.ewokFacade.selectEwok(ewokId);
    this.ewokFacade.loadEwok(ewokId);
  }

  selectEwok(ewok: Ewok) {
    this.ewokFacade.selectEwok(ewok.id)
    this.form.patchValue(ewok);
  }

  saveEwok(ewok: Ewok) {
    this.ewokFacade.saveEwok(ewok);
  }

  deleteEwok(ewok: Ewok) {
    this.ewokFacade.deleteEwok(ewok);
  }

  resetEwok() {
    this.form.reset();
    this.selectEwok(emptyEwok)
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      name: [''],
      tribe: [''],
      height: [''],
      furriness: [''],
      warrior: [''],
    })
  }
}