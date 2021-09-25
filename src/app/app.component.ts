import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'test-mg';

  constructor(public router: Router) {

  }

  public logoClick(e: any) {
    this.router.navigateByUrl('').then();
  }
}
