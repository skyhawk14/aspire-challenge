import {
  CurrencyCode,
  DebitCardDetailsType,
  TransactionCategory,
  TransactionType,
} from "../types/types";

export const transactionsDetails = [
  {
    id: 1,
    name: "Hamleys",
    type: TransactionType.DEBIT,
    amount: 100,
    currency: CurrencyCode.SGD,
    category: TransactionCategory.CARD,
    date: new Date(),
  },
  {
    id: 2,
    name: "Hamleys",
    type: TransactionType.CREDIT,
    amount: 150,
    currency: CurrencyCode.SGD,
    category: TransactionCategory.CARD,
    date: new Date(),
  },
  {
    id: 3,
    name: "Hamleys",
    type: TransactionType.DEBIT,
    amount: 110,
    currency: CurrencyCode.SGD,
    category: TransactionCategory.FLIGHTS,
    date: new Date(),
  },
  {
    id: 4,
    name: "Hamleys",
    type: TransactionType.DEBIT,
    amount: 190,
    currency: CurrencyCode.SGD,
    category: TransactionCategory.MISCELLANEOUS,
    date: new Date(),
  },
  {
    id: 5,
    name: "Hamleys",
    type: TransactionType.DEBIT,
    amount: 50,
    currency: CurrencyCode.SGD,
    category: TransactionCategory.CARD,
    date: new Date(),
  },
];

export const DebitCardData: Array<DebitCardDetailsType> = [
  {
    id: "1",
    name: "Mark Henry",
    cardNumber: "1234567891011121",
    validThru: "12/20",
    freeze: false,
  },
  {
    id: "2",
    name: "Alex Cooper",
    cardNumber: "1234567891011121",
    validThru: "12/22",
    freeze: false,
  },
  {
    id: "3",
    name: "Steph Curry",
    cardNumber: "1234567891021121",
    validThru: "09/26",
    freeze: false,
  },
];
