import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Ewok } from "@ewok/api-interfaces";

@Component({
  selector: 'ewok-ewoks-details',
  templateUrl: './ewoks-details.component.html',
  styleUrls: ['./ewoks-details.component.scss']
})
export class EwokDetailsComponent {
  currentEwok: Ewok;
  originalTitle: string;


  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set ewok(value) {
    if (value) this.originalTitle = value.name;
    this.currentEwok = {...value}
  }

  @Input() form: FormGroup;

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  };

  cancel() {
    this.cancelled.emit();
  }
}

