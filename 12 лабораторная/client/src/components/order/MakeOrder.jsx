import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";
// import CreateOrderConfirm from "../modals/CreateOrderConfirm";
import OrderConfirmation from "../modals/OrderConfirmation";
import { postOrder } from "../../api/orderAPI";

const MakeOrder = ({ service, onClose }) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [confirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
  // const [orderTime, setOrderTime] = useState(null);

  useEffect(() => {
    // При изменении выбранного сервиса, заполним selectedSubcategory всеми возможными категориями
    if (service && service.properties) {
      const initialSubcategory = {};
      Object.keys(service.properties).forEach((property) => {
        initialSubcategory[property] = "";
      });
      setSelectedSubcategory(initialSubcategory);
    }
  }, [service]);

  const handleSubcategoryChange = (property) => (event) => {
    setSelectedSubcategory((prevSubcategory) => ({
      ...prevSubcategory,
      [property]: event.target.value,
    }));
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  useEffect(() => {
    // Обновляем итоговую цену при изменении выбранных опций или количества
    const calculateTotalPrice = () => {
      let total = 0;

      if (service && service.price && selectedSubcategory) {
        for (const property in selectedSubcategory) {
          const selectedOption = selectedSubcategory[property];
          const priceForOption = service.price[property]?.[selectedOption];

          if (!isNaN(priceForOption)) {
            total += priceForOption;
          }
        }
      }

      return total * quantity;
    };

    setTotalPrice(calculateTotalPrice());
  }, [service, selectedSubcategory, quantity]);

  const areAllFieldsFilled = () => {
    for (const property in selectedSubcategory) {
      if (!selectedSubcategory[property]) {
        console.log("хотя бы одно свойство в selectedSubcategory не выбрано");
        return false;
      }
    }

    if (quantity < 1) {
      return false;
    }

    console.log("все поля заполнены");
    return true; // все поля заполнены
  };

  // useEffect(() => {
  //   // Этот блок кода выполнится после обновления orderTime
  //   const orderData = {
  //     service: service.name,
  //     properties: selectedSubcategory,
  //     quantity,
  //     totalPrice,
  //     orderTime: orderTime,
  //   };

  //   // Проверка, чтобы избежать вызова при первом рендере
  //   if (orderTime) {
  //     postOrderData(orderData);
  //   }
  // }, [orderTime, service, selectedSubcategory, quantity, totalPrice]);

  const handleOrderButtonClick = () => {
    if (!areAllFieldsFilled()) {
      console.log("Получили false из функции валидации");
      alert("Validation error. Please fill in all fields");
      return;
    }

    // const orderData = {
    //   service: service.name,
    //   properties: selectedSubcategory,
    //   quantity,
    //   totalPrice,
    // };

    setConfirmationDialogOpen(true);

    // postOrderData(orderData);
    // addOrderTime();
  };

  // const addOrderTime = (callback) => {
  //   setOrderTime(new Date(), callback);
  // };

  const onOrderSend = () => {
    const orderData = {
      service: service.name,
      properties: selectedSubcategory,
      quantity,
      totalPrice,
    };

    postOrderData(orderData);
  }

  const postOrderData = async (orderData) => {
    try {
      // Отправляем заказ на бэкенд
      const response = await postOrder(orderData);
      console.log("Order placed:", response);
      setConfirmationDialogOpen(true);
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const handleOrderChange = () => {
    setConfirmationDialogOpen(false);
  }
  
  const handleOrderCancel = () => {
    setSelectedSubcategory({});
    setQuantity(1);
    setTotalPrice(0);
    console.log("Reseted all states & canceled in Parent Component");
  }


  const handleCloseDialog = () => {
    setConfirmationDialogOpen(false);
    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent>
        <Typography variant="h4" align="center" marginBottom="2vh">
          Make an Order
        </Typography>
        <Typography variant="h6" gutterBottom>
          {service.name} Details:
        </Typography>
        {Object.keys(service.properties).map((property) => (
          <Box marginBottom="2vh" key={property}>
            <FormControl fullWidth>
              <InputLabel
                id={`${property}-label`}
                sx={{ backgroundColor: "white", padding: "0 2.2px" }}
              >
                {property}
              </InputLabel>
              <Select
                labelId={`${property}-label`}
                id={property}
                value={selectedSubcategory[property] || ""}
                onChange={handleSubcategoryChange(property)}
                fullWidth
              >
                {service.properties[property].map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        ))}
        <Box marginBottom="2vh">
          <FormControl fullWidth>
            <InputLabel
              id="quantity-label"
              sx={{ backgroundColor: "white", padding: "0 2px" }}
            >
              Quantity
            </InputLabel>
            <Select
              labelId="quantity-label"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              fullWidth
            >
              {[1, 2, 3, 4, 5].map((quantityOption) => (
                <MenuItem key={quantityOption} value={quantityOption}>
                  {quantityOption}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Typography variant="h6" gutterBottom>
          Total Price: ${totalPrice}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={handleOrderButtonClick}
          color="primary"
          variant="contained"
        >
          Place Order
        </Button>
      </DialogActions>
      {/* {confirmationDialogOpen && (
        <OrderConfirmation onClose={handleCloseDialog} />
      )} */}
      {confirmationDialogOpen && (
        <OrderConfirmation
          orderData={{
            service: service.name,
            properties: selectedSubcategory,
            quantity,
            totalPrice,
          }}
          onOrderChange={handleOrderChange}
          onOrderCancel={handleOrderCancel}
          onOrderSend={onOrderSend}
          onClose={handleCloseDialog}
        />
      )}
    </Dialog>
  );
};

export default MakeOrder;
