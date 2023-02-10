import React from "react";
import s from "./styles/BusinessCard.module.css";
import CardHeader from "./CardHeader";

function BusinessCard({ bgColor, color, name, role, website }) {
  return (
    <div
      className={s.businessCard}
      style={{ backgroundColor: bgColor, color: color }}
    >
      <CardHeader name={name} role={role} website={website} />
    </div>
  );
}

export default BusinessCard;
