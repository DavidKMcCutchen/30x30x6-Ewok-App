import { Component } from '@angular/core';


@Component({
  selector: 'ewok-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Ewoks';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'ewoks', icon: 'view_list', title: 'Ewoks'}
  ]
}
