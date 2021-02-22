import { Injectable } from '@angular/core'

import { select, Store, Action } from '@ngrx/store'
import { CreditCardDto } from 'src/app/models/credit-card.dto'

import * as PaymentActions from './payment.actions'
import * as PaymentSelectors from './payment.selectors'
import { PaymentStoreReducer }  from './index'
import { take } from 'rxjs/operators'
@Injectable()
export class PaymentFacade {

  loaded$ = this.store.pipe(select(PaymentSelectors.getPaymentLoaded))
  selectedPayment$ = this.store.pipe(select(PaymentSelectors.getSelected))

  constructor(
    private store: Store<PaymentStoreReducer.PaymentPartialState>,
    ) {}


  get getAllPayment() {
    this.store.dispatch(PaymentActions.loadPayment())
    return this.store.pipe(select(PaymentSelectors.getAllPayment)).pipe(
      take(2)
    )
  }

  payment(payment: CreditCardDto) {
    this.store.dispatch(PaymentActions.addPayment({payment}))
  }
}
