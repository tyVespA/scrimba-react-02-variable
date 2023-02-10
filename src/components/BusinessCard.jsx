import React from "react";
import s from "./styles/BusinessCard.module.css";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

function BusinessCard({ theme, name, role, website, linkedin }) {
  let bgColor;
  let color;
  let roleColor;
  let bgColorFooter;
  theme === "dark"
    ? ((bgColor = "#1A1B21"),
      (color = "white"),
      (bgColorFooter = "#161619"),
      (roleColor = "#F3BF99"))
    : ((bgColor = "#F5F5F5"),
      (color = "black"),
      (bgColorFooter = "#D5D4D8"),
      (roleColor = "#F47D27"));
  return (
    <div
      className={s.businessCard}
      style={{ backgroundColor: bgColor, color: color }}
    >
      <CardHeader
        name={name}
        role={role}
        website={website}
        roleColor={roleColor}
      />
      <CardBody />
      <CardFooter bgColorFooter={bgColorFooter} />
    </div>
  );
}

export default BusinessCard;
