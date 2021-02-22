export interface CreditCardDto {
  id: string
  holderName: string
  cardNumber: string
  expiration: Date
  securityCode: string
  amount: number
}
