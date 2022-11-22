import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels() {
  return (
    <div>
      <p style = {{marginLeft : '490px'}}>Lütfen size doğru ürünleri sergileyebilmemiz için aşağıdan alerjen(lerinizi) seçiniz.</p>
      <FormGroup>
        <FormControlLabel sx = {{marginLeft:'710px'}} control={<Checkbox default />} label="Laktoz" />
        <FormControlLabel sx = {{marginLeft:'710px'}} control={<Checkbox default />} label="Yumurta" />
        <FormControlLabel sx = {{marginLeft:'710px'}} control={<Checkbox default />} label="Gluten" />
        <FormControlLabel sx = {{marginLeft:'710px'}} control={<Checkbox default />} label="Balık Eti" />
        <FormControlLabel sx = {{marginLeft:'710px'}} control={<Checkbox default />} label="Beyaz Et" />
        <FormControlLabel sx = {{marginLeft:'710px'}} control={<Checkbox default />} label="Kırmızı Et" />
        <FormControlLabel sx = {{marginLeft:'710px'}} control={<Checkbox default />} label="Fıstık" />
        <FormControlLabel sx = {{marginLeft:'710px'}} control={<Checkbox default />} label="Nişasta" />
      </FormGroup>
    </div>
  );
}