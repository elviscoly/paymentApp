import { createReducer, on, Action } from '@ngrx/store'
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity'

import * as PaymentActions from './payment.actions'
import { CreditCardDto } from 'src/app/models/credit-card.dto'

export const PAYMENT_FEATURE_KEY = 'payment'

export interface State extends EntityState<CreditCardDto> {
  selectedPaymentId?: string | number // which Payment record has been selected
  loaded: boolean // has the Payment list been loaded
  error?: string | null // last known error (if any)
}

export interface PaymentPartialState {
  readonly [PAYMENT_FEATURE_KEY]: State
}

export const paymentAdapter: EntityAdapter<CreditCardDto> = createEntityAdapter<CreditCardDto>({
  selectId: (payment) => payment.id,
})

export const initialState: State = paymentAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  error: null,
  selectedPaymentId: 0,
})

const paymentReducer = createReducer(
  initialState,
  on(PaymentActions.loadPayment, (state) => ({ ...state, loaded: false, error: null })),
  on(PaymentActions.loadPaymentSuccess, (state, { payment }) => paymentAdapter.setAll(payment, { ...state, loaded: true })),
  on(PaymentActions.loadPaymentFailure, (state, { error }) => ({ ...state, error })),

  on(PaymentActions.addPayment, (state) => ({ ...state, loaded: false, error: null })),
  on(PaymentActions.addPaymentSuccess, (state, { payment }) => paymentAdapter.setOne(payment, { ...state, loaded: true })),
  on(PaymentActions.loadPaymentFailure, (state, { error }) => ({ ...state, error })),
)

export function reducer(state: State | undefined, action: Action) {
  return paymentReducer(state, action)
}
