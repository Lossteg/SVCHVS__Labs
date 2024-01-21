import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { getServiceData } from '../../api/serviceAPI';
import Card from './Card';
import Overview from './Overview';
import MakeOrder from '../order/MakeOrder'

const CardList = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [makeOrderOpen, setMakeOrderOpen] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServiceData();
        setServices(data);
      } catch (error) {
        console.error("Error fetching service data:", error);
      }
    };

    fetchServices();
  }, []);

  const handleDetailsClick = (service) => {
    setSelectedService(service);
  };

  const handleCloseOverview = () => {
    setSelectedService(null);
  };

  const handleMakeOrderClick = (service) => {
    setMakeOrderOpen(true);
    setSelectedService(service);
  };

  const handleCloseMakeOrder = () => {
    setMakeOrderOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="main">
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
        Our services
      </Typography>
      <Grid container spacing={2} style={{ justifyContent: "center" }}>
        {Array.isArray(services) && services.length > 0 ? (
          services.map((service) => (
            <Grid
              item
              key={service.name}
              xs="auto"
              sm="auto"
              md="auto"
              style={{ display: "flex", padding: "16px 0px 16px 20px" }}
            >
              <Card
                service={service}
                name={service.name}
                properties={service.properties}
                imageUrl={service.imageURL}
                onDetailsClick={() => handleDetailsClick(service)} // Создали замыкание для возвращения service, иначе - создали бы бесконечный цикл, если б написали handleDetailsClick(service)
                onMakeOrderClick={() => handleMakeOrderClick(service)}
              />
            </Grid>
          ))
        ) : (
          <p>No services available</p>
        )}
      </Grid>
      {selectedService && !makeOrderOpen && (
        <Overview service={selectedService} onClose={handleCloseOverview} />
      )}
      {makeOrderOpen && selectedService && (
        <MakeOrder service={selectedService} onClose={handleCloseMakeOrder} />
      )}
    </div>
  );
};

export default CardList;
