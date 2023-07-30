import React from "react";
import "./Stories.css";
import argen from "../../../assets/users/1.jpg";
import erbol from "../../../assets/users/2.jpg";
import nuremir from "../../../assets/users/3.png";
import azimitto from "../../../assets/users/4.png";
import kersan from "../../../assets/users/5.jpg";
import tunuk from "../../../assets/users/6.jpg";
import kyial from "../../../assets/users/7.jpg";
import adil from "../../../assets/users/adil.png";
import kutman from "../../../assets/users/kutman.png";

const STORIES_ITEMS = [
  {
    image: argen,
    name: "keerthivash_ars",
    isCheck: true,
  },
  {
    image: erbol,
    name: "premkumar",
    isCheck: true,
  },
  {
    image: nuremir,
    name: "kamalesh",
  },
  {
    image: azimitto,
    name: "syed_riz",
  },
  {
    image: kersan,
    name: "abdul_kalam",
    isCheck: true,
  },
  {
    image: tunuk,
    name: "jadhav",
  },
  {
    image: kyial,
    name: "md_ameer",
    isCheck: true,
  },
  {
    image: adil,
    name: "imran",
  },
  {
    image: kutman,
    name: "jabir_md",
  },
];

const Stories = () => {
  return (
    <div className="stories">
      {STORIES_ITEMS.map((el, i) => {
        const checked = el.isCheck ? "stories__item check" : "stories__item";

        return (
          <div key={i} className={checked}>
            <div style={{ backgroundImage: `url(${el.image})` }} />
            <span>{el.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
