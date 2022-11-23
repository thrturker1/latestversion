import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {useState, useEffect} from 'react';

export default function CheckboxLabels () {
  const [alergens, setAlergens] = useState([]);

    useEffect(() => {
    fetch('http://localhost:8080/api/alergens/getAll')
    .then(response => response.json())
    .then(response => setAlergens(response))
} , [])

  

  return (
    
    <div>
      <p style = {{marginLeft : '465px',marginRight : '475px', marginTop : '30px', border : "2px solid red", backgroundColor : '#ff9999'}}>Lütfen size doğru ürünleri sergileyebilmemiz için aşağıdan alerjen(lerinizi) seçiniz.</p>
      <FormGroup>
        {alergens.map(alergen => {
          return(
            <div key = {alergen.id}>
              <FormControlLabel sx = {{marginLeft:'710px'}} control={<Checkbox default/>} label={alergen.name} />
            </div>
          );
        })}
      </FormGroup>
    </div>
  );
}