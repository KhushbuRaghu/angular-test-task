import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'angular-test-task';
  flip = 'inactive';

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  // tslint:disable-next-line:typedef
  public toggleFlip() {
    this.flip = (this.flip === 'inactive') ? 'active' : 'inactive';
  }
}
