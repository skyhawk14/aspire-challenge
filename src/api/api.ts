import { DebitCardDetailsType, Transaction } from "../types/types";
import { DebitCardData, transactionsDetails } from "./constants";

export const getRecentTransactions = (): Promise<Array<Transaction>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(transactionsDetails);
    }, 300);
  });
};

export const getDebitCards = (): Promise<Array<DebitCardDetailsType>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = window.localStorage.getItem("debitCardData");
      if (data) {
        resolve(JSON.parse(data));
      } else {
        window.localStorage.setItem(
          "debitCardData",
          JSON.stringify(DebitCardData)
        );
        resolve(DebitCardData);
      }
    }, 300);
  });
};

export const freezeCard = (id: string): Promise<boolean> => {
  debugger;
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = window.localStorage.getItem("debitCardData");
      if (data) {
        const updatedDebitCardData = JSON.parse(data).map(
          (debitCard: DebitCardDetailsType) => {
            if (debitCard.id === id) {
              debitCard.freeze = !debitCard.freeze;
            }
            return debitCard;
          }
        );
        window.localStorage.setItem(
          "debitCardData",
          JSON.stringify(updatedDebitCardData)
        );
        resolve(true);
      } else {
        resolve(false);
      }
    }, 300);
  });
};

export const createCard = (cardName: string): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = window.localStorage.getItem("debitCardData");
      if (data) {
        const updatedDebitCardData = JSON.parse(data);
        updatedDebitCardData.push({
          id: `${updatedDebitCardData.length + 1}`,
          name: cardName,
          cardNumber: "1234567890123456",
          validThru: "12/29",
          freeze: false,
        });
        window.localStorage.setItem(
          "debitCardData",
          JSON.stringify(updatedDebitCardData)
        );
        resolve(true);
      } else {
        resolve(false);
      }
    }, 300);
  });
};
