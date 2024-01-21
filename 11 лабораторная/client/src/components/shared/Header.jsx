import React, { useEffect, useState } from 'react';
import { getUserData } from '../../api/userAPI';
import { useTheme } from '@mui/system';
import { AppBar, Toolbar, Container, Typography, Box, IconButton, Avatar, Tooltip } from '@mui/material';
import Logo from "./Logo";
import UserAvatar from "../../assets/UserAvatar.png";
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const theme = useTheme();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserData();
        setUserData(data);
      } catch (error) {
        console.error("Error in Header component:", error);
      }
    };
    fetchUserData();
  }, []);

  const handleLogoClick = () => {
    console.log("Я кликнул на лого")
    navigate("/");
  }

  const handleAvatarClick = () => {
    console.log("Я кликнул на аватарку")
    navigate("/profile");
  }

  return (
    <AppBar component="header" position="fixed">
      <Container maxWidth="xl" sx={{ pt: "0.3rem", pb: "0.3rem" }}>
        <Toolbar
          disableGutters
          sx={{ justifyContent: "space-between", padding: 0 }}
        >
          <Logo className="logo-header" onClick={handleLogoClick}/>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column-reverse",
              alignItems: "center",
              [theme.breakpoints.down("600")]: {
                flexDirection: "row",
                gap: "0.4rem",
              },
            }}
          >
            <Typography
              className="welcome-user"
              sx={{
                fontSize: "1.1rem",
                [theme.breakpoints.down("1100")]: {
                  fontSize: "1rem",
                },
                [theme.breakpoints.down("md")]: {
                  fontSize: "0.9rem",
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: "0.8rem",
                },
              }}
            >
              Welcome, {userData.name}!
            </Typography>
            <Tooltip title="My Orders" placement="left">
              <IconButton sx={{ p: 0, backgroundColor: "white" }} onClick={handleAvatarClick}>
                <Avatar
                  alt="User-avatar"
                  src={UserAvatar}
                  sx={{
                    width: "3vw",
                    [theme.breakpoints.down("1350")]: {
                      width: "3.5vw",
                    },
                    [theme.breakpoints.down("1100")]: {
                      width: "3.8vw",
                    },
                    [theme.breakpoints.down("md")]: {
                      width: "4.3vw",
                    },
                    [theme.breakpoints.down("768")]: {
                      width: "4.8vw",
                    },
                    [theme.breakpoints.down("600")]: {
                      width: "5.9vw",
                    },
                    [theme.breakpoints.down("520")]: {
                      width: "6.6vw",
                    },
                    [theme.breakpoints.down("400")]: {
                      width: "9vw",
                    },
                    height: "auto",
                  }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;