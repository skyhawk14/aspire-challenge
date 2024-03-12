import FreezeCardIcon from "./assets/Freeze card.svg";
import SetSpendLimitIcon from "./assets/Set spend limit.svg";
import GpayIcon from "./assets/GPay.svg";
import ReplaceCardIcon from "./assets/Replace card.svg";
import CancelCardIcon from "./assets/Deactivate card.svg";

import { DebitCardActionButton } from "./debit-card-action-button";

interface DebitCardActionProps {
  freezeCardHandler: () => void;
}

export const DebitCardAction = ({
  freezeCardHandler,
}: DebitCardActionProps) => {
  return (
    <div className="p-6 bg-[#EDF3FF] w-[100%] mt-6 text-white lg:rounded-[20px] rounded-tl-[25px] rounded-tr-[25px] flex justify-center">
      <DebitCardActionButton
        src={FreezeCardIcon}
        label="Freeze card"
        onClick={freezeCardHandler}
      />
      <DebitCardActionButton
        src={SetSpendLimitIcon}
        label="Set spend limit"
        onClick={() => {}}
      />
      <DebitCardActionButton
        src={GpayIcon}
        label="Add to Gpay"
        onClick={() => {}}
      />
      <DebitCardActionButton
        src={ReplaceCardIcon}
        label="Replace card"
        onClick={() => {}}
      />
      <DebitCardActionButton
        src={CancelCardIcon}
        label="Cancel card"
        onClick={() => {}}
      />
    </div>
  );
};
