import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PersonnesComponent } from './components/personnes/personnes.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'personnes', component: PersonnesComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

