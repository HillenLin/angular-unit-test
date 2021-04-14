import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Test1FundamentalsComponent } from './test1-fundamentals/test1-fundamentals.component';
import { Test2SetupTeardownComponent } from './test2-setup-teardown/test2-setup-teardown.component';
import { VoterComponent } from './voter/voter.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1FundamentalsComponent,
    Test2SetupTeardownComponent,
    VoterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
