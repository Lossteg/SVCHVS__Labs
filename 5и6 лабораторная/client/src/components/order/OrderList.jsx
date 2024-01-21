import React, { useEffect, useState } from 'react';
import { getOrder } from '../../api/orderAPI';
import { Typography, Grid } from '@mui/material';
import Card from "./Card";

function OrderList({ header }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrder();
        setOrders(data);
      } catch (error) {
        console.log("Error fetching order data:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className='main' align="center">
      <Typography
        variant="h1"
        textAlign="center"
        style={{
          marginBottom: "10px",
          color: "black",
          fontSize: "3.7rem",
          fontWeight: "400",
        }}
      >
        {header}
      </Typography>
      <Grid container spacing={2} style={{ flexDirection: "column", justifyContent: "center" }}>
        {Array.isArray(orders) && orders.length > 0 ? (
          orders.map((order, index) => (
            <Grid
              item
              key={index}
              xs="auto"
              sm="auto"
              md="auto"
              style={{ padding: "16px 0px 16px 20px" }}
            >
              <Card order={order} />
            </Grid>
          ))
        ) : (
          <p>You've made no orders yet</p>
        )}
      </Grid>
    </div>
  )
}

export default OrderList;

