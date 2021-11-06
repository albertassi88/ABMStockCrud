import React from "react";
import LogoABM from "../../assets/logo.png";
import { Header, Img } from "./style";

export default function HeaderABM() {
  return (
    <Header>
      <Img src={LogoABM} alt="logo da empresa"/>
    </Header>
  );
}