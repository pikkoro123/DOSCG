import { NgModule } from '@angular/core';
import {
  // MatInputModule,
  // MatCardModule,
  // MatButtonModule,
  // MatToolbarModule,
  // MatExpansionModule,
  MatProgressSpinnerModule,
  // MatPaginatorModule,
  // MatDialogModule
} from '@angular/material/progress-spinner';

@NgModule({
  // No need because it can be done auto by Angular!
  /*imports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDialogModule
  ],*/
  exports: [
    // MatInputModule,
    // MatCardModule,
    // MatButtonModule,
    // MatToolbarModule,
    // MatExpansionModule,
    MatProgressSpinnerModule,
    // MatPaginatorModule,
    // MatDialogModule
  ]
})
export class AngularMaterialModule {}
