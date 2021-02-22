import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { exhaustMap, map, concatMap, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs'
import * as PaymentActions from './payment.actions'
import { PaymentService } from '../payment.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class PaymentEffects {

  init$ = createEffect(() =>
  this.actions$.pipe(
    ofType(PaymentActions.loadPayment),
    exhaustMap((_) => {
      console.log('all payments')
      return this.paymentService.getAllPayments().pipe(
        map((data) =>
        PaymentActions.loadPaymentSuccess({
            payment: data,
          })
        ),
        catchError((error) =>
          of(
            PaymentActions.loadPaymentFailure({
              error,
            }),
          )
        ),
      )
          }
    ),
  )
);

addPayment$ = createEffect(() =>
this.actions$.pipe(
  ofType(PaymentActions.addPayment),
  concatMap(({ payment }) =>
    this.paymentService.addPayment(payment)
      .pipe(
        map((data) => {
          this.toastr.success('Success!', 'Thanks for patronizing us');
          return PaymentActions.addPaymentSuccess(
            {
              payment: data,
            },
          );
        }),
        catchError((error) =>
          of(
            PaymentActions.addPaymentFailure(
              { error: error.error.message },
            ),
          )
        ),
      )
  ),
)
);


  addPaymentSuccess$ = createEffect(
  () => this.actions$.pipe(ofType(PaymentActions.addPaymentSuccess), tap(() => {
    return this.router.navigate(['/'])
  })),
  { dispatch: false }
);



  constructor(
    private actions$: Actions,
    private paymentService: PaymentService,
    private router: Router,
    private toastr: ToastrService
    ) {}
}
