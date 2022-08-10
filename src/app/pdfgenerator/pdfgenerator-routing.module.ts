import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdfgeneratorPage } from './pdfgenerator.page';

const routes: Routes = [
  {
    path: '',
    component: PdfgeneratorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdfgeneratorPageRoutingModule {}
