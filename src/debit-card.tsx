import { useState } from "react";

import AspireLogo from "./assets/Aspire Logo-1.svg";
import VisaLogo from "./assets/Visa Logo.svg";
import ShowCardIcon from "./assets/remove_red_eye-24px.svg";

import "./debit-card.css";

import { DebitCardDetailsType } from "./types/types";

interface DebitCardProps {
  card: DebitCardDetailsType;
}

export const DebitCard = ({
  card: { cardNumber, cvvCode, name, validThru, freeze },
}: DebitCardProps) => {
  const [showCardNumber, setShowCardNumber] = useState<boolean>(false);

  return (
    <>
      <div
        className="text-right text-sm mb-2 pr-1 text-[#01D167] flex justify-end"
        data-testid="debit-card"
      >
        <img
          src={ShowCardIcon}
          alt="Show card number"
          height={15}
          width={15}
          className="mr-2"
        />
        <button
          className="cursor-pointer"
          data-testid="show-card-number"
          onClick={() => setShowCardNumber(!showCardNumber)}
        >
          {showCardNumber ? "Hide card number" : "Show card number"}
        </button>
      </div>
      <div
        className={`p-6 bg-[#01D167] w-[100%] text-white rounded-[20px] ${
          freeze ? "opacity-80" : ""
        }`}
      >
        <div className="flex justify-end mb-3">
          <img src={AspireLogo} alt="Aspire Logo" />
        </div>
        <div className="flex flex-col text-left">
          <p className="font-bold text-xl tracking-widest">{name}</p>
          <p className="flex mt-4">
            {cardNumber.split("").map((num, index) => {
              if (index < 12) {
                return showCardNumber ? (
                  <span
                    className="card-number flex items-center mr-1"
                    key={index}
                  >
                    {num}
                  </span>
                ) : (
                  <span className="card-number text-center" key={index}>
                    <span className="w-[8px] h-[8px] rounded-full bg-white inline-block mr-2" />
                  </span>
                );
              }
              return (
                <span
                  className="card-number flex items-center mr-1"
                  key={index}
                >
                  {num}
                </span>
              );
            })}
          </p>
          <div className="flex mt-2">
            <p className="flex mr-8">
              <span className="mr-2">Thru:</span>
              <span>{validThru}</span>
            </p>
            <p className="flex items-center">
              <span className="mr-2">CVV:</span>
              <span className="text-xl flex content-end">***</span>
            </p>
          </div>
        </div>
        <div className="flex justify-end mb-3">
          <img src={VisaLogo} alt="Visa Logo" />
        </div>
      </div>
    </>
  );
};
