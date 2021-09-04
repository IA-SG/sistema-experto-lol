import React, { useState } from "react";
import DialogComponent from "../../components/dialog";
import Button from "@material-ui/core/Button";
import allChampsImg from "../../assets/all-champs.jpg";
import { Link } from "react-router-dom";
import LazyImageComponent from "../../components/lazy-image";
import "./home.css";

const HomePage = () => {
  const [open, setOpen] = useState(false);

  const handleDialog = () => {
    setOpen(!open);
  };

  return (
    <div className="background__container">
      <h1 className="background__title goo">
        Sistema Experto - League Of Legends
      </h1>
      <svg style={{ visibility: "hidden", position: "absolute" }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
      <div className="background__button">
        <Link to="/questions" className="background__link">
          <Button variant="contained" color="primary" size="large">
            Empezar
          </Button>
        </Link>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleDialog}
        >
          Tutorial
        </Button>
      </div>
      <LazyImageComponent className="background__image" src={allChampsImg} alt="League of Legends - Wallpaper 4K" />
      <DialogComponent
        isOpen={open}
        handleClose={handleDialog}
      />
    </div>
  );
};

export default HomePage;
