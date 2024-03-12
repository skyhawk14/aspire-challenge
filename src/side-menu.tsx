import HomeIcon from "./assets/Home.svg";
import CardsIcon from "./assets/Card.svg";
import PaymentsIcon from "./assets/Payments.svg";
import CreditIcon from "./assets/Credit.svg";
import AccountIcon from "./assets/Account.svg";
import { MenuItem } from "./components/menu-item";

interface MenuItemProps {
  title: string;
  Icon: string;
  selected: boolean;
}

export const MENU_ITEMS: Array<MenuItemProps> = [
  { title: "Home", Icon: HomeIcon, selected: false },
  { title: "Cards", Icon: CardsIcon, selected: true },
  { title: "Payment", Icon: PaymentsIcon, selected: false },
  { title: "Credit", Icon: CreditIcon, selected: false },
  { title: "Settings", Icon: AccountIcon, selected: false },
];

const SideMenu = () => {
  return (
    <>
      {MENU_ITEMS.map((item: MenuItemProps, index: number) => (
        <MenuItem
          key={index}
          title={item.title}
          Icon={item.Icon}
          selected={item.selected}
        />
      ))}
    </>
  );
};

export { SideMenu };
