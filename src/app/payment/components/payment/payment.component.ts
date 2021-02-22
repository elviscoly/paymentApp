import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { CreditCardDto } from 'src/app/models/credit-card.dto';
import { DateFormControl } from './date-form-control';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  @Output() emitPaymentValue: EventEmitter<CreditCardDto> = new EventEmitter<CreditCardDto>()

  paymentForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),
    expiration: new DateFormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
    ]),
    amount: new FormControl(0, [
      Validators.required
    ]),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit(formValue: CreditCardDto) {
    this.emitPaymentValue.emit(formValue)
  }

  onResetClick() {
    this.paymentForm.reset()
  }

}
