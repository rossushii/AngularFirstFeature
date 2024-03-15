import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommandBarComponent } from './components/command-bar/command-bar.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CommandBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    CommandBarComponent
  ]
})
export class SharedModule { }
