import { useState, useEffect } from 'react'
export default function MainPage () {

const [foods, setFoods] = useState([]);
const [images, setImages] = useState('');



useEffect(() => {
    fetch('http://localhost:8080/api/foods/getAll')
    .then(response => response.json())
    .then(response => setFoods(response))

} , [])

    return(
        <div>
            {foods.map(food => {
            
            
            return (<div key = {food.id}>
                <h2>{food.name}</h2>
                <img src = {food.image} style = {{width : "100px"}}/>
                <h4>fiyatı = {food.prize}</h4>
            </div>);


            })}
        </div>
    );

}