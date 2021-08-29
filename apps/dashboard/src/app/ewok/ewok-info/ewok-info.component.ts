import { Component, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EwokFacade } from "@ewok/core-state";
import { Ewok } from "@ewok/api-interfaces";



@Component({
  selector: 'ewok-ewok-info',
  templateUrl: './ewok-info.component.html',
  styleUrls: ['./ewok-info.component.scss']
})
export class EwokInfoComponent {

  @Input() ewok: Ewok | null;


  constructor(
    private ewokFacade: EwokFacade,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  navigateBack() {
    this.router.navigate(['/ewoks']);
  };

}
