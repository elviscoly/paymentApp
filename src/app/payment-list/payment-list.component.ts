import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCardDto } from '../models/credit-card.dto';
import { PaymentFacade } from '../payment/+state/payment.facade';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss']
})
export class PaymentListComponent implements OnInit {

  paymentList$?: Observable<CreditCardDto[]>;
  constructor(private paymentFacade: PaymentFacade) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.paymentList$ = this.paymentFacade.getAllPayment;

  }
}
