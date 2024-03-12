import logo from "./assets/Logo.svg";
import { SideMenu } from "./side-menu";

import "./sidebar.css";

export const Sidebar = () => {
  return (
    <div
      className="w-[var(--sidebar-width)] bg-[var(--bg-sidebar)] hidden lg:flex flex-col pl-[48px] pt-[48px] text-sm"
      data-testid="side-bar"
    >
      <div>
        <img src={logo} alt="aspire-logo" />
      </div>
      <p className="py-4 text-left title">
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
      </p>
      <SideMenu />
    </div>
  );
};
