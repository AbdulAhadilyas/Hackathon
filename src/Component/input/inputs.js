import React from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';


function CustomInput({ icon, ...prop }) {
    return (
        <Box sx={{
            marginBottom:2
        }}>
            <TextField id="standard-basic" variant="standard"{...prop}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            {icon}
                        </InputAdornment>
                    ),
                }} />
        </Box>

    )
}

export default CustomInput
