import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EwokFacade } from '@ewok/core-state';

@Component({
  selector: 'ewok-ewok',
  templateUrl: './ewok.component.html',
  styleUrls: ['./ewok.component.scss']
})
export class EwokComponent implements OnInit {

  currentEwok$ = this.ewokFacade.selectedEwoks$


  constructor(
    private ewokFacade: EwokFacade,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const ewokId = this.route.snapshot.params.id;
    this.loadEwok(ewokId);
  }

  loadEwok(ewokId: string) {
    this.ewokFacade.selectEwok(ewokId);
    this.ewokFacade.loadEwok(ewokId);
  }

  navigateBack() {
    this.router.navigate(['/ewoks']);
  };

}
