import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AmexioWidgetModule } from 'amexio-ng-extensions';
import { APP_ROUTE } from './router';

import { AppComponent } from './app.component';
import { CommonDataService } from './commonData.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AmexioWidgetModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTE, { useHash: true })
  ],
  providers: [CommonDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
