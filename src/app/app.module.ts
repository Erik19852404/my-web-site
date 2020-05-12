import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MenuComponent } from './menu/menu.component';
import { InformationComponent } from './information/information.component';
import { FooterComponent } from './footer/footer.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { DetailesComponent } from './detailes/detailes.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BtnMgmtService } from './btn-mgmt.service';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { WorkExpirienceComponent } from './work-expirience/work-expirience.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    BrowserAnimationsModule,
  RouterModule.forRoot(
    [
      { path:"", component: InformationComponent },
      { path:"detailes", component: DetailesComponent },
      { path:"contacts", component: ContactsComponent },
      { path:"skills", component: MySkillsComponent },
      { path:"expirience", component: WorkExpirienceComponent },
    ]
  ), ],
  declarations: [ AppComponent, TopBarComponent, MenuComponent, InformationComponent, FooterComponent, OurTeamComponent, DetailesComponent, ContactsComponent, MySkillsComponent, WorkExpirienceComponent],
  bootstrap:    [ AppComponent ],
  providers: [BtnMgmtService],
})
export class AppModule { }
