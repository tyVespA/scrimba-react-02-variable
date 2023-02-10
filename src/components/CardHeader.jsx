import React from "react";
import s from "./styles/CardHeader.module.css";
import Pfp from "../assets/sfondo1.jpg";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function CardHeader({ name, role, website, linkedin, roleColor }) {
  let linkedinBtn = linkedin;
  console.log(linkedinBtn);
  return (
    <div className={s.cardHeader}>
      <img src={Pfp} alt="" className={s.pfp} />
      <p className={s.name}>{name}</p>
      <p className={s.role} style={{ color: roleColor }}>
        {role}
      </p>
      <p className={s.website}>{website}</p>
      <div className={s.btnContainer}>
        <button className={s.emailBtn}>
          <EmailIcon fontSize="small" /> Email
        </button>
        {/* linkedin button only displayed if linkedin variable is passed in app.jsx */}
        {linkedinBtn && (
          <button className={s.linkedInBtn}>
            <LinkedInIcon /> LinkedIn
          </button>
        )}
      </div>
    </div>
  );
}

export default CardHeader;
