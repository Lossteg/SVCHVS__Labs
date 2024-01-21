import React from "react";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import Background from "../components/shared/Background";
import {
  Typography,
  Paper,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import Logo from "../components/shared/Logo";

const AboutUs = () => {
  const containerStyle = {
    marginTop: "2rem",
    marginBottom: "2rem",
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "fit-content",
    padding: "2vh"
  };

  return (
    <>
      <Background />
      <Header />
      <div className="main">
        <Container style={containerStyle} maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Card style={cardStyle}>
                <Logo className={"logo-about-us"}/>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3}>
                <CardContent>
                  <Typography variant="h4" gutterBottom>
                    About Us
                  </Typography>
                  <Typography variant="body1">
                    Welcome to CMYK, your reliable partner for
                    high-quality printing solutions. At CMYK, we strive
                    for excellence in every project, ensuring that your printed
                    materials make a lasting impression.
                  </Typography>
                  <Typography variant="body1" style={{ marginTop: 16 }}>
                    Our team of dedicated professionals is committed to
                    delivering top-notch printing services tailored to meet your
                    specific needs. Whether you need eye-catching business
                    cards, vibrant banners, or sophisticated brochures, we've
                    got you covered.
                  </Typography>
                  <Typography variant="body1" style={{ marginTop: 16 }}>
                    Explore our website to discover the wide range of printing
                    services we offer. Feel free to contact us with any
                    inquiries or to discuss your upcoming projects. We look
                    forward to helping you bring your ideas to life through the
                    power of print.
                  </Typography>
                </CardContent>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
