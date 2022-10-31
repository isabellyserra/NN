import React from "react";
import { Flex, Nav } from "./styles";
import logo from "../../svgs/logo.svg";
import ornamento from "../../svgs/ornamento.svg";
import ornamentoConta from "../../svgs/ornamentoConta.svg";
import NavItem from "../NavItem/NavItem";

const NavBar: React.FC = () => {
  return (
    <Nav>
      <Flex>
        <div>
          <img src={logo} />
        </div>
        <NavItem text="Dados" />

        <NavItem text="Aplicativo" />

        <NavItem text="Sobre a N&N" />

        <NavItem text="Histórico" />
      </Flex>
      <Flex>
        <NavItem text="Jogar" type="conta" />
        <NavItem text="Registrar" type="conta" />
      </Flex>
    </Nav>
  );
};

export default NavBar;
