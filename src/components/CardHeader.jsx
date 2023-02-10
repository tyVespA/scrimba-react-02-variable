import React from "react";
import s from "./styles/CardHeader.module.css";
import Pfp from "../assets/sfondo1.jpg";

function CardHeader({ name, role, website }) {
  return (
    <div className={s.cardHeader}>
      <img src={Pfp} alt="" className={s.pfp} />
      <p className={s.name}>{name}</p>
      <p className={s.role}>{role}</p>
      <p className={s.website}>{website}</p>
      <div className={s.buttons}>
        <button className={s.emailBtn}>Email</button>
        <button className={s.linkedInBtn}>LinkedIn</button>
      </div>
    </div>
  );
}

export default CardHeader;
