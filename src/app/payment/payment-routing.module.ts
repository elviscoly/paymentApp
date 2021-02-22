import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentContainerComponent } from './payment-container/payment-container.component';

const routes: Routes = [
  {path: '', component: PaymentContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
