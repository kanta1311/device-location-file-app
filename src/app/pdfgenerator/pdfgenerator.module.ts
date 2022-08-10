import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PdfgeneratorPageRoutingModule } from './pdfgenerator-routing.module';

import { PdfgeneratorPage } from './pdfgenerator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfgeneratorPageRoutingModule
  ],
  declarations: [PdfgeneratorPage],
  exports:[PdfgeneratorPage]
})
export class PdfgeneratorPageModule {}
