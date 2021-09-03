import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const CardComponent = ({ id, src, title }) => {

  const capitalizeFirstLetter = (string) => {
    let newString = string.toLowerCase();
    return newString.charAt(0).toUpperCase() + newString.slice(1);
  }

  return (
    <div style={{ margin: "10px" }}>
      <Card key={id}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height={200}
            image={src}
            title={title}
          />
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
