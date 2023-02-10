import React from "react";
import s from "./styles/CardFooter.module.css";
import TwitterIcon from "../assets/TwitterIcon.svg";
import FacebookIcon from "../assets/FacebookIcon.svg";
import InstagramIcon from "../assets/InstagramIcon.svg";
import LinkedinIcon from "../assets/LinkedinIcon.svg";
import GitHubIcon from "../assets/GitHubIcon.svg";

function CardFooter() {
  return (
    <div className={s.cardFooter}>
      <a href="#">
        <img src={TwitterIcon} alt="" />
      </a>
      <a href="#">
        <img src={FacebookIcon} alt="" />
      </a>
      <a href="#">
        <img src={InstagramIcon} alt="" />
      </a>
      <a href="#">
        <img src={LinkedinIcon} alt="" />
      </a>
      <a href="#">
        <img src={GitHubIcon} alt="" />
      </a>
    </div>
  );
}

export default CardFooter;
