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
  flipOne = 'inactive';
  flipTwo = 'inactive';
  flipThree = 'inactive';
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // tslint:disable-next-line:typedef
  public toggleFlipOne() {
    if (this.flipOne === 'inactive') {
      this.flipOne = 'active';
      this.flipTwo = 'inactive';
      this.flipThree = 'inactive';
      this.flip = 'inactive';
    } else {
      this.flipOne = 'inactive';
    }
  }
   // tslint:disable-next-line:typedef
   public toggleFlipTwo() {
    if (this.flipTwo === 'inactive') {
      this.flipTwo = 'active';
      this.flipOne = 'inactive';
      this.flipThree = 'inactive';
      this.flip = 'inactive';
    } else {
      this.flipTwo = 'inactive';
    }
  }
   // tslint:disable-next-line:typedef
   public toggleFlipThree() {
    if (this.flipThree === 'inactive') {
      this.flipThree = 'active';
      this.flipOne = 'inactive';
      this.flipTwo = 'inactive';
      this.flip = 'inactive';
    } else {
      this.flipThree = 'inactive';
    }
  }
  // tslint:disable-next-line:typedef
  public toggleFlip() {
    // this.flip = (this.flip === 'inactive') ? 'active' : 'inactive';
    if (this.flip === 'inactive') {
      this.flip = 'active';
      this.flipOne = 'inactive';
      this.flipTwo = 'inactive';
      this.flipThree = 'inactive';
    } else {
      this.flip = 'inactive';
    }
  }

}
