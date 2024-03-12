import Carousel from "./components/carousel/carousel";
import { DebitCard } from "./debit-card";
import { DebitCardAction } from "./debit-card-action";
import DownArrowIcon from "./assets/down-arrow.svg";
import CardDetailsIcon from "./assets/CardDetailsIcon.svg";
import RecentTransactionIcon from "./assets/RecentTransactionIcon.svg";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { RecentTransactions } from "./recent-transactions";
import { DebitCardDetailsType } from "./types/types";

import "./debit-card-details.css";

import { useCallback, useState } from "react";

const ArrowDownIcon = () => {
  return <img src={DownArrowIcon} alt="down-arrow" />;
};

interface DebitCardDetailsProps {
  card: DebitCardDetailsType[] | [];
  freezeCard: (id: number) => void;
}

export const DebitCardDetails = ({
  card,
  freezeCard,
}: DebitCardDetailsProps) => {
  const [currentDebitCardIndex, setCurrentDebitCardIndex] = useState<number>(0);

  const freezeCardHandler = useCallback(() => {
    freezeCard(currentDebitCardIndex);
  }, [currentDebitCardIndex, freezeCard]);

  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:h-[80%] lg:pb-16 debit-card-details sm:w-[100%] h-auto">
      <div>
        <div className="px-4 lg:px-0">
          <Carousel onChange={(v) => setCurrentDebitCardIndex(v)}>
            {card.map((card) => {
              return <DebitCard key={card.id} card={card} />;
            })}
          </Carousel>
        </div>
        <DebitCardAction freezeCardHandler={freezeCardHandler} />
      </div>
      <div className="mt-4 lg:mt-0 px-4 lg:px-0">
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <img className="mr-2" src={CardDetailsIcon} alt="down-arrow" /> Card
            Details
          </AccordionSummary>
          <AccordionDetails>{/* Show No Data */}</AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <img
              className="mr-2"
              src={RecentTransactionIcon}
              alt="down-arrow"
            />{" "}
            Recent Transactions
          </AccordionSummary>
          <AccordionDetails className="bg-[#EDFFF5]">
            <RecentTransactions />
            <div className="h-[70px] flex items-center justify-center text-[#01D167] rounded-br-[10px] rounded-bl-[10px] cursor-pointer">
              <p>View all card transactions</p>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
