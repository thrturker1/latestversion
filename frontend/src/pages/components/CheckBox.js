import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const formStyle = {

  backgroundPosition : 'center'
};

export default function CheckboxLabels() {
  return (
    <div style = {{formStyle}}>
      <p>Lütfen size doğru ürünleri sergileyebilmemiz için aşağıdan alerjen(lerinizi) seçiniz.</p>
      <FormGroup>
        <FormControlLabel control={<Checkbox default />} label="Laktoz" />
        <FormControlLabel control={<Checkbox default />} label="Yumurta" />
        <FormControlLabel control={<Checkbox default />} label="Gluten" />
        <FormControlLabel control={<Checkbox default />} label="Balık Eti" />
        <FormControlLabel control={<Checkbox default />} label="Beyaz Et" />
        <FormControlLabel control={<Checkbox default />} label="Kırmızı Et" />
        <FormControlLabel control={<Checkbox default />} label="Fıstık" />
        <FormControlLabel control={<Checkbox default />} label="Nişasta" />
      </FormGroup>
    </div>
  );
}