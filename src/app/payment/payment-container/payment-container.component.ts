import { Component, OnInit } from '@angular/core';
import { CreditCardDto } from 'src/app/models/credit-card.dto';
import { PaymentFacade } from '../+state/payment.facade';

@Component({
  selector: 'app-payment-container',
  templateUrl: './payment-container.component.html',
  styleUrls: ['./payment-container.component.scss']
})
export class PaymentContainerComponent implements OnInit {

  constructor(private paymentFacade: PaymentFacade) { }

  ngOnInit(): void {
  }

  onSubmitPayment(value: CreditCardDto) {
    this.paymentFacade.payment(value)
  }

}
