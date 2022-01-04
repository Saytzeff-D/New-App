import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllusersComponent } from './allusers/allusers.component';
import { FirstComponent } from './first/first.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'first'},
  {path: 'first', component: FirstComponent},
  {path: 'allUsers', component: AllusersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
