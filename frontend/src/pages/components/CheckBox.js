import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels () {
  return (
    
    <div>
      <p style = {{marginLeft : '490px'}}>Lütfen size doğru ürünleri sergileyebilmemiz için aşağıdan alerjen(lerinizi) seçiniz.</p>
      <FormGroup>
        <FormControlLabel sx = {{marginLeft:'710px'}} control={<Checkbox default />} label="Laktoz" value = "Laktoz"/>
        <FormControlLabel sx = {{marginLeft:'710px'}} control={<Checkbox default />} label="Gluten" value = "Gluten"/>
        <FormControlLabel sx = {{marginLeft:'710px'}} control={<Checkbox default />} label="Balık Eti" value = "Balık Eti"/>
        <FormControlLabel sx = {{marginLeft:'710px'}} control={<Checkbox default />} label="Beyaz Et" value = "Beyaz Et"/>
        <FormControlLabel sx = {{marginLeft:'710px'}} control={<Checkbox default />} label="Kırmızı Et" value = "Kırmızı Et"/>
        <FormControlLabel sx = {{marginLeft:'710px'}} control={<Checkbox default />} label="Fıstık" value = "Fıstık"/>
        <FormControlLabel sx = {{marginLeft:'710px'}} control={<Checkbox default />} label="Nişasta" value = "Nişasta"/>
      </FormGroup>


    </div>
  );
}