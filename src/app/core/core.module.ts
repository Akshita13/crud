import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreService } from './core.service';
import { DataModule } from '../data/data.module';

@NgModule({
  imports: [
    CommonModule,DataModule
  ],
  declarations: [],
  providers:[CoreService],
  exports:[DataModule]
})
export class CoreModule { }
