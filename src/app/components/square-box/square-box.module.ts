import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SquareBoxComponent } from './square-box.component';

@NgModule({
  declarations: [SquareBoxComponent],
  imports: [CommonModule, FormsModule],
  exports: [SquareBoxComponent],
})
export class SquareBoxModule {}
