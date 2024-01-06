import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PakistanComponent } from './pakistan/pakistan.component';
import { UnitedkingdomComponent } from './unitedkingdom/unitedkingdom.component';

const routes: Routes = [
  {
    path: 'pakistan',
    component: PakistanComponent
  },
  {
    path: 'unitedkingdom',
    component: UnitedkingdomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
