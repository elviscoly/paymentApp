import { createFeatureSelector, createSelector } from '@ngrx/store'
import { PAYMENT_FEATURE_KEY, State, PaymentPartialState, paymentAdapter } from './payment.reducer'

// Lookup the 'Payment' feature state managed by NgRx
export const getPaymentState = createFeatureSelector<PaymentPartialState, State>(PAYMENT_FEATURE_KEY)

const { selectAll, selectEntities } = paymentAdapter.getSelectors()

export const getPaymentLoaded = createSelector(getPaymentState, (state: State) => state.loaded)

export const getPaymentError = createSelector(getPaymentState, (state: State) => state.error)

export const getAllPayment = createSelector(getPaymentState, (state: State) => selectAll(state))

export const getPaymentEntities = createSelector(getPaymentState, (state: State) => selectEntities(state))

export const getSelectedId = createSelector(getPaymentState, (state: State) => state.selectedPaymentId)

export const getSelected = createSelector(
  getPaymentEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId],
)
