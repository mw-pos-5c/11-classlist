import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {StudentOverviewComponent} from './components/student-overview/student-overview.component';
import {HttpClientModule} from "@angular/common/http";
import { ClazzSelectorComponent } from './components/clazz-selector/clazz-selector.component';
import { LogComponent } from './components/log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentOverviewComponent,
    ClazzSelectorComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
