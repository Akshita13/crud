import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data.component';

@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [DataComponent],
  exports:[DataComponent]
})
export class DataModule { }
