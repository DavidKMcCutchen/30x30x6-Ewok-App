import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ewok } from '@ewok/api-interfaces';

@Component({
  selector: 'ewok-ewoks-list',
  templateUrl: './ewoks-list.component.html',
  styleUrls: ['./ewoks-list.component.scss']
})
export class EwoksListComponent {
  @Input() ewoks: Ewok[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() ewokViewed = new EventEmitter();
}
