import { createAction, props } from '@ngrx/store'
import { CreditCardDto } from 'src/app/models/credit-card.dto';

export const loadPayment = createAction('[Payment Page] Load Payment')

export const loadPaymentSuccess = createAction('[Payment/API] Load Payment Success', props<{ payment: CreditCardDto[] }>())

export const loadPaymentFailure = createAction('[Payment/API] Load Payment Failure', props<{ error: any }>())



export const addPayment = createAction('[Add Payment Page] Add Payment', props<{ payment: CreditCardDto }>());
export const addPaymentSuccess = createAction('[Add Payment Page] Add Payment Success', props<{ payment: CreditCardDto }>());
export const addPaymentFailure = createAction('[Add Payment Page] Add Payment Failure', props<{ error: any }>());
