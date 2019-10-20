import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContinentsComponent } from './continents/continents.component';
import { ContinentDetailComponent } from './continent-detail/continent-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ContinentsComponent,
    ContinentDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'continents',
        pathMatch: 'full'
      },
      {
        path: 'continents',
        component: ContinentsComponent
      },
      {
        path: 'continent/:id',
        component: ContinentDetailComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
