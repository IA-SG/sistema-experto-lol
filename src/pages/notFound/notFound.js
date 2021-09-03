import React from "react";
import BackgroundComponent from "../../components/background_animation";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import notFoundAnimation from "../../assets/notfound.gif";
import "./notFound.css";

const NotFoundPage = () => {
  return (
    <>
      <BackgroundComponent />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="notfound__background"
      >
        <h1>Página no encontrada</h1>
        <img
          src={notFoundAnimation}
          width={300}
          height={300}
          alt="Not found animation GIF"
        />
        <Link to="/" className="notfound__button">
          <Button variant="contained" color="primary" startIcon={<HomeIcon />}>
            Volver
          </Button>
        </Link>
      </Grid>
    </>
  );
};

export default NotFoundPage;