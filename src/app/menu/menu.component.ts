import { Component, OnInit } from '@angular/core';
import { BtnMgmtService } from '../btn-mgmt.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  //..
} from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('btnTrigger', [
      state('activated', style({
        color:  'white',
        opacity: 0.5,
      })),
      state('deactivated', style({
        opacity: 1,
      })),
      transition('activated => deactivated', [
        animate('0.5s 100ms ease-in-out')
      ]),    
      transition('deactivated => activated', [
        animate('0.3s ease-out'),
      ]),    
    ]),
  ]
})
export class MenuComponent implements OnInit {

  constructor(
    private btnMgmt: BtnMgmtService,
  ) {
   }

  ngOnInit() {
  }

  activateBtn(btnName){
    this.btnMgmt.activateBtn(btnName);
  }

  getActiveBtn(){
    return this.btnMgmt.getActiveBtn();
  }
}