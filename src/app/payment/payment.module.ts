import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { HttpClientModule } from '@angular/common/http';
import { PaymentRoutingModule } from './payment-routing.module';
import { StoreModule } from '@ngrx/store';
import { PaymentStoreReducer } from './+state';
import { PaymentContainerComponent } from './payment-container/payment-container.component';
import { PaymentComponent } from './components/payment/payment.component';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms'
import { CardComponent } from './components/card/card.component'
import { PaymentFacade } from './+state/payment.facade';
import { EffectsModule } from '@ngrx/effects';
import { PaymentEffects } from './+state/payment.effects';
import { PaymentService } from './payment.service';
@NgModule({
  declarations: [PaymentContainerComponent, PaymentComponent, InputComponent, CardComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature(PaymentStoreReducer.PAYMENT_FEATURE_KEY, PaymentStoreReducer.reducer),
    EffectsModule.forFeature([PaymentEffects]),
  ],
  providers: [PaymentFacade, PaymentService ]
})
export class PaymentModule { }
