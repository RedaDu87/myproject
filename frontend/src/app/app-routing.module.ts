import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoranComponent } from './coran/coran.component';
import { HadithComponent } from './hadith/hadith.component';
import { HomeComponent } from './home/home.component';
import { CoursArabeComponent } from './cours-arabe/cours-arabe.component';
import { InvocationsComponent } from './invocations/invocations.component';
import { AttributesComponent } from './attributes/attributes.component';
import { ProphetsComponent } from './prophets/prophets.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'coran', component: CoranComponent },
  { path: 'hadith', component: HadithComponent },
  { path: 'coursarabe', component: CoursArabeComponent },
  { path: 'invocations', component: InvocationsComponent },
  { path: 'attributes', component: AttributesComponent },
  { path: 'prophets', component: ProphetsComponent },
  { path: 'histoire', component: TimelineComponent }
  
  
  
];

@NgModule({
  declarations: [],
  imports: [
 
    RouterModule.forRoot(routes, {
      useHash: false
    })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
