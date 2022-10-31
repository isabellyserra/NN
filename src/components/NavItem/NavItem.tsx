import React from "react";
import { Item } from "./styles";
import ornamento from "../../svgs/ornamento.svg";
import ornamentoConta from "../../svgs/ornamentoConta.svg";

type NavItemProps = {
  text: string;
  type?: string;
};

const NavItem: React.FC<NavItemProps> = ({ text, type }) => {
  return (
    <Item>
      <img src={type == "conta" ? ornamentoConta : ornamento} />
      {text}
      <img
        className={type == "conta" ? "rotate-180" : "margin"}
        src={type == "conta" ? ornamentoConta : ornamento}
      />
    </Item>
  );
};

export default NavItem;
