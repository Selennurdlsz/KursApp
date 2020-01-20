import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DersComponent } from './ders/ders.component';
import { DersAddFormsComponent } from './ders/ders-add-forms/ders-add-forms.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'dersler', component : DersComponent},
  {path:'ders-add', component : DersAddFormsComponent},
  {path: '', redirectTo: 'dersler', pathMatch:'full'},
  {path: 'dersler/kategori/:katID', component:DersComponent},
  {path:'login', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
