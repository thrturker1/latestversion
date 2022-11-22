import React from 'react'
import { useState } from 'react';

function ListFood({food}){
    return(
        <div>
            {food.name}
        </div>
    );
}

export default ListFood;