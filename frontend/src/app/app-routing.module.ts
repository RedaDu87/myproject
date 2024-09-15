import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoranComponent } from './coran/coran.component';
import { HadithComponent } from './hadith/hadith.component';
import { HomeComponent } from './home/home.component';
import { CoursArabeComponent } from './cours-arabe/cours-arabe.component';

const routes: Routes = [
  
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'coran', component: CoranComponent },
  { path: 'hadith', component: HadithComponent },
  { path: 'coursarabe', component: CoursArabeComponent }

];

@NgModule({
  declarations: [],
  imports: [
 
    RouterModule.forRoot(routes, {
      enableTracing: false,
      anchorScrolling: 'enabled'
    })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
