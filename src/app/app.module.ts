import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FindJobsComponent } from './find-jobs/find-jobs.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'ngx-moment';
import { ExpandJobComponent } from './expand-job/expand-job.component';

@NgModule({
  declarations: [
    AppComponent,
    FindJobsComponent,
    ExpandJobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MomentModule.forRoot({
      relativeTimeThresholdOptions: {
        'm': 59
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
