import React from "react";
import s from "./styles/BusinessCard.module.css";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

function BusinessCard({ bgColor, color, name, role, website }) {
  // instead of bgColor and color as variables -> make theme variable and if-else the colors based on it
  return (
    <div
      className={s.businessCard}
      style={{ backgroundColor: bgColor, color: color }}
    >
      <CardHeader name={name} role={role} website={website} />

      <CardBody />
      <CardFooter />
    </div>
  );
}

export default BusinessCard;
