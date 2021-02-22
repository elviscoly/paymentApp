import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCardDto } from '../models/credit-card.dto';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  url = environment.apiUrl

  constructor(private http: HttpClient) { }

  getAllPayments(): Observable<CreditCardDto[]> {
    return this.http.get<CreditCardDto[]>(`${this.url}`);
  }

  addPayment(payment: CreditCardDto) {
    return this.http.post<any>(`${this.url}`, payment)
  }
}
