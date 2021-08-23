import Button from "@material-ui/core/Button";
import allChampsImg from "./assets/all-champs.jpg";
import "./App.css";

function App() {
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
      <Button
        className="background__button"
        variant="contained"
        color="primary"
        size="large"
      >
        Empezar
      </Button>
      <img
        src={allChampsImg}
        className="background__image"
        alt="League of Legends - Wallpaper 4K"
      />
    </div>
  );
}

export default App;
