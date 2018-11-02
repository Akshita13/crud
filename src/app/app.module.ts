import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakebackendService } from './fakebackend.service';
import { HttpClientModule } from '@angular/common/http';
import { DataModule } from './data/data.module';
import { CoreService } from './core/core.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpClientInMemoryWebApiModule.forRoot(FakebackendService),
    HttpClientModule,DataModule
  ],
  providers: [FakebackendService,CoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
