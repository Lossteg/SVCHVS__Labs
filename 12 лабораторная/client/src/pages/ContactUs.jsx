import React from "react";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import Background from "../components/shared/Background";
import {
  Typography,
  Paper,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const ContactUs = () => {
  const containerStyle = {
    marginTop: "2rem",
    marginBottom: "2rem",
  };

  const paperStyle = {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <>
      <Background />
      <Header />
      <div className="main">
        <Container style={containerStyle} maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Paper elevation={3} style={paperStyle}>
                <Typography variant="h4" gutterBottom>
                  Contact Us
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Email:"
                      secondary="info@cmykprintingsolutions.com"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Phone:"
                      secondary="+1 (555) 123-4567"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Address:"
                      secondary="123 Printing Street, Cityville, Printland"
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
