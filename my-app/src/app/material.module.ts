import { NgModule } from '@angular/core';

import { MatTableModule, MatSortModule, MatPaginatorModule } from '@angular/material';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';


@NgModule({
  imports: [
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  exports: [
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ]
})

export class MaterialModule {}
