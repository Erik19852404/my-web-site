import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  //..
} from '@angular/animations';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ 
          opacity: 0,
          transform: 'translateX(5%)' }),
        animate('200ms ease-in-out')
      ]),
      transition(':leave', [
        animate(200, style({ transform: 'translateX(-5%)' }))
      ])
    ])
  ]
})
export class MySkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}