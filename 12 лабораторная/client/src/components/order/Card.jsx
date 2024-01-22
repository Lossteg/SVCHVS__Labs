import React from "react";
import {
  Card as MuiCard,
  CardContent,
  Typography,
  Chip,
  Paper,
} from "@mui/material";

const Card = ({ order }) => {
  const { service, properties, quantity, totalPrice } = order;

  return (
    <MuiCard
      sx={{
        maxWidth: 400,
        margin: "10px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent>
        <Typography variant="h6">{service} Order</Typography>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: "10px",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography variant="subtitle1">Properties:</Typography>
            {Object.entries(properties).map(([key, value]) => (
              <Chip
                key={key}
                label={`${key}: ${value}`}
                size="small"
                sx={{ margin: "2px" }}
              />
            ))}
          </div>
          <div>
            <Typography variant="subtitle1">Quantity:</Typography>
            <Typography variant="body1">{quantity}</Typography>
          </div>
          <div>
            <Typography variant="subtitle1">Total Price:</Typography>
            <Typography variant="body1">${totalPrice}</Typography>
          </div>
        </Paper>
      </CardContent>
    </MuiCard>
  );
};

export default Card;

