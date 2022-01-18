import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SheetComponent } from './views/sheet/sheet.component';
import { CharInfoComponent } from './views/sheet/char-info/char-info.component';
import { CharacteristicComponent } from './views/sheet/characteristic/characteristic.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SheetComponent,
    CharInfoComponent,
    CharacteristicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
