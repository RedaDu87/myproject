import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CoranComponent } from './coran/coran.component';
import { HadithComponent } from './hadith/hadith.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursArabeComponent } from './cours-arabe/cours-arabe.component';
import { NavComponent } from './nav/nav.component';
import { InvocationsComponent } from './invocations/invocations.component';
import { AttributesComponent } from './attributes/attributes.component';
import { ProphetsComponent } from './prophets/prophets.component';
import { TimelineComponent } from './timeline/timeline.component';


@NgModule({
  declarations: [
    AppComponent,
    CoranComponent,
    HadithComponent,
    HomeComponent,
    CoursArabeComponent,
    NavComponent,
    InvocationsComponent,
    AttributesComponent,
    ProphetsComponent,
    TimelineComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
