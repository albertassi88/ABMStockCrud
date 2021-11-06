import React from "react";
import * as api from "../../services/ApiCrudCrud";
import HeaderABM from "../../components/HeaderABM/index";
import InputABM from "../../components/InputABM";
import { Div} from "./style";

export default function CreateItems() {
  return (
    <Div>
      <HeaderABM />           
      <InputABM urlItems={"create-items"} apiService={api.PostApiCrud}/>
    </Div>
  );
}