import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

const OrderConfirmation = ({
  orderData,
  onOrderChange,
  onOrderCancel,
  onOrderSend,
  onClose,
}) => {
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleOrderChange = () => {
    onOrderChange();
  };

  const handleOrderCancel = () => {
    setConfirmationMessage("The order was canceled");
    onOrderCancel();
  };

  const handleOrderSend = async () => {
    await onOrderSend();
    setConfirmationMessage("The order was sent to us");
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={true} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogContent>
        <Typography variant="h4" align="center" marginBottom="2vh">
          Order Confirmation
        </Typography>
        {Object.keys(orderData.properties).length <= 0 ? (
            <Typography
              variant="h6"
              align="center"
              marginBottom="2vh"
              style={{
                color: "red",
                textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
              }}
            >
            {confirmationMessage}
          </Typography>
        ) : (
          <>
            <Typography variant="h6" gutterBottom>
              Order Details:
            </Typography>
            {Object.keys(orderData.properties).map((property) => (
              <Typography key={property}>
                {property}: {orderData.properties[property]}
              </Typography>
            ))}
            <Typography>Quantity: {orderData.quantity}</Typography>
            <Typography variant="h6" gutterBottom>
              Total Price: ${orderData.totalPrice}
            </Typography>
            <Typography
              variant="h6"
              align="center"
              marginBottom="2vh"
              style={{
                color: "green",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              }}
            >
              {confirmationMessage}
            </Typography>
          </>
        )}
      </DialogContent>
      <DialogActions>
        {confirmationMessage ? (
          <Button onClick={handleClose} color="primary" variant="contained">
            OK
          </Button>
        ) : (
          <>
            <Button
              onClick={handleOrderCancel}
              style={{ backgroundColor: "red", color: "white" }}
              variant="contained"
            >
              Cancel Order
            </Button>
            <Button
              onClick={handleOrderChange}
              color="primary"
              variant="contained"
            >
              Change Order
            </Button>
            <Button
              onClick={handleOrderSend}
              style={{ backgroundColor: "green", color: "white" }}
              variant="contained"
            >
              Send Order
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default OrderConfirmation;
