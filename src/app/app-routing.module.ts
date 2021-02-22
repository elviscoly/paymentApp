import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaymentListComponent } from './payment-list/payment-list.component';

const routes: Routes = [
  {path: '', component: PaymentListComponent},
  {
    path: "payment",
    loadChildren: async () =>
      (await import("./payment/payment.module")).PaymentModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
