import React from 'react';
import {Button} from '@mui/material';

const Appbar = () => {

    return(
        <div>
            <Button title="Button" onPress={() => alert("hi!")}/>
        </div>
    );
}

export default Appbar;