import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom';
import Header from './components/Header';

export default function MainPage ({alergens}) {

const [foods, setFoods] = useState([]);
const [images, setImages] = useState('');

useEffect(() => {
    fetch('http://localhost:8080/api/foods/getAll')
    .then(response => response.json())
    .then(response => setFoods(response))

} , [])

    return(
        <div>
            <Header/>
            {foods.map(food => {
            
            
            return (<div key = {food.id}>
                    <div style = {{width : '170px' , height : '170px', marginTop : '100px'}}>
                        <Box sx = {{width : '300px' , backgroundColor : '#FF9999',border : "2px solid red"}}>
                        <img src = {food.image} alt = {"food side"} style = {{width : "100px", marginLeft: '30px',marginTop: '10px'}}/>

                        <Link to = "/foodpage/$`{asdasd}`">
                        <h4>{food.name}</h4>
                        </Link>

                        <h4>fiyatı = {food.prize} TL</h4>
                        </Box>
                    </div>
            </div>);


            })}
        </div>
    );

}