import {
  Transaction,
  TransactionCategory,
  TransactionType,
} from "./types/types";

import BusinessAndFinanceIcon from "./assets/BusinessAndFinanceIcon.svg";
import NextIcon from "./assets/next.svg";
import MiscellaenousIcon from "./assets/megaphone.svg";
import FlightIcon from "./assets/flights.svg";
import CardCategoryIcon from "./assets/file-storage.svg";
import { useEffect, useState } from "react";
import { getRecentTransactions } from "./api/api";

const TransactionCategoryToIconMap = {
  [TransactionCategory.CARD]: CardCategoryIcon,
  [TransactionCategory.FLIGHTS]: FlightIcon,
  [TransactionCategory.MISCELLANEOUS]: MiscellaenousIcon,
};

const TransactionCategoryToColorMap = {
  [TransactionCategory.CARD]: "bg-[#009DFF1A]",
  [TransactionCategory.FLIGHTS]: "bg-[#00D6B51A]",
  [TransactionCategory.MISCELLANEOUS]: "bg-[#F251951A]",
};

export const RecentTransactions = () => {
  const [transactionsData, setTransactionsData] = useState<
    Array<Transaction> | []
  >([]);
  useEffect(() => {
    const fetchData = async () => {
      const data: Array<Transaction> = await getRecentTransactions();
      setTransactionsData(data);
    };
    fetchData();
  }, []);
  return (
    <div className="p-6 rounded-br-[10px] rounded-bl-[10px] border-b-2 bg-white">
      {transactionsData.map((transaction) => {
        return (
          <div
            key={transaction.id}
            className="flex flex-col border-b-2 border-gray-100 py-4 last:border-b-0"
          >
            <div className="flex justify-between items-center">
              <div className="flex w-full gap-[20px]">
                <div
                  className={`rounded-full w-[50px] h-[50px] flex justify-center items-center ${
                    TransactionCategoryToColorMap[transaction.category]
                  }`}
                >
                  <img
                    src={TransactionCategoryToIconMap[transaction.category]}
                    alt={transaction.category.toString()}
                    height={30}
                    width={30}
                    className="p-1"
                  />
                </div>
                <div className="flex-grow-[2] text-start">
                  <div>{transaction.name}</div>
                  <div className="text-xs font-thin text-[rgb(170,170,170)]">
                    {transaction.date.toDateString().slice(4)}
                  </div>
                  <div className="mt-1 text-[#325BAF] text-xs flex items-center">
                    <div className="h-[25px] w-[30px] rounded-r-[15px] rounded-l-[15px] bg-[#325BAF] flex justify-center items-center mr-3">
                      <img
                        src={BusinessAndFinanceIcon}
                        alt={"business and finance"}
                        height={15}
                        width={15}
                      />
                    </div>
                    <span>Charged to debit card</span>
                  </div>
                </div>
                <div
                  className={`font-bold ${
                    transaction.type === TransactionType.DEBIT
                      ? ""
                      : "text-[#01D167]"
                  }`}
                >
                  <span className="mr-2">
                    <span className="mr-1">
                      {transaction.type === TransactionType.DEBIT ? "-" : "+"}
                    </span>
                    <span>{"S$"}</span>
                  </span>
                  <span>{transaction.amount}</span>
                </div>
                <div className="flex items-start">
                  <img src={NextIcon} alt="next" height={16} width={10} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
