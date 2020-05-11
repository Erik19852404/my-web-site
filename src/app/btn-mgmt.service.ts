import { Injectable } from '@angular/core';

@Injectable()
export class BtnMgmtService {
  selectedBtn = '';

  constructor() { }  

  activateBtn(btnName)
  {
    this.selectedBtn = btnName;
  }

  getActiveBtn(){
    return this.selectedBtn;
  }
}