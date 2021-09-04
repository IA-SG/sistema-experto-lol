import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LazyImageComponent from "./lazy-image";

const CardComponent = ({ id, src, title }) => {

  const capitalizeFirstLetter = (string) => {
    let newString = string.toLowerCase();
    return newString.charAt(0).toUpperCase() + newString.slice(1);
  }

  return (
    <div style={{ margin: "10px" }}>
      <Card key={id}>
        <CardActionArea>
          <LazyImageComponent src={src} alt={title} width={350} height={250}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {capitalizeFirstLetter(id)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CardComponent;
