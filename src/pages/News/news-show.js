import React from "react";
import { useAuthenticated } from "react-admin";

const ContatoShow = ({ record }) => {
  useAuthenticated();
  return (
    <p style={{ fontSize: "16px", lineHeight: "24px" }}>{record.mensagem}</p>
  );
};

export default ContatoShow;
