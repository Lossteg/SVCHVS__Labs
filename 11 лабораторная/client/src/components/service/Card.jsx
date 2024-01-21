import React from "react";
import {
  Card as MuiCard,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

const Card = ({  name, imageUrl, onDetailsClick, onMakeOrderClick }) => {
  return (
    <MuiCard
      sx={{
        maxWidth: 300,
        margin: "0 5 3 0",
        alignSelf: "center",
        padding: "2px",
      }}
    >
      <img
        src={imageUrl}
        alt={name}
        style={{ width: "300px", height: "280px" }}
      />
      <CardContent>
        <Typography variant="h6">{name}</Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
        <Button size="small" onClick={onDetailsClick}>
          Read More
        </Button>
          <Button size="small" color="primary" variant="contained" onClick={onMakeOrderClick}>
            Order
          </Button>
      </CardActions>
    </MuiCard>
  );
};

export default Card;

