import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonPipesModule } from '@tritanbuild/common-pipes';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonPipesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
