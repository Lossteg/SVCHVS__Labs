import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Box,
  useMediaQuery, 
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Overview = ({ onClose, service }) => {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
    
  if (!service) {
    return (
      <Dialog open={true} onClose={onClose} maxWidth="md" fullWidth>
        <DialogContent>
          <Box textAlign="center">
            <Typography variant="h4" gutterBottom>
              No more info available yet
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Box textAlign="center" width="100%">
            <Button color="primary" onClick={onClose}>
              Close
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    );
  }

  const { name, imageURL, properties, price } = service;

  return (
    <Dialog open={true} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent>
        <DialogActions style={{ padding: 0 }}>
          <Button onClick={onClose} color="primary">
            Close
          </Button>
        </DialogActions>
        <Typography variant="h4" align="center" marginBottom="2vh">
          {name}
        </Typography>
        <Card sx={{marginBottom: "2vh"}}>
          <CardMedia
            component="img"
            height="200"
            image={imageURL}
            alt={name}
            style={{ objectFit: "contain" }}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Properties
            </Typography>
            <List>
              {Object.entries(properties).map(([property, values]) => (
                <React.Fragment key={property}>
                  <ListItem>
                    <ListItemText
                      primary={property}
                      secondary={values.join(", ")}
                      sx={{
                        maxWidth: isSmScreen ? "100px" : "none", 
                      }}
                    />
                    <ListItemSecondaryAction>
                      {property in price && (
                        <Typography variant="body2" color="textSecondary">
                          {values.map((value) => (
                            <React.Fragment key={value}>
                              {value}: ${price[property][value]}
                              <br />
                            </React.Fragment>
                          ))}
                        </Typography>
                      )}
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default Overview;
