import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        p: 1,
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Container maxWidth="lg" style={{display: "flex", alignItems: "center"}}>
        <Logo className="logo-footer" />
        <Grid container spacing={isMobile ? 2 : 5}>
          <Grid item xs={12} sm={4}>
            <Link to="/about-us" className="router-link footer-link">
              <Typography>About us</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Link to="/FAQ" className="router-link footer-link">
              <Typography>FAQ</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Link to="/contacts" className="router-link footer-link">
              <Typography>Contact us</Typography>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
