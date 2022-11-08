import React from 'react';
import {useGetCurrencyQuery} from "../features/currencyApi";
import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";

const Header = () => {
  const {data = []} = useGetCurrencyQuery()

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{mr: 2}}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            Currency
          </Typography>
          <Typography>
            {data[0]?.base_ccy} {data[0]?.buy*100/100}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;