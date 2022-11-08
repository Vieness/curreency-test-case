import React, {useEffect} from 'react';
import {Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {useGetCurrencyQuery} from "../features/currencyApi";

const Currency = () => {
  const {data: exchangeRates = []} = useGetCurrencyQuery()
  const [exchangeData, setExchangeData] = React.useState({
    currFrom: '',
    currTo: '',
    amount: 0,
  })
  const [result, setResult] = React.useState('')

  const currMap = exchangeRates.reduce((currencyMap, currency) => {
    currencyMap[currency.ccy] = currency
    return currencyMap
  }, {})

  useEffect(() => {
    const {currFrom, currTo, amount} = exchangeData
    if (!(currFrom && currTo && amount)) return
    setResult((amount * currMap[currFrom].sale / currMap[currTo].sale).toFixed(2))
  }, [exchangeData, currMap])

  const handleChange = (e) => {
    const {name, value} = e.target;
    setExchangeData(() => {
      return {
        ...exchangeData,
        [name]: value,
      };
    });
  }

  return (
    <Grid align={'center'}>
      <Box sx={{mt: 2}}>
        <TextField
          onChange={handleChange}
          sx={{m: 1, minWidth: 120}}
          name="amount"
          label="First Currency"
          variant="outlined"
        />
        <FormControl sx={{m: 1, minWidth: 120}}>
          <InputLabel id="demo-controlled-open-select-label">First</InputLabel>
          <Select
            labelId="First"
            id="First"
            name="currFrom"
            defaultValue={''}
            value={exchangeData.currFrom}
            label="First"
            onChange={handleChange}
          >
            <MenuItem value="">
            </MenuItem>
            {exchangeRates.map(curr =>
              <MenuItem
                key={curr.ccy}
                value={curr.ccy}
              >
                {curr.ccy}
              </MenuItem>
            )}
          </Select>
        </FormControl>
      </Box>
      <Box>
        <TextField
          sx={{m: 1, minWidth: 120}}
          id="outlined-basic"
          name="result"
          label="Second Currency"
          variant="outlined"
          value={result}
        />
        <FormControl sx={{m: 1, minWidth: 120}}>
          <InputLabel id="demo-controlled-open-select-label">Second</InputLabel>
          <Select
            labelId="Second"
            id="Second"
            name="currTo"
            value={exchangeData.currTo}
            label="Second"
            onChange={handleChange}
          >
            <MenuItem value="">

            </MenuItem>
            {exchangeRates.map(curr =>
              <MenuItem
                key={curr.ccy}
                value={curr.ccy}
              >
                {curr.ccy}
              </MenuItem>
            )}
          </Select>
        </FormControl>
      </Box>
    </Grid>
  );
};

export default Currency;