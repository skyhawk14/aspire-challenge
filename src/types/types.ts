export enum TransactionType {
  DEBIT,
  CREDIT,
}
export enum CurrencyCode {
  "SGD",
}

export enum TransactionCategory {
  CARD,
  FLIGHTS,
  MISCELLANEOUS,
}

export type Transaction = {
  id: number;
  name: string;
  type: TransactionType;
  amount: number;
  currency: CurrencyCode;
  category: TransactionCategory;
  date: Date;
};

export type DebitCardDetailsType = {
  id: string;
  name: string;
  cardNumber: string;
  cvvCode?: string;
  validThru: string;
  freeze: boolean;
};
