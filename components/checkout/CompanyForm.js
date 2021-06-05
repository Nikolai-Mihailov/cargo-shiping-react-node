import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select'
import {RegistrationContext} from '../../context/RegistrationContext';
import { useEffect, useContext } from "react";


export default function CompanyForm() {


  const [user, setUser] = useContext(RegistrationContext);
  
  const [subscription, setSubscription] = useState('');
  
  function handleSubscriptionChange(event) {
    setSubscription(event.target.value);
  }
  
  const submitForm = (event) => {
    event.preventDefault();
    console.log(user)
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Данни на фирмата
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="Име на компанията" fullWidth autoComplete="cc-name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Булстат"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Expiry date" fullWidth autoComplete="cc-exp" />
        </Grid>
        <Grid item xs={12} md={6}>
        <FormControl variant="outlined"  fullWidth required>
                <InputLabel label="Абонаментен план">Абонаментен план</InputLabel>
                <Select
                  native
                  value={subscription}
                  onChange={handleSubscriptionChange}
                  label="Абонаментен план"
                  variant="outlined"
                >
                  <option aria-label="" value="" />
                  <option value={1}>Един месец</option>
                  <option value={3}>Три месеца</option>
                  <option value={12}>Една година</option>
                </Select>
              </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Аддрес"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Град"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="Област" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Пощенски код"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Държава"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
